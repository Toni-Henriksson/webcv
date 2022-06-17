import './retrotemplate.css';
import { React, useState, useEffect } from "react";

const RetroTemplate = ({profileData, urlProfileData}) => {
    const [experience, setExperience] = useState([])
    useEffect(() => {
        renderData()
    }, [profileData])

    const renderData = () => {
        let arr = []
        if(profileData.exp){
            Object.keys(profileData.exp).map(x => {
                let item = [profileData.exp[x].title, profileData.exp[x].duration,profileData.exp[x].description]
                arr.push(item)
                //console.log(item)
                //setExperience(item)
            })
        }
        setExperience(arr)
        console.log(arr)
    }
    
    return(
        <>
        <div style={{width: "300px", height: "300px"}}>
        <h1>email:{profileData.email}</h1>
        <h1>phone:{profileData.phoneNumber}</h1>
        <h1>fullname:{profileData.fullname}</h1>
        <div>
            {
            experience.map(function(item, id) {
                    return(
                        <div key={id} className="template-data-fragment">
                            <p className="template-data-fragment-title">{item[0]}</p>
                            <p className="template-data-fragment-date">{item[1]}</p>
                            <p className="template-data-fragment-text">{item[2]}</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
        </>
    )
}
export default RetroTemplate;