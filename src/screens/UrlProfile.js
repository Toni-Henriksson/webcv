import { React, useEffect, useState } from "react";
import '../css/screens/url-profile.css';
import NavigationBar from '../components/NavigationBar';
import { useParams } from 'react-router-dom';
import { getDatabase, onValue, ref } from "firebase/database";
import BasicTemplate from "../components/templates/basic-template/BasicTemplate";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const UrlProfile = () => {
    // GET Username from given URL 
    const params = useParams();
    // GET UID For given username
    const [user, setUser] = useState("");
    // DIY Eventlistener for when data is received from DB
    const [dataReceived, setDataReceived] = useState(false);
    // Data received from database bassed on url username
    const [uidData, setUidData] = useState([]);

    const [template, setTemplate] = useState(0);
    const author = getAuth();
    const [info, setInfo] = useState([]);
    const [eduInfo, setEduInfo] = useState([]);
    const [skills, setSkills] = useState([]);
    const [about, setAbout] = useState("");
    const [infoFetch, setInfoFetch] = useState(false);
    const [urlUserManual, setUrlUserManual] = useState("");
    const [data, setData] = useState([]);

    // TODO: Now just make BasicTemplate that takes info from user as props & render from screen :)
    useEffect(() => {
        onValue(ref(getDatabase(), 'userrouting/' + params.username), snapshot => {
            const data = snapshot.val();
            if (data !== null) {
                const tempUid = data.uid;
                setUser(tempUid);
            }
            else {
                console.log("No data receivsded from the backend of this user :(")
            }
            setDataReceived(true)
        })
    }, []);
    useEffect(() => {
        if (dataReceived == true) {
            fetchUserData(user);
        }
    }, [dataReceived]);

    function fetchUserData(uid) {
        const db = getDatabase();
        const workDB = ref(db, "users/" + uid + "/exp");
        const eduDB = ref(db, "users/" + uid + "/edu");
        const aboutDB = ref(db, "users/" + uid + "/about");
        const skillsDB = ref(db, "users/" + uid + "/skills");

        onValue(ref(getDatabase(), 'users/' + uid), snapshot => {
            const dataz = snapshot.val();
            if (dataz !== null) {
                setData(dataz);
            }
            else {
                console.log("No data from DB")
            }
        })

        // Work experience onValue listener
        onValue(workDB, (snapshot) => {
            const exp = [];
            snapshot.forEach((item) => {
                const temp = item.val();
                console.log(temp)
                exp.push([temp.title, temp.duration, temp.description]);
                return false;
            });
            setInfo(exp);
        });

        // Education onValue listener
        onValue(eduDB, (snapshot) => {
            const edu = [];
            snapshot.forEach((item) => {
                const temp = item.val();
                edu.push([temp.school, temp.duration, temp.degree]);
                return false;
            });
            setEduInfo(edu);
        });

        // About section text onValue listener
        onValue(aboutDB, (snapshot) => {
            snapshot.forEach((item) => {
                const temp = item.val();
                setAbout(temp);
                return false;
            });
        });

        onValue(skillsDB, (snapshot) => {
            const ski = [];
            snapshot.forEach((item) => {
                const temp = item.val();
                ski.push([temp.skill]);
                return false;
            });
            setSkills(ski);
        });
    }
    
    return (
        <>
            <NavigationBar></NavigationBar>
            <div className="url-profile-wrapper">
                <BasicTemplate
                    templateData={data}
                    experience={info}
                    education={eduInfo}
                    skills={skills}
                    about={about}
                ></BasicTemplate>
            </div>
        </>
    );
}

export default UrlProfile;