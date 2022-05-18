import { auth, database } from './firebase-config';
import { getDatabase, ref, set, child, get } from "firebase/database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const register = async (email, password) => {
    try{
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
    }catch(error){
        console.log(error.message);
    }
};

export const login = async (email, password) => {
    try{
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
    }catch(error){
        console.log(error.message);
    }
};

export const logout = async () => {
    await signOut(auth);
};

export const writeToDB = async (userId, name, email, imageUrl) => {
    const db = database;
    try{
        set(ref(db, 'users/' + userId), {
            username: name,
            email: email,
            profile_picture : imageUrl
          });
          console.log("Data sent: " + userId + name + email); 
    }catch(error){
        console.log(error.message);
    }

};

export const readFromDB = async (userId) => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
        console.error(error);
    });
};

