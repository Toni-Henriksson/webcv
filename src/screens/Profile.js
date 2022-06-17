import React, { useState, useEffect } from "react";
import '../css/screens/profile.css';
import NavigationBar from '../components/NavigationBar';
import BasicTemplate from '../components/templates/basic-template/BasicTemplate'
import TemplateCarousel from "../components/TemplateCarousel";
import { Slider } from "../components/component-slider/Slider";
import RetroTemplate from "../components/templates/retro-template/RetroTemplate";
import { auth } from "../backend/firebase-config";
import { getDatabase, ref, get, child } from "firebase/database";

const Profile = () => {
  const [template, setTemplate] = useState(1);
  const [data, setData] = useState([]);
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    fetch();
  }, []) 

  function fetch() {
    const db = getDatabase();
    const uid = "9YLedffRfFQMCuOXxv9aiXRMSQz2";
    const dbRef = ref(db);

    get(child(dbRef, "users/" + uid))
    .then((snapshot) => {
      let data = []
      data = snapshot.val()
      setFetchedData(data)
    })
  }

  const templateArray = [
    <BasicTemplate templateData={data} />,
    <RetroTemplate profileData={fetchedData}></RetroTemplate>
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