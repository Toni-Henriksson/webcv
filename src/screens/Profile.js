import {React} from "react";
import '../css/screens/profile.css';
import NavigationBar from '../components/NavigationBar';

const Profile = () => {
    return (
        <>
        <NavigationBar></NavigationBar>
        <div className="profile-wrapper">
            <div className="resume-render-wrapper">
                <h1>Resume</h1>
            </div>
        </div>
      </>
    );
}

export default Profile;