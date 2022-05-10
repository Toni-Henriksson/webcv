import {React} from "react";
import '../css/NavigationBar.css';
import { Nav,Button } from 'rsuite';
import { Link } from "react-router-dom";

const NavigationBar = () => {
    const loginEvent = () => {
        console.log("Going to loginpage..")
    }
    return (
        <Nav className="nav">
            <Link className="logo" to={'/'}path="/">Web CV</Link>
            <Button className="btn" onClick={loginEvent}><Link className="btnText" to={'login'}path="login">Sign in</Link></Button>
        </Nav>    
    );
}

export default NavigationBar;