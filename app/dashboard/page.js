"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase.config";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { FaUser, FaHome, FaSearch, FaEdit } from "react-icons/fa"


// Made this a prrotected route 

export default function Dashboard() {

    const router = useRouter();

    const { currentUser, signout } = useAuth();

    useEffect(() => {
        if (currentUser) {
            console.log("signed in");
        } else if (currentUser == null) {
            router.push("/login");
        }
    })
    console.log(currentUser);

    const handleLogout = () => {
        const logoutUser = signout();
        router.push("/");
    }

    return (
        <div>

            <div className="flex flex-col text-center h-screen max-w-[10rem] bg-maroon-light px-6">
                <nav className="flex-1 mt-6">
                    <div className="mt-12 cursor-pointer">
                        {/* <FaUser size={30} className="inline-block text-16" /> */}
                        {/* <a href="#" className="block text-gray-900">User</a> */}
                        <img src={currentUser.photoURL} className="inline-block rounded-full w-[50px]" alt="profile-pic" />
                    </div>
                    <div className="mt-12 cursor-pointer">
                        <FaHome size={25} className="inline-block text-16" />
                        {/* <a href="#" className="block text-gray-900">Home</a> */}
                    </div>
                    <div className="mt-12 cursor-pointer">
                        <FaSearch size={25} className="inline-block text-16" />
                        {/* <a href="#" className="block text-gray-900">Explore</a> */}
                    </div>
                    <div className="mt-12 cursor-pointer">
                        <FaEdit size={25} className="inline-block text-16" />
                        {/* <a href="#" className="block text-gray-900">Edit</a> */}
                    </div>

                </nav>

                <button className="block mb-10 px-4 py-2 bg-white rounded-full hover:bg-peach-red shadow-2xl shadow-maroon-dark" onClick={handleLogout}>Logout</button>
            </div>


            <div className="fixed top-[40%] left-[50%] text-center">
                <h1 className="text-light-grey text-3xl font-thin mb-10">No Activity Yet</h1>
                <button className="bg-maroon-dark px-10 py-2 font-bold text-2xl text-white hover:bg-maroon-light drop-shadow-2xl">WRITE</button>
            </div>

            {/* <button onClick={}>Get Doc</button> */}


        </div>
    )
} 