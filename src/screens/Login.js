import {React} from "react";
import '../css/login.css';
import NavigationBar from '../components/NavigationBar';
const Login = () => {
    return (
        <>
        <NavigationBar></NavigationBar>
        <div className="wrapper-content-login">
            <input className="login-input" placeholder="Email address"></input>
            <input className="login-input" placeholder="Password"></input>
        </div>
      </>
    );
}

export default Login;