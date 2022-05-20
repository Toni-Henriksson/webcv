import {React, useState} from "react";
import '../css/components/mainRegisterModule.css';
import { register } from '../backend/firebase-utility';
import { useNavigate } from "react-router-dom";



const MainRegisterModule = () => {
    const [fullName, setFullName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    let navigation = useNavigate();

    function handleRegister(){
        register(registerEmail, registerPassword, fullName);
        navigation('/profile');
    }
    return (
        <div className="container">
            <div className="register-container">
                <h1>Not a user yet?</h1>
                <p>Register by typing your email</p>
                <input className="registerNameInput" placeholder="Full name" onChange={ (event) => {setFullName(event.target.value)} }></input>
                <input className="registerEmailInput" placeholder="Email address" onChange={ (event) => {setRegisterEmail(event.target.value)} }></input>
                <input className="registerPasswordInput" placeholder="Password" onChange={ (event) => {setRegisterPassword(event.target.value)} }></input>
                <button className="registerButton" onClick={handleRegister}>Register</button>
            </div>
        </div>    
    );
}

export default MainRegisterModule;