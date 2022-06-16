import { getDatabase, onValue, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";


export const fetchUserData = () => {
    const db = getDatabase();
    const author = getAuth();

    onAuthStateChanged(author, (user)=>{
        if(user){
            const uid = user.uid;
            onValue(ref(db, 'users/' + uid), snapshot => {
                const data = snapshot.val();
                if (data !== null) {
                    let name = data.fullname
                    console.log(name)
                }
                else {
                    console.log("No data from DB")
                }
            })
        }
    })
};