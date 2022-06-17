import './retrotemplate.css';
import { React } from "react";

const RetroTemplate = ({profileData, urlProfileData}) => {
    return(
        <>
        <div style={{width: "300px", height: "300px"}}>
        <h1>email:{profileData.email}</h1>
        <h1>phone:{profileData.phoneNumber}</h1>
        <h1>fullname:{profileData.fullname}</h1>
        </div>
        </>
    )
}
export default RetroTemplate;