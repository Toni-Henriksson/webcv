import {React, useState} from "react";
import '../css/screens/login.css';
import NavigationBar from '../components/NavigationBar';
import { login } from '../backend/firebase-utility';

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, SetLoginPassword] = useState("");
    
    function handleLogin(){
        login(loginEmail, loginPassword);
    }
    return (
        <>
        <NavigationBar></NavigationBar>
        <div className="wrapper-content-login">
            <input className="login-input" placeholder="Email address" onChange={ (event) => {setLoginEmail(event.target.value)} }></input>
            <input className="login-input" placeholder="Password" onChange={ (event) => {SetLoginPassword(event.target.value)} }></input>
            <button className="login-btn-01" onClick={handleLogin}>Login</button>
        </div>
        </>
    );
}

export default Login;