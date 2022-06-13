import {React, useState} from "react";
import '../css/components/NavigationBar.css';
import { auth } from '../backend/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { logout } from "../backend/firebase-utility";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const logo = require('../images/logo.png');
const profile = require('../images/profile.png');

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
        //navigation('/');
    }
    function handleRegister(){
        navigation('/register');
    }
    function handleProfile(){
        navigation('/profile');
    }
    return (
        <nav className="nav">
        <div className="nav-wrapper">
            <div className="nav-left">
                <div className="mainlogo-container">
                    <a href="/"><img src={logo} alt="Logo" width="100px" height="100px"></img></a>
                </div>
            </div>
            <div className="nav-middle">
                <SearchBar></SearchBar>
            </div>
            <div className="nav-right">
                {
                    user ? 
                    <div className="nav-right">
                        <div className="nav-right-item-profile">
                            <a href="/profile"><img src={profile} alt="Logo" width="35px" height="35px"></img></a>
                        </div>
                        <div className="nav-right-item">
                            <button className="button-29" onClick={handleLogout}>Sign out</button>
                        </div>
                    </div>
                    : 
                    <button className="button-29" onClick={handleLogin}>Sign in</button>
                }
            </div>
        </div>
        </nav>
    );
}

export default NavigationBar;