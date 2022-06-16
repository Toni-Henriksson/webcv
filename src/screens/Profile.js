import React, { useState, useEffect } from "react";
import '../css/screens/profile.css';
import NavigationBar from '../components/NavigationBar';
import BasicTemplate from '../components/templates/basic-template/BasicTemplate'
import TemplateCarousel from "../components/TemplateCarousel";
import { Slider } from "../components/component-slider/Slider";
import RetroTemplate from "../components/templates/retro-template/RetroTemplate";
import { fetchUserData } from "../backend/datafetch";
import { auth } from "../backend/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const Profile = () => {
  const [template, setTemplate] = useState(0);
  const [data, setData] = useState([]);
  const [fData, setFData] = useState({
    email: "x",
    phone: "x",
    fullname: "x",
  });

  useEffect(() => {
    let resp = fetchUserData()
    console.log(resp)
  }, []) 

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
        <RetroTemplate profileData={fData}></RetroTemplate>
      </div>
      </>
  );
}

export default Profile;