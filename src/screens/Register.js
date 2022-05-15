import {React} from "react";
import '../css/home.css';
import NavigationBar from '../components/NavigationBar';
import MainRegisterModule from '../components/MainRegisterModule';
const Register = () => {
    return (
        <>
        <NavigationBar></NavigationBar>
        <div>
            <p>Register screen</p>
            <MainRegisterModule></MainRegisterModule>
        </div>
      </>
    );
}

export default Register;