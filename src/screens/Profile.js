import { React, useState, useEffect} from "react";
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
  const [data, setData] = useState([]);

  const templateArray = [
    <BasicTemplate templateData={data} />,
  ];

  const controlScreens = [
    <WorkExperience/>,
    <AddEducationWidget/>,
    <AddSkillsWidget/>,
    <AddSkillsWidget/>,
    <AddLinksWidget/>
  ];
  function handleClick(e){
      //setCurrent(e)
      console.log(e)
  }

  return (
    <>
      <NavigationBar></NavigationBar>
      {/*<TemplateCarousel></TemplateCarousel>*/}
      <div className="profile-wrapper">
        <div className="left-conrols">
          <button className="ctrl-btn" onClick={()=>{handleClick(0)}}>Add work</button>
          <button className="ctrl-btn" onClick={()=>{handleClick(1)}}>Add education</button>
          <button className="ctrl-btn" onClick={()=>{handleClick(2)}}>Add skills</button>
          <button className="ctrl-btn" onClick={()=>{handleClick(3)}}>Add about</button>
          <button className="ctrl-btn" onClick={()=>{handleClick(4)}}>Add links</button>
        </div>
        <div className="resume-preview-wrapper">
        {
          templateArray[template]
        }
        </div>
        <div>
          {
            controlScreens.map((item, index) => {
              return (controlScreens[index])
            })
          }
        </div>
      </div>
    </>
  );
}

export default Profile;