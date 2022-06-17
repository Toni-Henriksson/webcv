import './retrotemplate.css';
import { React, useState } from "react";

const RetroTemplate = ({profileData, urlProfileData}) => {
    return(
        <>
        <div style={{width: "300px", height: "300px"}}>
        <h1>email:{profileData.email}</h1>
        <h1>phone:{profileData.phoneNumber}</h1>
        <h1>fullname:{profileData.fullname}</h1>
        <div>
        {
            /*Object.keys(profileData.exp).map(x => {
                console.log(x)
             })*/
        }
        </div>
        </div>
        </>
    )
}
export default RetroTemplate;