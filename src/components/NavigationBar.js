import {React, useState} from "react";
import '../css/NavigationBar.css';
import { Nav,Button } from 'rsuite';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../backend/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';


const NavigationBar = () => {
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    let navigation = useNavigate();
    const loginEvent = () => {
        console.log("Going to loginpage..")
        navigation("/login");
    }
    return (
        <Nav className="nav">
            <Link className="logo" to={'/'}path="/">Web CV {user.email}</Link>
            <Button className="btn" onClick={loginEvent}><p className="btnText">Sign in</p></Button>
        </Nav>    
    );
}

export default NavigationBar;