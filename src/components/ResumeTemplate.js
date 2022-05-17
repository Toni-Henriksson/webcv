import {React, useState} from "react";
import '../css/components/resumetemplate.css';


const ResumeTemplate = () => {

    const [name, setName] = useState("TONI HENRIKSSON");
    const [title, setTitle] = useState("Computer Science Major");
    const [education, setEducation] = useState("University of Applied Sciences");
    const [jobs, setJobs] = useState("Web developer");

    const profileImage = require('../images/claymonster.png');
    

    return (
        <div className="resume-template-container">
            <div className="resume-left-part">
                <div className="profile-pic-container">
                    <img src={profileImage} className="profile-pic"></img>
                    <p>moi</p>
                </div>
            <h1 className="resume-left-h1">Profile</h1>
            <p className="resume-left-p">liibalaaba</p>
            </div>
            <div className="resume-right-part">
                <h1 className="resume-right-part-name">{name}</h1>
                <p className="resume-right-part-title">{title}</p>
                <h1 className="resume-h1">EDUCATION</h1>
                <p className="resume-p">{education}</p>
                <h1 className="resume-h1">EMPLOYMENT</h1>
                <p className="resume-p">{jobs}</p>
                <h1 className="resume-h1">SKILLS & EXPERTISE</h1>
            </div>
        </div>    
    );
}

export default ResumeTemplate;