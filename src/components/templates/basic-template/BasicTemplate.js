import { React, useState, useEffect } from "react";
import { get, getDatabase, onValue, ref } from "firebase/database";
import { auth } from "../../../backend/firebase-config";
import './basictemplate.css';
import { onAuthStateChanged, getAuth } from "firebase/auth";

const BasicTemplate = ({ phone, email, userAlias, fullname, templateData }) => {
    const [info, setInfo] = useState([]);
    const [eduInfo, setEduInfo] = useState([]);
    const [skills, setSkills] = useState([]);
    const [about, setAbout] = useState('');
    const author = getAuth();
    const [infoFetch,setInfoFetch ] = useState(false);

    window.addEventListener('load', () => {
        //
    });

    onAuthStateChanged(author, (user)=>{
        if(user && infoFetch == false){
            const uid = user.uid;
            fetchUserData(uid);
            // Manual check for checking if data is already fetched -> no need to re-fetch (Avoid infinite loops)
            setInfoFetch(true);
        }
    });

    function fetchUserData(uid){
        const db = getDatabase();
        const workDB = ref(db, 'users/' + uid + '/exp');
        const eduDB = ref(db, 'users/' + uid + '/edu');
        const aboutDB = ref(db, 'users/' + uid + '/about');
        const skillsDB = ref(db, 'users/' + uid + '/skills');

        // Work experience onValue listener
        onValue(workDB, (snapshot) => {
            const exp = []
            snapshot.forEach(item => {
                const temp = item.val();
                exp.push([temp.title, temp.duration, temp.description]);
                return false;
            })
            setInfo(exp);
        });
        // Education onValue listener
        onValue(eduDB, (snapshot) => {
            const edu = []
            snapshot.forEach(item => {
                const temp = item.val();
                edu.push([temp.school, temp.duration, temp.degree]);
                return false;
            })
            setEduInfo(edu);
        });
        // About section text onValue listener
        onValue(aboutDB, (snapshot) => {
            snapshot.forEach(item => {
                const temp = item.val();
                setAbout(temp);
                return false;
            })
        });
        onValue(skillsDB, (snapshot) => {
            const ski = []
            snapshot.forEach(item => {
                const temp = item.val();
                ski.push([temp.skill]);
                return false;
            })
            setSkills(ski);
        });
    }
    
    return (
        <>
        <div className="template-container">
            <div className="basic-template-header">
                <div className="basic-template-header-left">
                    <h1 style={{color: "black", fontSize: "35px"}}>{templateData == null ? fullname : templateData.fullname}</h1>
                </div>
                <div className="basic-template-header-right">
                    <p>email: {templateData == null ? email : templateData.email}</p>
                    <p>phone: {templateData == null ? phone : templateData.phoneNumber}</p>
                    <p>github: </p>
                </div>
            </div>

            <div className="basic-template-experience-section">
                <div className="basic-template-experience-left">
                    <h1>Personal profile</h1>
                </div>
                <div className="basic-template-experience-right">
                    <p>{about}</p>
                </div>
            </div>

            <div className="basic-template-experience-section">
                <div className="basic-template-experience-left">
                    <h1>Work Experience</h1>
                </div>
                <div className="basic-template-experience-right">
                    {
                        info.map(function(item, id) {
                            return(
                                <div key={id} className="template-data-fragment">
                                    <p className="template-data-fragment-title">{item[0]}</p>
                                    <p className="template-data-fragment-date">{item[1]}</p>
                                    <p className="template-data-fragment-text">{item[2]}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="basic-template-experience-section">
                <div className="basic-template-experience-left">
                    <h1>Education</h1>
                </div>
                <div className="basic-template-experience-right">
                    {
                        eduInfo.map(function(item, id) {
                            return(
                                <div key={id} className="template-data-fragment">
                                    <p className="template-data-fragment-title">{item[0]}</p>
                                    <p className="template-data-fragment-date">{item[1]}</p>
                                    <p className="template-data-fragment-text">{item[2]}</p>
                                </div>
                            )
                        }) 
                    }
                </div>
            </div>

            <div className="basic-template-experience-section">
                <div className="basic-template-experience-left">
                    <h1>Key Skills</h1>
                </div>
                <div className="basic-template-experience-right">
                    <div className="skills-container">
                    {
                        skills.map(function(item, id) {
                            return(
                                <div key={id} className="skill-container-item">
                                    <p className="template-data-fragment-title">{item}</p>
                                </div>
                            )
                        }) 
                    }
                    </div>
                </div>
            </div>
        </div>  
        </>  
    );
}

export default BasicTemplate;