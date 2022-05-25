import {React} from "react";
import '../css/screens/register-screen.css';
import NavigationBar from '../components/NavigationBar';
import Form from "../components/multi-step-form/Form.js";
// j
const Register = () => {
    // <MainRegisterModule></MainRegisterModule>
    return (
        <>
        <NavigationBar></NavigationBar>
        <div className="wrapper-content-register">
            <Form></Form>
        </div>
      </>
    );
}

export default Register;