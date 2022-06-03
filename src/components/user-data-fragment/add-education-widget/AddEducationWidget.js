import {React, useState} from "react";
import { database, auth  } from '../../../backend/firebase-config';
import { push, ref, set } from "firebase/database";
import './addeducationwidget.css';

const AddEducationWidget = () => {
    const [school, setSchool] = useState('');
    const [duration, setDuration] = useState('');
    const [degree, setDegree] = useState('');

    const sub = (e) => {
      e.preventDefault();
      const db = database;  
      const uid = auth.currentUser.uid; 
      // Add data to the store
      push(ref(db, 'users/' + uid + '/edu'), {
          school: school,
          duration: duration,
          degree: degree
        })
      .then(() => {
          setSchool('');
          setDuration('');
          setDegree('');
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
  }
  return (
    <div className="add-work-container">
    <center>
      <h2 className="title">Add education</h2>
        <form
          onSubmit={(event) => {sub(event)}}>
            <div className="section">
            <label className="label">School name
              <input type="text" placeholder="school name"
                onChange={(e)=>{setSchool(e.target.value)}} value={school} />
                <br/>
            </label>
            </div>

            <div className="section">
            <label className="label">Completed date
              <input type="date" placeholder="duration"
                onChange={(e)=>{setDuration(e.target.value)}} value={duration}/>
                <br/>
            </label>
            </div>

            <div className="section">
            <label className="label">Degree name
            <input type="text" placeholder="Degree"
              onChange={(e)=>{setDegree(e.target.value)}} value={degree}/>
              <br/>
            </label>
            </div>

            <button type="submit" className="experience-submit-btn">Submit</button>
        </form>
    </center>
</div>
  );
}

export default AddEducationWidget;