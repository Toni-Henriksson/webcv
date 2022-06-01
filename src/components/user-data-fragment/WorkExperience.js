import {React, useState} from "react";
import { database } from '../../backend/firebase-config';
import { push, ref, set } from "firebase/database";

const WorkExperience = () => {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');

    const sub = (e) => {
      e.preventDefault();
      const db = database;  
      // Add data to the store
      push(ref(db, 'exp'), {
          title: title,
          duration: duration,
          description: description
        })
      .then(() => {
          //
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
  }
  return (
    <div>
    <center>
        <form
          onSubmit={(event) => {sub(event)}}>
            <input type="text" placeholder="title"
              onChange={(e)=>{setTitle(e.target.value)}} />
              <br/><br/>
            <input type="text" placeholder="duration"
              onChange={(e)=>{setDuration(e.target.value)}}/>
              <br/><br/>
            <input type="text" placeholder="description"
              onChange={(e)=>{setDescription(e.target.value)}}/>
              <br/><br/>
            <button type="submit">Submit</button>
        </form>
    </center>
</div>
  );
}

export default WorkExperience;