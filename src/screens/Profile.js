import {React} from "react";
import '../css/screens/profile.css';
import NavigationBar from '../components/NavigationBar';
import ResumeTemplate from '../components/ResumeTemplate';
import TemplateCarousel from "../components/TemplateCarousel";
import { useParams } from 'react-router-dom'

const Profile = () => {
    // TODO: search firebase DB for user matching params name and render that to profile component
    return (
        <>
        <NavigationBar></NavigationBar>
        <TemplateCarousel></TemplateCarousel>
        <div className="profile-wrapper">
          <ResumeTemplate></ResumeTemplate>
        </div>
      </>
    );
}

export default Profile;