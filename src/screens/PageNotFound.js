import {React} from "react";
import '../css/screens/login.css';
import NavigationBar from '../components/NavigationBar';

const PageNotFound = () => {
    return (
        <>
        <NavigationBar></NavigationBar>
        <div>
            <h1>404 Page not found.</h1>
        </div>
        </>
    );
}

export default PageNotFound;