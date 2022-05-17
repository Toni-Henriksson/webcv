import {React, useState} from "react";
import '../css/components/resumetemplate.css';


const ResumeTemplate = () => {

    const [name, setName] = useState("Toni Henriksson");
    const [title, setTitle] = useState("Computer Science Major");
    const [education, setEducation] = useState("University of Applied Sciences");

    

    return (
        <div className="resume-template-container">
            <div className="resume-left-part">
                <h1>moi</h1>
            </div>
            <div className="resume-right-part">
                <h1 className="resume-right-part-name">{name}</h1>
                <p className="resume-right-part-title">{title}</p>
                <h1>EDUCATION</h1>
                <p>{education}</p>
            </div>
        </div>    
    );
}

export default ResumeTemplate;