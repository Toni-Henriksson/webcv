import {React, useEffect, useState} from "react";
import '../css/components/resumetemplate.css';
import { readFromDB } from "../backend/firebase-utility";
import { auth } from '../backend/firebase-config';
import { getDatabase, onValue, ref } from "firebase/database";

const ResumeTemplate = () => {
    const [name, setName] = useState("TONI HENRIKSSON");
    const [title, setTitle] = useState("Computer Science Major");
    const [education, setEducation] = useState("");
    const [jobs, setJobs] = useState("Web developer");
    const profileImage = require('../images/claymonster.png');

    const [data, setData] = useState([]);
    useEffect(() => {
        let userId = auth.currentUser.uid;
        onValue(ref(getDatabase(), 'users/' + userId), snapshot => {
            const dataz = snapshot.val();
            if(dataz !== null){
                setData(dataz);
                console.log(dataz);
            }
            else{
                console.log("No data from DB")
            }
        })
      },[]);

    /* const fetchData = async () => {
        // Get usser uidss
        let userId = auth.currentUser.uid;
        // reads users database datas based ons uid !!!NOT RETURNING SHITsssss
        const dbData = readFromDB(userId);

        console.log(dbData);
    } */

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
                <h1 className="resume-right-part-name">{name}</h1>
                <p className="resume-right-part-title">{title}</p>
                <h1 className="resume-h1">EDUCATION</h1>
                <p className="resume-p">{data[0]}</p>
                <h1 className="resume-h1">EMPLOYMENT</h1>
                <p className="resume-p">{jobs}</p>
                <h1 className="resume-h1">SKILLS & EXPERTISE</h1>
                <p className="resume-p">C++</p>
                <p className="resume-p">React.js</p>
            </div>
        </div>    
    );
}

export default ResumeTemplate;