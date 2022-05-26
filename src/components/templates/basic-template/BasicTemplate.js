import {React, useEffect, useState} from "react";
import './basictemplate.css';

const BasicTemplate = ({ templateData }) => {
    //const profileImage = require('../../images/claymonster.png');
    // email, fullname, username, experience, education, skills, links, phoneNumber
    // <p className="template-left-p">{templateData.email}</p>
    return (
        <>
        <div className="template-container">
            <div className="basic-template-header">
                <div className="basic-template-header-left">
                    <h1 style={{color: "black", fontSize: "35px"}}>{templateData.fullname}</h1>
                </div>
                <div className="basic-template-header-right">
                    <p>email: {templateData.email}</p>
                    <p>phone: {templateData.phoneNumber}</p>
                    <p>github: {templateData.links}</p>
                </div>
            </div>

            <div className="basic-template-experience-section">
                <div className="basic-template-experience-left">
                    <h1>Personal profile</h1>
                </div>
                <div className="basic-template-experience-right">
                    <p>I am an software engineering student from Finland.</p>
                </div>
            </div>

            <div className="basic-template-experience-section">
                <div className="basic-template-experience-left">
                    <h1>Experience</h1>
                </div>
                <div className="basic-template-experience-right">
                    <p>{templateData.experience}</p>
                </div>
            </div>

            <div className="basic-template-experience-section">
                <div className="basic-template-experience-left">
                    <h1>Education</h1>
                </div>
                <div className="basic-template-experience-right">
                    <p>{templateData.education}</p>
                </div>
            </div>

            <div className="basic-template-experience-section">
                <div className="basic-template-experience-left">
                    <h1>Key Skills</h1>
                </div>
                <div className="basic-template-experience-right">
                    <p>{templateData.skills}</p>
                </div>
            </div>
        </div>  
        </>  
    );
}

export default BasicTemplate;