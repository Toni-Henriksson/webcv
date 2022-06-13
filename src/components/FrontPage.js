import {React, useEffect} from "react";
import '../css/components/frontpage.css';
import { useNavigate } from "react-router-dom";
import AnimatedText from "./animated-text/AnimatedText";

const FrontPage = () => {
    let navigation = useNavigate();
    const resumepng = require('../images/resume.png');
    const handleSignUp = () =>{
       navigation('/register');
    }
    return (
        <>
        <div className="front-page-container"> 
            <div className="front-page-container-left">
                <div className="font-page-left-text">
                    <AnimatedText></AnimatedText>
                    <p className="front-p">Social network platform for beautiful resumes</p>
                    <p className="front-p">Create a profile and you will never have to send another PDF file in your life</p>
                </div>
                <div className="front-page-left-buttons">
                    <button className="button-29" style={{width: "15%", fontSize: "25px"}} onClick={handleSignUp}>Sign up</button>
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