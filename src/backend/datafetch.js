import { getDatabase, onValue, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";


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
async function fetchUid() {
    auth.onAuthStateChanged((user) => {
        return user.uid
    })
}
export async function fetchMyAPI() {
    const db = getDatabase();
    const uid = await fetchUid()
    const response = await
    get(ref(db, 'users/' + uid), snapshot => {
        const data = snapshot.val();
        if (data !== null) {
            let name = data.fullname
            console.log(data)
        }
        else {
            console.log("No data from DB")
        }
    });
    return response;
  }
  