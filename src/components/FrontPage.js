import {React, useEffect} from "react";
import '../css/components/frontpage.css';
import { useNavigate } from "react-router-dom";
import Card from "./animated-card/Card";

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
                    <h1 className="front-h1">WebResume</h1>
                    <p className="front-p">Social network platform for beautiful resumes</p>
                    <p className="front-p">Create a profile and you will never have to send another PDF file in your life</p>
                </div>
                <div className="front-page-left-buttons">
                    <button className="front-page-btn" onClick={handleSignUp}>Sign up</button>
                </div>
            </div>
            <div className="front-page-container-right">
                <Card>
                </Card>
            </div>

        </div>
        </>
    );
}

export default FrontPage;