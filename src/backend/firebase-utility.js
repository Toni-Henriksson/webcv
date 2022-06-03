import { auth, database } from './firebase-config';
import { getDatabase, ref, set, child, get, push } from "firebase/database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

export const register = async (email, password, fullname, username, phoneNumber) => {
    try{
        const user = await createUserWithEmailAndPassword(auth, email, password);

        // Creates database template for newly created user
        writeToDB(user.user.uid, email, fullname, username, phoneNumber);
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
    try {
        await signOut(auth);
    } catch (error) {
        console.log("Error loggin out: " + error)
    }
};

// Writes all information from register multi-page-form to database
export const writeToDB = async (userId, email, fullname, username, phoneNumber) => {
    const db = database;
    try{
        set(ref(db, 'users/' + userId), {
            email: email,
            fullname: fullname,
            username: username,
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


export const saveUserWorkExperience = async ([title, duration, description]) => {
    let userId = auth.currentUser.uid;
    const db = database;
    try{
        //console.log("datan tallentaminen aloitettu")
        await push(ref(db, 'users/' + userId + "/experience/"), {
            title: title,
            duration: duration,
            description: description
        })
        //console.log("data tallentui")
    }catch(error){
        console.log("virhe dataa tallentaessa");
    };
};

export const saveUserEducation = async (edData) => {
    let userId = auth.currentUser.uid;
    const db = database;

};

export const readFromDB = async () => {
    let userId = auth.currentUser.uid;
      const db = getDatabase();
      const workDB = ref(db, 'users/' + userId + '/experience/');
      get(workDB, (snapshot) => {
        console.log("moimoi")
        const exp = []
        snapshot.forEach(item => {
          const temp = item.val();
          exp.push([temp.title, temp.duration, temp.description]);
          return false;
        })
        console.log(exp)
        return(exp);
      });
};




