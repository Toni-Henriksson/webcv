import { auth, database } from './firebase-config';
import { getDatabase, ref, set, child, get } from "firebase/database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

export const register = async (email, password) => {
    try{
        const user = await createUserWithEmailAndPassword(auth, email, password);

        // Creates database template for newly created user
        writeToDB(user.user.uid, email, "", "", "");
        console.log(user);
    }catch(error){
        console.log(error.message);
    }
};

export const login = async (email, password) => {
    try{
        const user = await signInWithEmailAndPassword(auth, email, password);
        //console.log("User logged in, UID is: " + user.user.uid);
    }catch(error){
        console.log(error.message);
    }
};

export const logout = async () => {
    await signOut(auth);
};

export const writeToDB = async (userId, name, email, imageUrl, education) => {
    const db = database;
    try{
        set(ref(db, 'users/' + userId), {
            username: name,
            email: email,
            profile_picture : imageUrl,
            education: education,

          });
          console.log("Data sent: " + userId + name + email); 
    }catch(error){
        console.log(error.message);
    }

};


// Returns a promise
export const readFromDB = async (userId) => {
    const dbRef = ref(getDatabase());
    //const dbData = get(child(dbRef, `users/${userId}`));
    //console.log("From read func: " + dbData);
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
        //console.log(snapshot.val());
        let dbReturnedData = snapshot.val();
        let dbReturnedDataArray = Object.values(dbReturnedData);
        
        //console.log(dbReturnedDataArray[0]);
        return dbReturnedDataArray;
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
        console.error(error);
    }); 
};


