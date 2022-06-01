// Import Firestore database
import { database } from '../../backend/firebase-config';
import { get, getDatabase, onValue, ref } from "firebase/database";
import { useState } from 'react';

const Read = () => {
    const [info, setInfo] = useState([]);
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
    });

    // Fetch the required data usinsg the get() method
    const Fetchdata = () => {
        const db = getDatabase();
        const workDB = ref(db, 'exp');
        onValue(workDB, (snapshot) => {
            const exp = []
            snapshot.forEach(item => {
                const temp = item.val();
                exp.push([temp.title, temp.duration, temp.description]);
                return false;
            })
            setInfo(exp);
            console.log("exp: " + exp);
        });
    }

    // Display the result on the page
    return (
        <div>
            <center>
                <h2>Student Details</h2>
            </center>

            {
                info.map((data) => (
                    <Frame course={data[2]}
                        name={data[0]}
                        age={data[1]} />
                ))
            }
        </div>

    );
}

// Define how each display entry will be structured
const Frame = ({ course, name, age }) => {
    //console.log(course + " " + name + " " + age);
    return (
        <center>
            <div className="div">
                <p>NAME : {name}</p>
                <p>Age : {age}</p>
                <p>Course : {course}</p>
            </div>
        </center>
    );
}

export default Read;