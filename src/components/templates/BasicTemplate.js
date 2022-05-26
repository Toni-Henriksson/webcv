import {React, useEffect, useState} from "react";
import '../../css/components/templates/basictemplate.css';

const BasicTemplate = ({ templateData }) => {
    const profileImage = require('../../images/claymonster.png');
    // email, fullname, username, experience, education, skills, links, phoneNumber
    return (
        <div className="template-container">
            <div className="template-left-part">
                <div className="template-pic-container">
                    <img src={profileImage} alt="profileImg" className="profile-pic"></img>
                </div>
            <h1 className="template-left-h1">PROFILE</h1>
            <p className="template-left-p">liibalaaba</p>
            <h1 className="template-left-h1">CONTACTS</h1>
            <p className="template-left-p">{templateData.links}</p>
            <p className="template-left-p">{templateData.phoneNumber}</p>
            <p className="template-left-p">{templateData.email}</p>
            <h1 className="template-left-h1">REFERENCES</h1>
            <p className="template-left-p">Matti Meikäläinen</p>
            </div>
            <div className="template-right-part">
                <h1 className="template-right-part-name">{templateData.fullname}</h1>
                <h1 className="template-h1">EDUCATION</h1>
                <p className="template-p">{templateData.education}</p>
                <h1 className="template-h1">EMPLOYMENT</h1>
                <p className="template-p">{templateData.experience}</p>
                <h1 className="template-h1">SKILLS & EXPERTISE</h1>
                <p className="template-p">{templateData.skills}</p>
            </div>
        </div>    
    );
}

export default BasicTemplate;