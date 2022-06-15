import {React, useState} from "react";
import { database, auth  } from '../../../backend/firebase-config';
import { push, ref} from "firebase/database";
import './addskillswidget.css';

const AddSkillsWidget = () => {
    const [skill, setSkill] = useState('');

    const sub = (e) => {
      e.preventDefault();
      const db = database;  
      const uid = auth.currentUser.uid; 
      // Add data to the store
      push(ref(db, 'users/' + uid + '/skills'), {
          skill: skill,
        })
      .then(() => {
          setSkill('');
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
  }

  return (
    <div className="add-work-container">
    <center>
      <h2 className="title">Add skills</h2>
        <form
          onSubmit={(event) => {sub(event)}}>
            <div className="section">
              <input type="text" placeholder="Example: Excel, Powerpoint"
                onChange={(e)=>{setSkill(e.target.value)}} value={skill} />
                <br/>
            </div>
            <button type="submit" className="experience-submit-btn">Submit</button>
        </form>
    </center>
</div>
  );
}

export default AddSkillsWidget;