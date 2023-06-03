// import Link from "next/link"
// import Dashboard from "../dashboard"
import Login from "./Login";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { app } from '../../firebase.config'
import { useState } from "react";

export default function Navbar() {

    const [user, setUser] = useState(null);

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const userLogin = async () => {
        const response = await signInWithPopup(firebaseAuth, provider)
        //    console.log(response);
        const userInfo = await response.user; // this user is the data we get after login
        // console.log(userInfo);
        setUser(userInfo);
    }

    return (
        <div>
            <div className="flex flex-row bg-nav-bar-clr justify-between px-10 py-7">
                <h1 className="text-5xl font-extrabold italic text-klove">Klove</h1>

                {
                    user != null ? (
                            <img className="w-[50px] h-[50px] rounded-full" src={user.photoURL} alt="profileImage"/>
                    ) : (
                        <div className="flex gap-10">
                            <button className=" text-xl bg-signup-btn-clr px-8 py-2 rounded-3xl">Signup</button>
                            {/* <button className="text-xl bg-login-btn-clr px-8 py-2 rounded-3xl">Login</button> */}
                            <Login handleClick={userLogin} />

                        </div>
                    )
                }

            </div>

            <div className="flex justify-evenly my-4">
                <h1 className="text-2xl">HOME</h1>
                <h1 className="text-2xl">ABOUT</h1>
                <h1 className="text-2xl">CONTACT</h1>
            </div>

        </div>
    )
}