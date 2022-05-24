import {React, useState} from "react";
import '../css/components/NavigationBar.css';
import { auth } from '../backend/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { logout, writeToDB } from "../backend/firebase-utility";
import { useNavigate } from "react-router-dom";

const logo = require('../images/webCV-logo.png');

const NavigationBar = () => {
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    let navigation = useNavigate();

    function handleLogin(){
        navigation('/login');
    }
    function handleLogout(){
        navigation('/');
        logout();
    }
    function handleRegister(){
        navigation('/register');
    }
    function handleProfile(){
        navigation('/profile');
    }
    return (
        <>
        <nav className="nav">
        <div className="nav-wrapper">
            <a href="/"><img src={logo} alt="Logo" width="100px" height="100px"></img></a>
            {
                user ? <button className="btn-nav" onClick={handleLogout}>Sign out</button> : <button className="btn-nav" onClick={handleLogin}>Sign in</button>
            }
        </div>
        </nav>
        </>

    );
}

export default NavigationBar;