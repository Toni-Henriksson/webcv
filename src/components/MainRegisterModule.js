import {React, useState} from "react";
import '../css/mainmodule.css';
import { register } from '../backend/firebase-utility';



const MainRegisterModule = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    return (
        <div className="container">
            <div>
                <input className="searchBar" placeholder="Search profile..."></input>
            </div>
            <div className="register-container">
                <h1>Not a user yet?</h1>
                <p>Register by typing your email</p>
                <input className="registerEmailInput" placeholder="Email address" onChange={ (event) => {setRegisterEmail(event.target.value)} }></input>
                <input className="registerEmailInput" placeholder="Password" onChange={ (event) => {setRegisterPassword(event.target.value)} }></input>
                <button onClick={register(registerEmail, registerPassword)}>Register</button>
            </div>
        </div>    
    );
}

export default MainRegisterModule;