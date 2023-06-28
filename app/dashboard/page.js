"use client";
import React from 'react';
import { auth, db, logout, postRecipe } from "../../firebase.config";
import { query, collection, getDocs, where, addDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { FaUser, FaHome, FaSearch, FaEdit, FaHeart, FaTrash } from "react-icons/fa"
import { Modal } from "antd";
import NoActivity from "../component/NoActivity";
import RecipeForm from "../component/RecipeForm";
import LoadingText from "../component/LoadingText";
import ModalForm from "../component/Modal";
import { Button } from "@nextui-org/react";






// Made this a prrotected route 

export default function Dashboard() {

    const router = useRouter();

    const formRef = useRef();

    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState(null);
    const [textarea, setTextarea] = useState(false);
    // const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = React.useState(false);





    const { currentUser, signout } = useAuth();

    const queryDB = () => {
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
            setLoading(false);
        });

        console.log(posts);

        return () => unsubscribe();
    }

    useEffect(() => {
        if (currentUser) {
            console.log("signed in");
            queryDB();
        } else if (currentUser == null) {
            router.push("/login");
        }

        // fetchPosts();




    }, []);
    // console.log(currentUser);

    // const fetchPosts = async () => {
    //     const response = collection(db, 'posts');
    //     console.log(response);
    // }

    // if (loading) {
    //     return (
    //         <div>Laoding...</div>
    //     )
    // }


    const handleLogout = () => {
        const logoutUser = signout();
        router.push("/");
    }


    const handleClick = () => {
        setTextarea(true);
    }

    // const cancelPost = () => {
    //     setOpen(false);
    // }

    const dbRef = collection(db, "posts");

    const postRecipe = async (e) => {

        e.preventDefault();
        console.log(e);

        // setOpen(false);

        const newRecipe = {
            title: e.target[0].value,
            content: e.target[1].value,
            uid: currentUser.uid
        }

        try {
            // Adding document in posts collection on firestore
            await addDoc(dbRef, newRecipe);
            queryDB();

            // posts.push(newRecipe);
            // console.log(posts);
        } catch (err) {
            console.error(err);
        }
    };



    const handler = () => setOpenModal(true);
    const closeHandler = () => {
        setOpenModal(false);
        console.log("closed");
    };



    return (
        <div className="flex flex-row gap-10">

            {/* Vertical Navbar on far left */}

            <div className="flex flex-col text-center h-screen max-w-[10rem] px-6 shadow-lg">
                <nav className="flex-1 mt-6">
                    <div className="mt-12 cursor-pointer">
                        <img src={currentUser.photoURL} className="inline-block rounded-full w-[50px]" alt="profile-pic" />
                    </div>
                    <div className="mt-12 cursor-pointer">
                        <FaSearch size={25} className="inline-block text-16" />
                    </div>
                    <Button onPress={handler} className="mt-12 cursor-pointer">
                        <FaEdit size={25} className="inline-block text-16" />
                    </Button>

                    {/* Antd Modal  */}
                    {/* <Modal title='New Post' onCancel={cancelPost} open={open}>
                        <RecipeForm handleSubmit={postRecipe} handleRef={formRef}/>
                    </Modal> */}

                    {/* NextUI Modal  */}
                    <ModalForm openModal={openModal} closeHandler={closeHandler} buttonText='POST'></ModalForm>

                </nav>

                <button className="block mb-10 px-4 py-2 bg-fresh-green rounded-full hover:bg-semi-bold-green shadow-md shadow-semi-bold-green" onClick={handleLogout}>Logout</button>
            </div>


            {/* body of dashboard */}

            {posts && posts.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 h-screen overflow-y-auto w-[50%]">
                    <div className="h-[10%]">
                        {posts.map((post, index) => {
                            return (
                                <div key={index} className="bg-fresh-green px-4 py-4">
                                    <h1 className="text-lg font-bold">{post.title}</h1>
                                    <div className="flex flex-row gap-4">
                                        <img className="rounded-full h-[20px] w-[20px]" width={25} height={25} src={currentUser.photoURL} alt="profilePhoto" />
                                        <div>
                                            <p>{currentUser.displayName}</p>
                                            <p>{post.content}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <FaHeart />
                                        <FaTrash />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            ) : (

                <div className="basis-1/2 mt-4">{textarea ? (<div>
                    <RecipeForm handleSubmit={postRecipe} handleRef={formRef} />
                </div>) : (
                    loading ? <LoadingText /> : <NoActivity handleClick={handleClick} />
                )}</div>

            )}

















        </div>
    )
} 