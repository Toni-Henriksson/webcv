import {React, useState} from "react";
import '../css/components/NavigationBar.css';
import { auth } from '../backend/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { logout } from "../backend/firebase-utility";
import { useNavigate } from "react-router-dom";

const logo = require('../images/webCV-logo.png');
const profile = require('../images/profile.png');
const NavigationBar = () => {
    const [user, setUser] = useState({});
    const [searchUser, setSearchUser] = useState('');
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
    const sub = (e) => {
        e.preventDefault();
        console.log("Search")
    }
    return (
        <>
        <nav className="nav">
        <div className="nav-wrapper">
            <div className="nav-left">
                <a href="/"><img src={logo} alt="Logo" width="100px" height="100px"></img></a>
            </div>
            <div className="nav-middle">
                    <input type="text" placeholder="Search profile.." className="nav-search-bar"></input>
                    <button type="submit" className="experience-submit-btn">Search</button>
            </div>
            <div className="nav-right">
                {
                    user ? 
                    <div className="nav-right">
                        <div className="nav-right-item">
                            <a href="/profile"><img src={profile} alt="Logo" width="35px" height="35px"></img></a>
                        </div>
                        <div className="nav-right-item">
                            <button className="btn-nav" onClick={handleLogout}>Sign out</button>
                        </div>
                    </div>
                    : 
                    <button className="btn-nav" onClick={handleLogin}>Sign in</button>
                }
            </div>
        </div>
        </nav>
        </>

    );
}

export default NavigationBar;