import {React, useEffect, useState} from "react";
import '../../css/components/templates/basictemplate.css';

const BasicTemplate = (props) => {
    const profileImage = require('../../images/claymonster.png');
    return (
        <div className="template-container">
            <div className="template-left-part">
                <div className="template-pic-container">
                    <img src={profileImage} alt="profileImg" className="profile-pic"></img>
                </div>
            <h1 className="template-left-h1">PROFILE</h1>
            <p className="template-left-p">liibalaaba</p>
            <h1 className="template-left-h1">CONTACTS</h1>
            <p className="template-left-p">github.com/toni-henriksson</p>
            <h1 className="template-left-h1">REFERENCES</h1>
            <p className="template-left-p">Matti Meikäläinen</p>
            </div>
            <div className="template-right-part">
                <h1 className="template-right-part-name">{props?.username}</h1>
                <p className="template-right-part-title">{props?.title}</p>
                <h1 className="template-h1">EDUCATION</h1>
                <p className="template-p">{props?.education}</p>
                <h1 className="template-h1">EMPLOYMENT</h1>
                <p className="template-p">{props?.employment}</p>
                <h1 className="template-h1">SKILLS & EXPERTISE</h1>
                <p className="template-p">{props?.skills}</p>
            </div>
        </div>    
    );
}

export default BasicTemplate;