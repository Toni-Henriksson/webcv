import {React} from "react";
import '../css/mainmodule.css';


const MainRegisterModule = () => {
    return (
        <div className="container">
            <div>
                <input className="searchBar" placeholder="Search profile..."></input>
            </div>
            <div className="register-container">
                <h1>Not a user yet?</h1>
                <p>Register by typing your email</p>
                <input className="registerEmailInput" placeholder="email address"></input>
            </div>
        </div>    
    );
}

export default MainRegisterModule;