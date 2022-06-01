import { database } from '../../backend/firebase-config';
import { push, ref, set } from "firebase/database";
import {useState} from 'react';
  
const Experience = () => {
    const [name  , Setname] = useState("");
    const [age , Setage] = useState("");
    const [course , Setcourse] = useState("");
    const sub = (e) => {
        e.preventDefault();
        const db = database;  
        // Add data to the store
        push(ref(db, 'exp'), {
            title: name,
            duration: age,
            description: course
          })
        .then(() => {
            //alert("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    
    return (
        <div>
            <center>
                <form style={{marginTop:"200px" }}
                  onSubmit={(event) => {sub(event)}}>
                    <input type="text" placeholder="your name"
                      onChange={(e)=>{Setname(e.target.value)}} />
                      <br/><br/>
                    <input type="number" placeholder="your age"
                      onChange={(e)=>{Setage(e.target.value)}}/>
                      <br/><br/>
                    <input type="text" placeholder="Course Enrolled"
                      onChange={(e)=>{Setcourse(e.target.value)}}/>
                      <br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </center>
        </div>
    );
}
  
export default Experience;