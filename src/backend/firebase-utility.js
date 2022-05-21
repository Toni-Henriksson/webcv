import { auth, database } from './firebase-config';
import { getDatabase, ref, set, child, get } from "firebase/database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth} from "firebase/auth";

export const register = async (email, password, fullName) => {
    try{
        const user = await createUserWithEmailAndPassword(auth, email, password);

        // Creates database template for newly created user
        writeToDB(user.user.uid, email, fullName, "", "", "", "");
        console.log(user);
        console.log("User registered: " + fullName);
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


export const writeToDB = async (userId, email, name, imageUrl, education, employment, skills) => {
    const db = database;
    try{
        set(ref(db, 'users/' + userId), {
            email: email,
            username: name,
            profile_picture : imageUrl,
            education: education,
            employment: employment,
            skills: skills
          });
        set(ref(db, 'userrouting/' + name), {
            uid: userId,
            email: email,
            username: name
          });
    }catch(error){
        console.log(error.message);
    }
};
export const getUserUid = async (username) => {

}
// Returns a promise
export const readFromDB = async (userId) => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
        let dbReturnedData = snapshot.val();
        let dbReturnedDataArray = Object.values(dbReturnedData);
        return dbReturnedDataArray;
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
        console.error(error);
    }); 
};



