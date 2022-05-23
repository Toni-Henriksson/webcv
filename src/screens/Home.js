import {React, useState} from "react";
import '../css/screens/home.css';
import NavigationBar from '../components/NavigationBar';
import FrontPage from "../components/FrontPage";
const Home = () => {
  const [user, setUser] = useState(false);
  
    return (
      <>
      <NavigationBar></NavigationBar>
      <div className="home-wrapper-content">
        <FrontPage></FrontPage>
      </div>
      </>
    );
}

export default Home;