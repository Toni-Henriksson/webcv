import { auth } from './firebase-config';
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