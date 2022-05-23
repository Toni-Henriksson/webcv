import {React, useState} from "react";
import '../css/components/frontpage.css';
import { useNavigate } from "react-router-dom";
const resumepng = require('../images/resume.png');


const FrontPage = () => {
    let navigation = useNavigate();
    const handleSignUp = () =>{
        navigation('/register');
    }
    return (
        <>
        <div className="front-page-container"> 
            <div className="front-page-container-left">
                <div className="font-page-left-text">
                    <h1>WebResume</h1>
                    <p>Social network platform for beautiful resumes.</p>
                    <p>Create a profile and you will never have to send another PDF file in your life.</p>
                </div>
                <div className="front-page-left-buttons">
                    <button className="front-page-btn" onClick={handleSignUp}>Sign up now</button>
                </div>
            </div>
            <div className="front-page-container-right">
                <img src={resumepng} alt="Logo" ></img>
            </div>

        </div>
        </>
    );
}

export default FrontPage;