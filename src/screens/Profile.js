import { React, useState } from "react";
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
        <Slider></Slider>
      </div>
    </>
  );
}

export default Profile;