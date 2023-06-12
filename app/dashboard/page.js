"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase.config";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useEffect } from "react";

export default function Dashboard() {

    // const [userData, setUserData] = useState('');


    const fetchUsers = async () => {

        try {
            const q = query(collection(db, "users"));

            const querySanpshot = await getDocs(q);

            const data =  querySanpshot.data();

            console.log(data);

            // querySanpshot.forEach((doc) => {
            //     console.log(doc.id, "=>", doc.data());
            // })

        } catch (err){
            console.error(err)
        }




    }




    useEffect(() => {
        fetchUsers();
    }, [])



    return (
        <div>
            <h1>This is user's Dashboard</h1>
            {/* <button onClick={}>Get Doc</button> */}
        </div>
    )
} 