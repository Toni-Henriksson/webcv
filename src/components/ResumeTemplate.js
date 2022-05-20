import {React, useEffect, useState} from "react";
import '../css/components/resumetemplate.css';
import { auth } from '../backend/firebase-config';
import { getDatabase, onValue, ref } from "firebase/database";
import { getAuth, onAuthStateChanged} from "firebase/auth";

const ResumeTemplate = () => {
    const profileImage = require('../images/claymonster.png');
    const [data, setData] = useState([]);
    const author = getAuth();

    useEffect(() => {
        // Gets data from user-specific db and stores it to setData state. (render them to screen after)
        onAuthStateChanged(author, (user) => {
            if (user) {
              // User is signed in
              const uid = user.uid;
              onValue(ref(getDatabase(), 'users/' + uid), snapshot => {
                const dataz = snapshot.val();
                if(dataz !== null){
                    setData(dataz);
                }
                else{
                    console.log("No data from DB")
                }
            })
              // ...
            } else {
              // User is signed out
                console.log("User not signed in.");
            }
        });
    },[]);

    return (
        <div className="resume-template-container">
            <div className="resume-left-part">
                <div className="profile-pic-container">
                    <img src={profileImage} className="profile-pic"></img>
                    <p>moi</p>
                </div>
            <h1 className="resume-left-h1">PROFILE</h1>
            <p className="resume-left-p">liibalaaba</p>
            <h1 className="resume-left-h1">CONTACTS</h1>
            <p className="resume-left-p">github.com/toni-henriksson</p>
            <h1 className="resume-left-h1">REFERENCES</h1>
            <p className="resume-left-p">Matti Meikäläinen</p>
            </div>
            <div className="resume-right-part">
                <h1 className="resume-right-part-name">{data.username}</h1>
                <p className="resume-right-part-title">{data.title}</p>
                <h1 className="resume-h1">EDUCATION</h1>
                <p className="resume-p">{data.education}</p>
                <h1 className="resume-h1">EMPLOYMENT</h1>
                <p className="resume-p">{data.employment}</p>
                <h1 className="resume-h1">SKILLS & EXPERTISE</h1>
                <p className="resume-p">{data.skills}</p>
            </div>
        </div>    
    );
}

export default ResumeTemplate;