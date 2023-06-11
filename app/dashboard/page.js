
import {useAuthState} from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase.config";
import { query, collection, getDocs, where } from "firebase/firestore";

export default function Dashboard() {

    // const [userData, setUserData] = useState('');

    // const fetchUserData = async ()=>{
    //         try {
            
    //             let q = query(collection(db, 'users'), where("uid", "==", user?.uid));
    //             const doc = await getDocs(q);
    //             const data = doc.docs.data();
    //             console.log(data);

    //         } catch (err) {
    //             console.error(err);                
    //         }
    // }

    return (
        <div>
            <h1>This is user's Dashboard</h1>

        </div>
    )
} 