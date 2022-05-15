import { auth } from './firebase-config';
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";


export const register = async (email, password) => {
    try{
        const user = await createUserWithEmailAndPassword(auth, email, password)
    }catch(error){
        console.log(error.message);
    }
};

export const login = async () => {

};

export const logout = async () => {
    await signOut(auth);
};