import {React, useEffect, useState} from "react";
import '../css/screens/url-profile.css';
import NavigationBar from '../components/NavigationBar';
import { useParams } from 'react-router-dom';
import { getDatabase, onValue, ref } from "firebase/database";
import BasicTemplate from "../components/templates/basic-template/BasicTemplate";

const UrlProfile = () => {
    // GET Username from given URL 
    const params = useParams();
    // GET UID For given username
    const [user, setUser] = useState("");
    // DIY Eventlistener for when data is received from DB
    const [dataReceived, setDataReceived] = useState(false);
    // Data received from database bassed on url username
    const [uidData, setUidData] = useState([]);

    // TODO: Now just make BasicTemplate that takes info from user as props & render from screen :)
    useEffect(() => {
         onValue(ref(getDatabase(),'userrouting/'+ params.username), snapshot=>{
             const data = snapshot.val();
             if(data !== null){
                const tempUid = data.uid;
                setUser(tempUid);
             }
             else{
                 console.log("No data receivsded from the backend of this user :(")
             }
             setDataReceived(true)
         })
    },[]);
    useEffect(() => {
        if(dataReceived == true){
            onValue(ref(getDatabase(), 'users/' + user), snapshot => {
                const dataz = snapshot.val();
                if(dataz !== null){
                    setUidData(dataz);
                }
                else{
                    console.log("No data from DB")
                }
            })
        }
   },[dataReceived]);

    return (
        <>
        <NavigationBar></NavigationBar>
        <BasicTemplate></BasicTemplate>
        <div className="url-profile-wrapper">
            <h1>This is URL user specific site</h1>
            <h1>Username: {params?.username}</h1>
            <h1>User UID: {user}</h1>;
            <h1>User Email based on uid: {uidData?.email}</h1>;
            <h1>Skills based on uid: {uidData?.skills}</h1>;
        </div>
      </>
    );
}

export default UrlProfile;