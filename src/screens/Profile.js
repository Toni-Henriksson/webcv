import { React, useState, useEffect } from "react";
import { get, getDatabase, onValue, ref } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import '../css/screens/profile.css';
import NavigationBar from '../components/NavigationBar';
import BasicTemplate from '../components/templates/basic-template/BasicTemplate'
import TemplateCarousel from "../components/TemplateCarousel";
import WorkExperience from "../components/user-data-fragment/WorkExperience";
import AddEducationWidget from "../components/user-data-fragment/AddEducationWidget";

const Profile = () => {
  // Current selected template
  const [template, setTemplate] = useState(0);
  const author = getAuth();

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [userAlias, setAlias] = useState('')
  const templateArray = [
    <BasicTemplate phone={phone} email={email} userAlias={userAlias}></BasicTemplate>,
  ];


  useEffect(() => {
    // Gets data from user-specific db and stores it to setData state. (render them to screen after)
    onAuthStateChanged(author, (user) => {
      if (user) {
        const uid = user.uid;
        onValue(ref(getDatabase(), 'users/' + uid + '/phoneNumber'), snapshot => {
          const data = snapshot.val();
          if (data !== null) {
            setPhone(data)
          }
          else {
            console.log("No data from DB")
          }
        });

        onValue(ref(getDatabase(), 'users/' + uid + '/email'), snapshot => {
          const data = snapshot.val();
          if (data !== null) {
            setEmail(data)
          }
          else {
            console.log("No data from DB")
          }
        });

        onValue(ref(getDatabase(), 'users/' + uid + '/username'), snapshot => {
          const data = snapshot.val();
          if (data !== null) {
            setAlias(data)
          }
          else {
            console.log("No data from DB")
          }
        });
      } else {
        // User is signed out
        console.log("User not signed in.");
      }
    });
  }, []);

  return (
    <>
      <NavigationBar></NavigationBar>
      <TemplateCarousel></TemplateCarousel>
      <div className="profile-wrapper">
        {
          templateArray[template]
        }
        <div className="control-panel">
          <div className="control-container">
            <WorkExperience></WorkExperience>
          </div>
          <div className="control-container">
            <AddEducationWidget></AddEducationWidget>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;