import {React, useState, useEffect} from "react";
import '../css/screens/home.css';
import NavigationBar from '../components/NavigationBar';
import FrontPage from "../components/FrontPage";
import { auth } from "../backend/firebase-config";
const Home = () => {
  const [user, setUser] = useState(false);
  var userFetch = auth.currentUser;
  console.log("moi")
  useEffect(() => {
    if(userFetch != null) {
        console.log("User logged in: " + userFetch)
    }
    console.log("user:" + userFetch)
  }, [])

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