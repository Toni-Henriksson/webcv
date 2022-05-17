import {React} from "react";
import '../css/screens/profile.css';
import NavigationBar from '../components/NavigationBar';
import ResumeTemplate from '../components/ResumeTemplate';

const Profile = () => {
    return (
        <>
        <NavigationBar></NavigationBar>
        <div className="profile-wrapper">
          <ResumeTemplate></ResumeTemplate>
        </div>
      </>
    );
}

export default Profile;