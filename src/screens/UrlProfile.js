import {React, useEffect, useState} from "react";
import '../css/screens/url-profile.css';
import NavigationBar from '../components/NavigationBar';
import { useParams } from 'react-router-dom';
import { getDatabase, onValue, ref } from "firebase/database";

const UrlProfile = () => {
    const params = useParams();
    const [user, setUser] = useState("");

    // TODO: search firebase DB for user matching params name and render that to profile component
    useEffect(() => {
         onValue(ref(getDatabase(),'userrouting/'+ params.username), snapshot=>{
             const data = snapshot.val();
             if(data !== null){
                setUser(data.uid);
                console.log("Users uid: " + data.uid);
             }
             else{
                 console.log("No data received from the backend of this user :(")
             }
         })
    },[]);
    return (
        <>
        <NavigationBar></NavigationBar>
        <div className="url-profile-wrapper">
            <h1>This is URL user specific site</h1>
            <h1>Username: {params.username}</h1>
            <h1>User UID: {user}</h1>;
        </div>
      </>
    );
}

export default UrlProfile;