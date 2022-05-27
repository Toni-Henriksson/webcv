import React, { useState, useEffect } from "react";

const WorkInfo = ({ exData, setExData }) => {
    // Make so this all 3 fields makes only 1 array and returns it to setExData (Adds that field to existing array of items)
    const [fragment, setFragment] = useState(["","",""])

    const dataSender = () => {
        if(fragment[0] !== "" && fragment[1] !== "" && fragment[2] !== ""){
            console.log("Full fragment detected: " + fragment[1]) 
            setExData(exData => [...exData, fragment]);
        }
    }

    return (
        <div className="other-info-container">
        <input
            type="text"
            placeholder="Job title"
            value={fragment[0]}
            onChange={(e) => {
                setFragment({ ...fragment, [0]: e.target.value });
            }}
        />
        <input
            type="text"
            placeholder="Job durdation"
            value={fragment[1]}
            onChange={(e) => {
                setFragment({ ...fragment, [1]: e.target.value });
            }}
        />
        <input
            type="text"
            placeholder="Job overview"
            value={fragment[2]}
            onChange={(e) => {
                setFragment({ ...fragment, [2]: e.target.value });
            }}
        />
        <button onClick={() => {dataSender()}}>Add job</button>
        </div>
    );
}

export default WorkInfo;