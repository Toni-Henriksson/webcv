import {React, useState} from "react";
import { database, auth } from '../../backend/firebase-config';
import { push, ref, set } from "firebase/database";
import './workexperience.css';
const WorkExperience = () => {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');

    const sub = (e) => {
      e.preventDefault();
      const db = database; 
      const uid = auth.currentUser.uid; 
      // Add data to the store
      push(ref(db, 'users/' + uid + '/exp'), {
          title: title,
          duration: duration,
          description: description
        })
      .then(() => {
          setTitle('');
          setDuration('');
          setDescription('');
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
  }
  return (
    <div className="add-work-container">
    <center>
      <h2 className="title">Add work experience</h2>
        <form
          onSubmit={(event) => {sub(event)}}>
            <div className="section">
            <label className="label">Work experience title
              <input type="text" placeholder="title"
                onChange={(e)=>{setTitle(e.target.value)}} value={title} />
                <br/>
            </label>
            </div>

            <div className="section">
            <label className="label">Experience duration
              <input type="text" placeholder="duration"
                onChange={(e)=>{setDuration(e.target.value)}} value={duration}/>
                <br/>
            </label>
            </div>

            <div className="section">
            <label className="label">Description of the job
            <input type="text" placeholder="description"
              onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
              <br/>
            </label>
            </div>

            <button type="submit" className="experience-submit-btn">Submit</button>
        </form>
    </center>
</div>
  );
}

export default WorkExperience;