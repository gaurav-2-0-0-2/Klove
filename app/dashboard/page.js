"use client";
import { auth, db, logout, postRecipe } from "../../firebase.config";
import { query, collection, getDocs, where, addDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { FaUser, FaHome, FaSearch, FaEdit, FaHeart, FaTrash } from "react-icons/fa"
import { Input } from "antd";
const { TextArea } = Input;



// Made this a prrotected route 

export default function Dashboard() {

    const router = useRouter();

    const formRef = useRef();

    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState(null);
    const [textarea, setTextarea] = useState(false);



    const { currentUser, signout } = useAuth();

    useEffect(() => {
        if (currentUser) {
            console.log("signed in");
        } else if (currentUser == null) {
            router.push("/login");
        }

        // fetchPosts();


        

    }, [])
    // console.log(currentUser);

    // const fetchPosts = async () => {
    //     const response = collection(db, 'posts');
    //     console.log(response);
    // }

    const handleLogout = () => {
        const logoutUser = signout();
        router.push("/");
    }


    const handleClick = () => {
        setTextarea(true);
    }

    const dbRef = collection(db, "posts");

    const postRecipe = async (e) => {

        e.preventDefault();
        console.log(e);

        const newRecipe = {
            title: e.target[0].value,
            content: e.target[1].value,
            uid: currentUser.uid
        }

        try {
            // Adding document in posts collection on firestore
            await addDoc(dbRef, newRecipe);

            // querying the posts collection
        const q = query(collection(db, "posts"));
        const unsubscribe = onSnapshot(q, (snapshot) => {

            let updatePosts = [];
            snapshot.docChanges().forEach((change) => {

                if (change.type === "added") {
                    console.log("New post: ", change.doc.data());
                    updatePosts.push(change.doc.data());
                    // setPosts((prevPosts) => [...prevPosts, change.doc.data()]);

                }
                // if (change.type === "modified") {
                //     console.log("Modified post: ", change.doc.data());
                // }
                // if (change.type === "removed") {
                //     console.log("Removed post: ", change.doc.data());
                // }
            });
            setPosts(updatePosts);
        });

        console.log(posts);

        return () => unsubscribe();
            // posts.push(newRecipe);
            // console.log(posts);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex flex-row gap-10">

            {/* Vertical Navbar on far left */}

            <div className="flex flex-col text-center h-screen max-w-[10rem] bg-maroon-light px-6">
                <nav className="flex-1 mt-6">
                    <div className="mt-12 cursor-pointer">
                        <img src={currentUser.photoURL} className="inline-block rounded-full w-[50px]" alt="profile-pic" />
                    </div>
                    <div className="mt-12 cursor-pointer">
                        <FaSearch size={25} className="inline-block text-16" />
                    </div>
                    <div className="mt-12 cursor-pointer">
                        <FaEdit size={25} className="inline-block text-16" />
                    </div>

                </nav>

                <button className="block mb-10 px-4 py-2 bg-white rounded-full hover:bg-peach-red shadow-2xl shadow-maroon-dark" onClick={handleLogout}>Logout</button>
            </div>


            {/* body of dashboard */}

            {posts && posts.length > 0 ? (
                <div className="grid grid-cols-3 gap-6">
                    {posts.map((post, index) => {
                        return (
                            <div key={index} className="bg-white px-4 py-4">
                                <h1 className="bg-peach-lighter">{post.title}</h1>
                                <p className="bg-maroon-light">{post.content}</p>
                                <div className="flex flex-row">
                                    <FaHeart/>
                                    <FaTrash/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                
                    <div className="basis-1/2 mt-4">{textarea ? (<div>
                        <form onSubmit={postRecipe} ref={formRef}>
                            <input type="text" placeholder="Title" />
                            <TextArea className="text-md mt-2" rows={25} placeholder="Write your Recipe..." />
                            <button type="submit" className="mt-2 bg-maroon-dark px-10 py-2 font-bold text-2xl text-white hover:bg-maroon-light drop-shadow-2xl">POST</button>
                        </form>
                    </div>) : (
                        <div className="fixed top-[40%] left-[50%] text-center">
                            <h1 className="text-light-grey text-3xl font-thin mb-10">No Activity Yet</h1>
                            <button onClick={handleClick} className="bg-maroon-dark px-10 py-2 font-bold text-2xl text-white hover:bg-maroon-light drop-shadow-2xl">WRITE</button>
                        </div>
                    )}</div>
                
            )}















            {/* <button onClick={}>Get Doc</button> */}


        </div>
    )
} 