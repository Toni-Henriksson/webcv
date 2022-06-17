import './retrotemplate.css';
import { React, useState, useEffect } from "react";

const RetroTemplate = ({profileData, urlProfileData}) => {
    const [experience, setExperience] = useState([])
    useEffect(() => {
        renderData()
    }, [profileData])

    const renderData = () => {
        if(profileData.exp){
            Object.keys(profileData.exp).map(x => {
                let item = [profileData.exp[x].title, profileData.exp[x].duration,profileData.exp[x].description]
                setExperience(item)
                //experience.push(item)
            })
        }
    }
    
    return(
        <>
        <div style={{width: "300px", height: "300px"}}>
        <h1>email:{profileData.email}</h1>
        <h1>phone:{profileData.phoneNumber}</h1>
        <h1>fullname:{profileData.fullname}</h1>
        <div>
            <h1>{experience[0]}</h1>
            <p>{experience[1]}</p>
            <p>{experience[2]}</p>
            {console.log(experience)}
        </div>
        </div>
        </>
    )
}
export default RetroTemplate;