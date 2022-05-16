import {React, useState} from "react";
import '../css/mainmodule.css';
import { register } from '../backend/firebase-utility';



const MainRegisterModule = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    function handleRegister(){
        register(registerEmail, registerPassword);
    }
    return (
        <div className="container">
            <div className="register-container">
                <h1>Not a user yet?</h1>
                <p>Register by typing your email</p>
                <input className="registerEmailInput" placeholder="Email address" onChange={ (event) => {setRegisterEmail(event.target.value)} }></input>
                <input className="registerPasswordInput" placeholder="Password" onChange={ (event) => {setRegisterPassword(event.target.value)} }></input>
                <button className="registerButton" onClick={handleRegister}>Register</button>
            </div>
        </div>    
    );
}

export default MainRegisterModule;