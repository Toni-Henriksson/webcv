import {React, useEffect, useState} from "react";
import '../css/screens/url-profile.css';
import NavigationBar from '../components/NavigationBar';
import { useParams } from 'react-router-dom';
import { getDatabase, onValue, ref } from "firebase/database";

const UrlProfile = () => {
    const params = useParams();
    const [user, setUser] = useState("");

    // Data received from database bassed on url username
    const [data, setData] = useState([]);

    useEffect(() => {
         onValue(ref(getDatabase(),'userrouting/'+ params.username), snapshot=>{
             const data = snapshot.val();
             if(data !== null){
                const tempUid = data.uid;
                setUser(tempUid);
                console.log("Users uid: " + data.uid);
                GetData();
             }
             else{
                 console.log("No data receivsded from the backend of this user :(")
             }
         })
    },[]);

    const GetData = () => {
        onValue(ref(getDatabase(), 'users/' + user), snapshot => {
            const dataz = snapshot.val();
            if(dataz !== null){
                setData(dataz);
                console.log("Data received")
            }
            else{
                console.log("No data from DB")
            }
        })
    }
    return (
        <>
        <NavigationBar></NavigationBar>
        <div className="url-profile-wrapper">
            <h1>This is URL user specific site</h1>
            <h1>Username: {params.username}</h1>
            <h1>User UID: {user}</h1>;
            <h1>User Email based on uid: {data.email}</h1>;
            <h1>Skills based on uid: {data.skills}</h1>;
        </div>
      </>
    );
}

export default UrlProfile;