import { React, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './basictemplate.css';

const BasicTemplate = ({ templateData, experience, education, skills, about}) => {
    const [info, setInfo] = useState([]);
    const [data, setData] = useState([]);
    const [pskills, setpSkills] = useState([]);
    const [pabout, setpAbout] = useState("");
    const [eduInfo, setEduInfo] = useState([]);
    const [basicInfo, setBasicInfo] = useState({})
    const [infoFetch, setInfoFetch] = useState(false);
    const author = getAuth();

    onAuthStateChanged(author, (user)=>{
        if(user && infoFetch == false){
            const uid = user.uid;
            fetchUserData2(uid)
            setInfoFetch(true);
        }
    }); 

    // TODO: This is just a mess atm.(Works barely) Needs a better solution ASAP
    function fetchUserData2(uid){
        const db = getDatabase();
        const workDB = ref(db, 'users/' + uid + '/exp');
        const eduDB = ref(db, 'users/' + uid + '/edu');
        const aboutDB = ref(db, 'users/' + uid + '/about');
        const skillsDB = ref(db, 'users/' + uid + '/skills');
        
        onValue(ref(getDatabase(), 'users/' + uid), snapshot => {
            const dataz = snapshot.val();
            if (dataz !== null) {
                setData(dataz);
                setBasicInfo({
                    name: dataz.fullname,
                    email: dataz.email,
                    phone: dataz.phoneNumber,
                  })
            }
            else {
                console.log("No data from DB")
            }
        })

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
                setpAbout(temp);
                return false;
            });
        });

        // Skills section listener
        onValue(skillsDB, (snapshot) => {
            const ski = [];
            snapshot.forEach((item) => {
                const temp = item.val();
                ski.push([temp.skill]);
                return false;
            });
            setpSkills(ski);
        }); 
    } 

    return (        
        <>
        <div className="template-container">
            <div className="basic-template-header">
                <div className="basic-template-header-left">
                    <h1 style={{color: "black", fontSize: "35px"}}>{templateData.fullname ? templateData.fullname : data.fullname}</h1>
                </div>
                <div className="basic-template-header-right">
                    <p>email: {templateData.email ? templateData.email : basicInfo.email}</p>
                    <p>phone: {templateData.phoneNumber ? templateData.phoneNumber : basicInfo.phone}</p>
                    <p>github:{}</p>
                </div>
            </div>

            <div className="basic-template-experience-section">
                <div className="basic-template-experience-left">
                    <h1>Personal profile</h1>
                </div>
                <div className="basic-template-experience-right">
                    <p>{about ? about : pabout}</p>
                </div>
            </div>

            <div className="basic-template-experience-section">
                <div className="basic-template-experience-left">
                    <h1>Work Experience</h1>
                </div>
                <div className="basic-template-experience-right">
                    {
                        experience ? 
                        experience.map(function(item, id) {
                            return(
                                <div key={id} className="template-data-fragment">
                                    <p className="template-data-fragment-title">{item[0]}</p>
                                    <p className="template-data-fragment-date">{item[1]}</p>
                                    <p className="template-data-fragment-text">{item[2]}</p>
                                </div>
                            )
                        })
                        :
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
                       education ?
                       education.map(function(item, id) {
                            return(
                                <div key={id} className="template-data-fragment">
                                    <p className="template-data-fragment-title">{item[0]}</p>
                                    <p className="template-data-fragment-date">{item[1]}</p>
                                    <p className="template-data-fragment-text">{item[2]}</p>
                                </div>
                            )
                        }) 
                        :
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
                        skills ? 
                        skills.map(function(item, id) {
                            return(
                                <div key={id} className="skill-container-item">
                                    <p className="template-data-fragment-title">{item}</p>
                                </div>
                            )
                        }) 
                        :
                        pskills.map(function(item, id) {
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