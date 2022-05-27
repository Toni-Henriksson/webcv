import {React, useState, useEffect} from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import '../css/screens/profile.css';
import NavigationBar from '../components/NavigationBar';
import ResumeTemplate from '../components/ResumeTemplate';
import BasicTemplate from '../components/templates/basic-template/BasicTemplate'
import TemplateCarousel from "../components/TemplateCarousel";

const Profile = () => {

    // Current selected template
    const [template,setTemplate] = useState(1);
    const author = getAuth();

    // Info from DB -> This dataform -> As props to template component -> render to screen
    const [templateData, setTemplateData] = useState({
      email: "",
      fullName: "",
      username: "",
      experience: "",
      education: "",
      skills: "",
      links: "",
      phoneNumber: "",
    });
    const [exData, setExData] = useState([
      ["Inex partners", "10/2012 - 10/2022", "Operaattori"],
      ["Facebook", "10/2022 - 12/2022", "Ohjelmoija"]
    ]);
    const [edData, setEdData] = useState([
      ["Lab University of Applied Sciences", "10/2022 - 12/2022", "Bachelor of Software Engineering"],
      ["Edupoli", "10/2022 - 12/2022", "Electrician"]
    ]);

    // All avaible templates basic, modern, retro, simple
    const templateArray = [
      <ResumeTemplate></ResumeTemplate>,
      <BasicTemplate templateData={templateData} exData={exData} edData={edData}></BasicTemplate>
    ];
    
    useEffect(() => {
        // Gets data from user-specific db and stores it to setData state. (render them to screen after)
        onAuthStateChanged(author, (user) => {
            if (user) {
              // User is signed in
              const uid = user.uid;
              onValue(ref(getDatabase(), 'users/' + uid), snapshot => {
                const data = snapshot.val();
                if(data !== null){
                    setTemplateData(data)
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
        <>
        <NavigationBar></NavigationBar>
        <TemplateCarousel></TemplateCarousel>
        {/*Get stored template id and render that template from DB*/}
        <div className="profile-wrapper">
          {
              templateArray[template]
          }
        </div>
      </>
    );
}

export default Profile;