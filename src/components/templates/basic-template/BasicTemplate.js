import { React, useState } from "react";
import { get, getDatabase, onValue, ref } from "firebase/database";
import './basictemplate.css';

const BasicTemplate = ({ phone, email, userAlias }) => {
    const [info, setInfo] = useState([]);
    const [eduInfo, setEduInfo] = useState([]);
    window.addEventListener('load', () => {
        Fetchdata();
    });

    // Fetch the required data usinsg the get() method
    const Fetchdata = () => {
        const db = getDatabase();
        const workDB = ref(db, 'exp');
        const eduDB = ref(db, 'edu');
        onValue(workDB, (snapshot) => {
            const exp = []
            snapshot.forEach(item => {
                const temp = item.val();
                exp.push([temp.title, temp.duration, temp.description]);
                return false;
            })
            setInfo(exp);
            console.log("exp: " + exp);
        });
        onValue(eduDB, (snapshot) => {
            const edu = []
            snapshot.forEach(item => {
                const temp = item.val();
                edu.push([temp.school, temp.duration, temp.degree]);
                return false;
            })
            setEduInfo(edu);
            console.log("exp: " + edu);
        });
    }
    return (
        <>
        <div className="template-container">
            <div className="basic-template-header">
                <div className="basic-template-header-left">
                    <h1 style={{color: "black", fontSize: "35px"}}>{userAlias}</h1>
                </div>
                <div className="basic-template-header-right">
                    <p>email: {email}</p>
                    <p>phone: {phone}</p>
                    <p>github: </p>
                </div>
            </div>

            <div className="basic-template-experience-section">
                <div className="basic-template-experience-left">
                    <h1>Personal profile</h1>
                </div>
                <div className="basic-template-experience-right">
                    <p>Moi</p>
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
                    <p>coming soon..</p>
                </div>
            </div>
        </div>  
        </>  
    );
}

export default BasicTemplate;