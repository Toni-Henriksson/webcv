import {React, useState} from "react";
import '../css/login.css';
import NavigationBar from '../components/NavigationBar';
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();

    // Will confirm is user is valid and authorized to log in ---> navigate to profile
    const [userAuth, setUserAuth] = useState(true);

    return (
        <>
        <NavigationBar></NavigationBar>
        <div className="wrapper-content-login">
            <input className="login-input" placeholder="Email address"></input>
            <input className="login-input" placeholder="Password"></input>
            <button className="login-btn-01" onClick={() => { userAuth ? navigate("/profile") : navigate("/")}}></button>
        </div>
      </>
    );
}

export default Login;