import { React, useState, useEffect } from "react";
import { get, getDatabase, onValue, ref } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import '../css/screens/profile.css';
import NavigationBar from '../components/NavigationBar';
import BasicTemplate from '../components/templates/basic-template/BasicTemplate'
import TemplateCarousel from "../components/TemplateCarousel";
import WorkExperience from "../components/user-data-fragment/add-work-experience-widget/WorkExperience";
import AddEducationWidget from "../components/user-data-fragment/add-education-widget/AddEducationWidget";
import AddLinksWidget from "../components/user-data-fragment/add-links-widget/AddLinksWidget";
import AddTextWidget from "../components/user-data-fragment/add-text-widget/AddTextWidget";
import AddSkillsWidget from "../components/user-data-fragment/add-skills-widget/AddSkillsWidget";

const Profile = () => {
  const [template, setTemplate] = useState(0);
  const author = getAuth();
  const [infoFetch, setInfoFetch] = useState(false);
  const [data, setData] = useState([]);

  const templateArray = [
    <BasicTemplate
      templateData={data}
    ></BasicTemplate>,
  ];


  onAuthStateChanged(author, (user) => {
    if (user && infoFetch == false) {
      const uid = user.uid;
      //fetchUserData(uid);
      setInfoFetch(true);
    }
  }); 

  function fetchUserData(uid) {
    const db = getDatabase();

    // Basic information
    onValue(ref(getDatabase(), 'users/' + uid), snapshot => {
      const dataz = snapshot.val();
      if (dataz !== null) {
        setData(dataz);
      }
      else {
        console.log("No data from DcB")
      }
    })

  }

  return (
    <>
      <NavigationBar></NavigationBar>
      {/*<TemplateCarousel></TemplateCarousel>*/}
      <div className="profile-wrapper">
        <div className="resume-preview-wrapper">{templateArray[template]}</div>
        <div className="control-panel">
          <div className="control-container">
            <WorkExperience></WorkExperience>
          </div>
          <div className="control-container">
            <AddEducationWidget></AddEducationWidget>
          </div>
          <div className="control-container">
            <AddLinksWidget></AddLinksWidget>
          </div>
          <div className="control-container">
            <AddTextWidget></AddTextWidget>
          </div>
          <div className="control-container">
            <AddSkillsWidget></AddSkillsWidget>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;