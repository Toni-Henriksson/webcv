import {React} from "react";
import '../css/NavigationBar.css';
import { Nav,Button } from 'rsuite';

const NavigationBar = () => {
    return (
        <Nav className="nav">
            <h1>Web CV</h1>
            <Button className="btn">Log in</Button>
        </Nav>    
    );
}

export default NavigationBar;