"use client";
import { auth, db, logout, postRecipe } from "../../firebase.config";
import { query, collection, getDocs, where, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { FaUser, FaHome, FaSearch, FaEdit } from "react-icons/fa"
import { Input } from "antd";
const { TextArea } = Input;



// Made this a prrotected route 

export default function Dashboard() {

    const router = useRouter();

    const [textarea, setTextarea] = useState(false);

    const { currentUser, signout } = useAuth();


    const posts = []; // to store users posts 

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


    const handleClick = () => {
        setTextarea(true);
    }

    const dbRef = collection(db, "posts");

    const postData = {
        content: "Paani mein aloo ubaalo",
        title: "Aloo ki Sabzi",
        uid:currentUser.uid
    }


    const postRecipe = async () => {
        try {
            const querySnapshot = await getDocs(query(dbRef));
            if (querySnapshot.size === 0) {
                await addDoc(dbRef, postData);
                console.log('Document added successfully.');
            } else {
                console.log('Document already exists.');
            }
        } catch (err) {
            console.error(err);
        }
    };







    return (
        <div className="flex flex-row gap-10">

            <div className="flex flex-col text-center h-screen max-w-[10rem] bg-maroon-light px-6">
                <nav className="flex-1 mt-6">
                    <div className="mt-12 cursor-pointer">
                        {/* <FaUser size={30} className="inline-block text-16" /> */}
                        {/* <a href="#" className="block text-gray-900">User</a> */}
                        <img src={currentUser.photoURL} className="inline-block rounded-full w-[50px]" alt="profile-pic" />
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


            <div className="basis-1/2 mt-4">{textarea ? (<div>
                <TextArea className="text-md" rows={25} placeholder="Write your Recipe..." />
                <button onClick={postRecipe} className="mt-2 bg-maroon-dark px-10 py-2 font-bold text-2xl text-white hover:bg-maroon-light drop-shadow-2xl">POST</button>
            </div>) : (
                <div className="fixed top-[40%] left-[50%] text-center">
                    <h1 className="text-light-grey text-3xl font-thin mb-10">No Activity Yet</h1>
                    <button onClick={handleClick} className="bg-maroon-dark px-10 py-2 font-bold text-2xl text-white hover:bg-maroon-light drop-shadow-2xl">WRITE</button>
                </div>
            )}</div>


            {/* <button onClick={}>Get Doc</button> */}


        </div>
    )
} 