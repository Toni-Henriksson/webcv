import {React} from "react";
import '../css/NavigationBar.css';
import { Nav,Button } from 'rsuite';

const NavigationBar = () => {
    const loginEvent = () => {
        console.log("Going to loginpage..")
    }
    return (
        <Nav className="nav">
            <h1>Web CV</h1>
            <Button className="btn" onClick={loginEvent}>Log in</Button>
        </Nav>    
    );
}

export default NavigationBar;