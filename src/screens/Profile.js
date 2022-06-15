import React, { useState } from "react";
import '../css/screens/profile.css';
import NavigationBar from '../components/NavigationBar';
import BasicTemplate from '../components/templates/basic-template/BasicTemplate'
import TemplateCarousel from "../components/TemplateCarousel";
import { Slider } from "../components/component-slider/Slider";

const Profile = () => {
  const [template, setTemplate] = useState(0);
  const [data, setData] = useState([]);

  const templateArray = [
    <BasicTemplate templateData={data} />,
  ];

  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="profile-wrapper">
        <div className="left-conrols">
          <h1 style={{color: "white", alignSelf: "center", fontSize: "25px", fontFamily: "JetBrains Mono, monospace"}}>Build your resume</h1>
          <Slider></Slider>
        </div>
        <div className="resume-preview-wrapper">
        {
          templateArray[template]
        }
        </div>
      </div>
      </>
  );
}

export default Profile;