import {React, useState} from "react";
import { database, auth  } from '../../../backend/firebase-config';
import { push, ref} from "firebase/database";
import './addlinkswidget.css';

const AddLinksWidget = () => {
    const [platform, setPlatform] = useState('');
    const [link, setLink] = useState('');

    const sub = (e) => {
      e.preventDefault();
      const db = database;  
      const uid = auth.currentUser.uid; 
      // Add data to the store
      push(ref(db, 'users/' + uid + '/links'), {
          platform: platform,
          link: link,
        })
      .then(() => {
          setPlatform('');
          setLink('');
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
  }

  return (
    <div className="add-work-container">
    <center>
      <h2 className="title">Add links</h2>
        <form
          onSubmit={(event) => {sub(event)}}>
            <div className="section">
            <label className="label">Platform
              <input type="text" placeholder="Platform"
                onChange={(e)=>{setPlatform(e.target.value)}} value={platform} />
                <br/>
            </label>
            </div>

            <div className="section">
            <label className="label">Link to profile</label>
            <input type="text" placeholder="Link to profile"
              onChange={(e)=>{setLink(e.target.value)}} value={link}/>
              <br/>
            </div>
            <button type="submit" className="experience-submit-btn">Submit</button>
        </form>
    </center>
</div>
  );
}

export default AddLinksWidget;