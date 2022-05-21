import {React, useEffect, useState} from "react";
import '../../css/components/templates/basictemplate.css';

const BasicTemplate = () => {

    return (
        <div className="resume-template-container">
            <div className="resume-left-part">
                <div className="profile-pic-container">
                    <img src={profileImage} className="profile-pic"></img>
                    <p>moi</p>
                </div>
            <h1 className="resume-left-h1">PROFILE</h1>
            <p className="resume-left-p">liibalaaba</p>
            <h1 className="resume-left-h1">CONTACTS</h1>
            <p className="resume-left-p">github.com/toni-henriksson</p>
            <h1 className="resume-left-h1">REFERENCES</h1>
            <p className="resume-left-p">Matti Meikäläinen</p>
            </div>
            <div className="resume-right-part">
                <h1 className="resume-right-part-name">{data.username}</h1>
                <p className="resume-right-part-title">{data.title}</p>
                <h1 className="resume-h1">EDUCATION</h1>
                <p className="resume-p">{data.education}</p>
                <h1 className="resume-h1">EMPLOYMENT</h1>
                <p className="resume-p">{data.employment}</p>
                <h1 className="resume-h1">SKILLS & EXPERTISE</h1>
                <p className="resume-p">{data.skills}</p>
            </div>
        </div>    
    );
}

export default BasicTemplate;