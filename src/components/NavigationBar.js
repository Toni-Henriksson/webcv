import {React, useState} from "react";
import '../css/components/NavigationBar.css';
import { auth } from '../backend/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { logout } from "../backend/firebase-utility";
import { useNavigate } from "react-router-dom";

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
        logout();
    }
    function handleRegister(){
        navigation('/register');
    }
    return (
        <>
        <div className="nav-wrapper">
            <a href="/"><h1 className="nav-header">webcv{user?.email}</h1></a>
            <button className="btn-nav" onClick={handleLogin}>Login</button>
            <button className="btn-nav" onClick={handleLogout}>Logout</button>
            <button className="btn-nav" onClick={handleRegister}>Register</button>
        </div>
        </>

    );
}

export default NavigationBar;