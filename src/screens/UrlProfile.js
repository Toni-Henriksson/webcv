import {React, useEffect} from "react";
import '../css/screens/url-profile.css';
import NavigationBar from '../components/NavigationBar';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, set, child, get } from "firebase/database";


const UrlProfile = () => {
    const params = useParams();

    // TODO: search firebase DB for user matching params name and render that to profile component
    useEffect(() => {
        // Search params profile form db -> save info to state -> render cv with info

    },[]);
    return (
        <>
        <NavigationBar></NavigationBar>
        <div className="url-profile-wrapper">
          <h1>Username: {params.username}</h1>;
        </div>
      </>
    );
}

export default UrlProfile;