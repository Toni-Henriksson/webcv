import {React, useState} from "react";
import '../css/components/NavigationBar.css';
import { auth } from '../backend/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { logout } from "../backend/firebase-utility";
import { useNavigate } from "react-router-dom";
import { set } from "firebase/database";

const logo = require('../images/webCV-logo.png');

const NavigationBar = () => {
    const [user, setUser] = useState({});
    let navigation = useNavigate();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    function handleLogin(){
        navigation('/login');
    }
    function handleLogout(){
        logout();
        navigation('/');
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