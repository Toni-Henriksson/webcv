import {React} from "react";
import '../css/screens/profile.css';
import NavigationBar from '../components/NavigationBar';
import ResumeTemplate from '../components/ResumeTemplate';
import { useParams } from 'react-router-dom'

const Profile = () => {
    const params = useParams();
    
    return (
        <>
        <NavigationBar></NavigationBar>
        <div className="profile-wrapper">
          <ResumeTemplate></ResumeTemplate>
          <h1>Username: {params.username}</h1>;
        </div>
      </>
    );
}

export default Profile;