import { auth, database } from './firebase-config';
import { getDatabase, ref, set, child, get } from "firebase/database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth} from "firebase/auth";

export const register = async (email, password, fullname, username) => {
    try{
        const user = await createUserWithEmailAndPassword(auth, email, password);

        // Creates database template for newly created user
        writeToDB(user.user.uid, email, fullname, username);
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


export const writeToDB = async (userId, email, fullname, username) => {
    const db = database;
    try{
        set(ref(db, 'users/' + userId), {
            email: email,
            fullname: fullname,
            username: username,
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

// Returns a promise
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



