import {React, useState} from "react";
import '../css/screens/profile.css';
import NavigationBar from '../components/NavigationBar';
import ResumeTemplate from '../components/ResumeTemplate';
import BasicTemplate from '../components/templates/BasicTemplate'
import TemplateCarousel from "../components/TemplateCarousel";
import { useParams } from 'react-router-dom'

const Profile = () => {
    // TODO: search firebase DB for user matching params name and render that to profile component

    // Current selected template
    const [template,setTemplate] = useState(1);
    const [editMode, setEditMode] = useState(false);

    // All avaible templates basic, modern, retro, simple
    const templateArray = [
      <ResumeTemplate></ResumeTemplate>,
      <BasicTemplate></BasicTemplate>
    ];
    return (
        <>
        <NavigationBar></NavigationBar>
        <TemplateCarousel></TemplateCarousel>
        {/*Get stored template id and render that template from DB*/}
        <div className="profile-wrapper">
          {
             editMode ? templateArray[template] : templateArray[template] 
          }
          <div className="profile-controls-wrapper">
            <div className="profile-controls-panel">
              <button className="edit-button">Edit resume</button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Profile;