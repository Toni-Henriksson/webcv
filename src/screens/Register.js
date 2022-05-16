import {React} from "react";
import '../css/screens/register-screen.css';
import NavigationBar from '../components/NavigationBar';
import MainRegisterModule from '../components/MainRegisterModule';

// j
const Register = () => {
    return (
        <>
        <NavigationBar></NavigationBar>
        <div className="wrapper-content-register">
            <MainRegisterModule></MainRegisterModule>
        </div>
      </>
    );
}

export default Register;