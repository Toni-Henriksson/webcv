import {React, useState} from "react";
import { saveUserWorkExperience } from "../../backend/firebase-utility";

const WorkExperience = () => {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');

    const handleSending = () => {
      const arr = [title,duration,description]
      saveUserWorkExperience(arr)
      setTitle('')
      setDescription('')
      setDuration('')
    };

  return (
      <>
    <div className="workexperience-container">
      <input
        type="text"
        placeholder="Job title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Job durdation"
        value={duration}
        onChange={(e)=>setDuration(e.target.value)}
        />
      <input
      type="text"
      placeholder="Job overview"
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />
      <button onClick={() => handleSending()}>Submit</button>
    </div>
    </>
  );
}

export default WorkExperience;