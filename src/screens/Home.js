import {React, useState} from "react";
import '../css/screens/home.css';
import NavigationBar from '../components/NavigationBar';

const Home = () => {
    return (
      <>
      <NavigationBar></NavigationBar>
      <div className="home-wrapper-content">
        <h1>Home</h1>
      </div>
      </>
    );
}

export default Home;