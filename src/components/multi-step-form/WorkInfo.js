import React, { useState } from "react";

const WorkInfo = ({ exData, setExData }) => {
    // Make so this all 3 fields makes only 1 array and returns it to setExData (Adds that field to existing array of items)
    const [fragment, setFragment] = useState(["","",""])
    const handleFields = (id,value) =>{
        if(id === 0){
            
        }
        else if(id === 1){

        }
        else if(id === 2){

        }
        else{
            console.log("Error from fields id, no such thing!")
        }
    }
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Job title"
        value={exData}
        onChange={(e) => {
            let id = 0
            handleFields(id,e.target.value)
          //setFormData({ ...exData, experience: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Job duration"
        value={formData.education}
        onChange={(e) => {
          setFormData({ ...formData, education: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Job overview"
        value={formData.skills}
        onChange={(e) => {
          setFormData({ ...formData, skills: e.target.value });
        }}
      />
    </div>
  );
}

export default WorkInfo;