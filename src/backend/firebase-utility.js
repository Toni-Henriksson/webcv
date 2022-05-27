import { auth, database } from './firebase-config';
import { getDatabase, ref, set, child, get } from "firebase/database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth} from "firebase/auth";

export const register = async (email, password, fullname, username, experience, education, skills, links, phoneNumber) => {
    try{
        const user = await createUserWithEmailAndPassword(auth, email, password);

        // Creates database template for newly created user
        writeToDB(user.user.uid, email, fullname, username, experience, education, skills, links, phoneNumber);
        console.log(user);
        console.log("User registered: " + fullname);
    }catch(error){
        console.log(error.message);
    }
};

export const login = async (email, password) => {
    try{
        const user = await signInWithEmailAndPassword(auth, email, password);
    }catch(error){
        console.log(error.message);
    }
};

export const logout = async () => {
    await signOut(auth);
};

// Writes all information from register multi-page-form to database
export const writeToDB = async (userId, email, fullname, username, experience, education, skills, links, phoneNumber) => {
    const db = database;
    try{
        set(ref(db, 'users/' + userId), {
            email: email,
            fullname: fullname,
            username: username,
            experience: experience,
            education: education, 
            skills: skills,
            links: links,
            phoneNumber: phoneNumber,
          });
        set(ref(db, 'userrouting/' + username), {
            uid: userId,
            email: email,
            fullname: fullname
          });
    }catch(error){
        console.log(error.message);
    }
};

export const saveUserWorkExperience = async (exData) => {
    let userId = auth.currentUser.uid;
    const db = database;
    try{
        set(ref(db, 'users/' + userId + "/experience"), {
            exData
          });
    }catch(error){
        console.log("Error saving user Work Experience! " + error.message);
    }
};
export const saveUserEducation = async (edData) => {
    let userId = auth.currentUser.uid;
    const db = database;
    try{
        set(ref(db, 'users/' + userId + "/education"), {
            edData
          });
    }catch(error){
        console.log("Error saving user Work Experience! " + error.message);
    }
};

export const readFromDB = async (userId) => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
        let dbReturnedData = snapshot.val();
        let dbReturnedDataArray = Object.values(dbReturnedData);
        return dbReturnedDataArray;
    } else {
        console.log("No data availabsle");
    }
    }).catch((error) => {
        console.error(error);
    }); 
};

// Searches for UID from username
export const findUidFromUsername = async (username) => {
    
}



