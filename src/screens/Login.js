import {React, useState} from "react";
import '../css/screens/login.css';
import NavigationBar from '../components/NavigationBar';
import { login } from '../backend/firebase-utility';
import { useNavigate } from "react-router-dom";
import background from "../images/bg2.png";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, SetLoginPassword] = useState("");
    let navigation = useNavigate();

    function handleLogin(){
        login(loginEmail, loginPassword);
        navigation('/profile');
    }
    return (
        <>
        <NavigationBar></NavigationBar>
        <div className="wrapper-content-login">
            <div className="login-panel" style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', objectFit: 'fill'}}>
                <div className="login-items">
                    <input className="login-input" placeholder="Email address" onChange={ (event) => {setLoginEmail(event.target.value)} }></input>
                    <input className="login-input" placeholder="Password" onChange={ (event) => {SetLoginPassword(event.target.value)} }></input>
                    <button className="login-btn-01" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;