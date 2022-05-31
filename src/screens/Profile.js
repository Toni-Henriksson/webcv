import { React, useState, useEffect } from "react";
import { get, getDatabase, onValue, ref} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../backend/firebase-config";
import '../css/screens/profile.css';
import NavigationBar from '../components/NavigationBar';
import BasicTemplate from '../components/templates/basic-template/BasicTemplate'
import TemplateCarousel from "../components/TemplateCarousel";
import WorkExperience from "../components/user-data-fragment/WorkExperience";

const Profile = () => {
  const [userId, setUid] = useState(); 
  // Current selected template
  const [template, setTemplate] = useState(0);
  const author = getAuth();

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [userAlias, setAlias] = useState('')


  const [exData, setExData] = useState([]);
  const [edData, setEdData] = useState([
    ["Lab University of Applied Sciences", "10/2022 - 12/2022", "Bachelodr of Software Engineering"],
    ["Edupoli", "10/2022 - 12/2022", "Electrician"]
  ]);
  useEffect(() => {
    setUid(auth.currentUser.uid);
    return(fetchWork())
  }, []);

  function fetchWork() {
    //let userId = auth.currentUsesr.uid;ss
    const db = getDatabase();
    const workDB = ref(db, 'users/' + userId + '/experience/');
    onValue(workDB, (snapshot) => {
      const exp = []
      snapshot.forEach(item => {
        const temp = item.val();
        exp.push([temp.title, temp.duration, temp.description]);
        console.log(exp)
        return false;
      })
      console.log(exp)
      setExData(exp);
    });
  }

  // All avaible templates basic, modeddrn, retro, simple
  const templateArray = [
    <BasicTemplate exData={exData} edData={edData} phone={phone} email={email} userAlias={userAlias}></BasicTemplate>,
  ];


  useEffect(() => {
    // Gets data from user-specific db and stores it to setData state. (render them to screen after)
    onAuthStateChanged(author, (user) => {
      if (user) {
        const uid = user.uid;
        onValue(ref(getDatabase(), 'users/' + uid + '/phoneNumber'), snapshot => {
          const data = snapshot.val();
          if (data !== null) {
            setPhone(data)
          }
          else {
            console.log("No data from DB")
          }
        });

        onValue(ref(getDatabase(), 'users/' + uid + '/email'), snapshot => {
          const data = snapshot.val();
          if (data !== null) {
            setEmail(data)
          }
          else {
            console.log("No data from DB")
          }
        });

        onValue(ref(getDatabase(), 'users/' + uid + '/username'), snapshot => {
          const data = snapshot.val();
          if (data !== null) {
            setAlias(data)
          }
          else {
            console.log("No data from DB")
          }
        });
      } else {
        // User is signed out
        console.log("User not signed in.");
      }
    });
  }, []);

  return (
    <>
      <NavigationBar></NavigationBar>
      <TemplateCarousel></TemplateCarousel>
      {/*Get stored template id and render thast template from DB*/}
      <div className="profile-wrapper">
        {
          templateArray[template]
        }
        <WorkExperience></WorkExperience>
      </div>
    </>
  );
}

export default Profile;