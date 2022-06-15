import {React, useState} from "react";
import { database, auth  } from '../../../backend/firebase-config';
import { push, ref, set} from "firebase/database";
import './addtextwidget.css';

const AddTextWidget = () => {
    const [text, setText] = useState('');

    const sub = (e) => {
      e.preventDefault();
      const db = database;  
      const uid = auth.currentUser.uid; 
      // Add data to the store
      set(ref(db, 'users/' + uid + '/about'), {
          text
        })
      .then(() => {
          setText('');
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
  }

  return (
    <div className="add-work-container">
    <center>
      <h2 className="title">Add about text</h2>
        <form
          onSubmit={(event) => {sub(event)}}>
            <div className="section">
              <textarea type="text" placeholder="Tell something relevant" multiple="true" style={{height: "140px", width: "100%", textAlign: "left"}}
                onChange={(e)=>{setText(e.target.value)}} value={text} />
                <br/>
            </div>
            <button type="submit" className="experience-submit-btn">Submit</button>
        </form>
    </center>
</div>
  );
}

export default AddTextWidget;