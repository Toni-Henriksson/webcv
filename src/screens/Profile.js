import {React, useState} from "react";
import '../css/screens/profile.css';
import NavigationBar from '../components/NavigationBar';
import ResumeTemplate from '../components/ResumeTemplate';
import TemplateCarousel from "../components/TemplateCarousel";
import { useParams } from 'react-router-dom'

const Profile = () => {
    // TODO: search firebase DB for user matching params name and render that to profile component

    // Current selected template
    const [template,setTemplate] = useState(0);
    
    // All avaible templates basic, modern, retro, simple
    const templateArray = [
      <ResumeTemplate></ResumeTemplate>
    ];
    return (
        <>
        <NavigationBar></NavigationBar>
        <TemplateCarousel></TemplateCarousel>
        {/*Get stored template id and render that template from DB*/}
        <div className="profile-wrapper">
          {
             templateArray[template]
          }
        </div>
      </>
    );
}

export default Profile;