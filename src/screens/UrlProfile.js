import {React} from "react";
import '../css/screens/url-profile.css';
import NavigationBar from '../components/NavigationBar';
import ResumeTemplate from '../components/ResumeTemplate';
import { useParams } from 'react-router-dom'

const UrlProfile = () => {
    const params = useParams();
    // TODO: search firebase DB for user matching params name and render that to profile component
    return (
        <>
        <NavigationBar></NavigationBar>
        <div className="url-profile-wrapper">
          <h1>Username: {params.username}</h1>;
        </div>
      </>
    );
}

export default UrlProfile;