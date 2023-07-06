// "use client";
import React from 'react';
import {db} from "../firebase.config";
import { query, collection, getDocs, where, addDoc, onSnapshot, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { FaUser, FaHome, FaSearch, FaEdit, FaHeart, FaTrash } from "react-icons/fa"
import NoActivity from "./component/NoActivity";
import RecipeForm from "./component/RecipeForm";
import LoadingText from "./component/LoadingText";
import ModalForm from "./component/Modal";
import { Button } from "@nextui-org/react";
import { MdDeleteOutline, MdFavoriteBorder } from "react-icons/md";
import { Nunito } from 'next/font/google';

const nunito = Nunito({ 
    subsets: ['latin'], 
    weight: ['400', '700'],
    variable: '--font-nunito'
});






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

    const dbRef = collection(db, "posts");

    const queryDB = () => {
        // querying the posts collection
        const q = query(dbRef);
        const unsubscribe = onSnapshot(q, (snapshot) => {

            let updatePosts = [];
            snapshot.docChanges().forEach((change) => {

                let postChange = change.doc.data();
                postChange.id = change.doc.id;

                if (change.type === "added") {
                    console.log("New post: ", postChange);
                    // updatePosts.push(change.doc.data());
                    updatePosts.unshift(postChange);
                    // setPosts((prevPosts) => [...prevPosts, change.doc.data()]);

                }
                // if (change.type === "modified") {
                //     console.log("Modified post: ", change.doc.data());
                // }
                if (change.type === "removed") {
                    console.log("Removed post: ", postChange);
                    let index = updatePosts.findIndex(post=> post.id === postChange.id);
                    updatePosts.splice(index,1);
                }
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

    // Handling Logout  ---- Need to make some changes 
    // User is not redirected to login page gives an error {{'photoURL not defined'}}

    const handleLogout = () => {
        const logoutUser = signout();
        router.push("/");
    }

    // Handling TextArea

    const handleClick = () => {
        setTextarea(true);
    }

    // Adding New Recipe to Firestore

    const postRecipe = async (e) => {

        e.preventDefault();
        // console.log(e);


        const newRecipe = {
            title: e.target[0].value,
            content: e.target[1].value,
            uid: currentUser.uid,
            timeStamp: serverTimestamp(),
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


    // Modal handler

    const handler = () => setOpenModal(true);
    const closeHandler = () => {
        setOpenModal(false);
        console.log("closed");
    };

    // Handling Deleting of Posts
    // const handleDelete = async (post) => {
    //     try {
    //        await deleteDoc(dbRef, post.id);
    //     } catch (error) {
    //         console.error("post not deleted");
    //     }

       
    // };



    return (
        <div className={` ${nunito.variable} font-sans2 flex flex-row gap-10`}>

            {/* Vertical Navbar on far left */}

            <div className="flex flex-col text-center h-screen max-w-[10rem] px-6 shadow-lg">
                <nav className="flex-1 mt-6">
                    <div className="mt-12 cursor-pointer">
                        <img src={ currentUser && currentUser.photoURL} className="inline-block m-auto rounded-full w-[50px]" alt="profile-pic" />
                    </div>
                    <div className="mt-12 cursor-pointer">
                        <FaSearch size={25} className="inline-block text-dark-gray" />
                    </div>
                    <div className="mt-12 cursor-pointer">
                        <Button onPress={handler} light size='xs' css={{ height: '$12' }}>
                            <FaEdit size={25} className="inline-block text-dark-gray" />
                        </Button>
                    </div>


                    {/* Antd Modal  */}
                    {/* <Modal title='New Post' onCancel={cancelPost} open={open}>
                        <RecipeForm handleSubmit={postRecipe} handleRef={formRef}/>
                    </Modal> */}

                    {/* NextUI Modal  */}
                    <ModalForm content={<RecipeForm handleSubmit={postRecipe} handleRef={formRef} />} openModal={openModal} closeHandler={closeHandler} />

                </nav>

                <button className="block mb-10 px-4 py-2 bg-fresh-green rounded-full hover:bg-semi-bold-green shadow-md shadow-semi-bold-green" onClick={handleLogout}>Logout</button>
            </div>


            {/* body of dashboard */}

            {posts && posts.length > 0 ? (
                <div className="grid grid-cols-1 h-screen overflow-y-auto w-[50%] hide-scrollbar">
                    <div className="h-[10%]">
                        {posts.map((post, index) => {
                            return (
                                <div key={index} className="bg-white shadow-lg border-2 border-gray-[200] px-4 rounded-lg py-4 mt-4">
                                    <h1 className="text-lg font-bold">{post.title}</h1>
                                    <div className="flex flex-row text-md text-dark-gray gap-2 mb-2">
                                        <img className="rounded-full h-[20px] w-[20px]" width={25} height={25} src={currentUser && currentUser.photoURL} alt="profilePhoto" />
                                        <p>{ currentUser && currentUser.displayName}</p>
                                    </div>
                                    <p>{post.content}</p>
                                    <div className="flex flex-row justify-end gap-6 mt-3">
                                        <MdFavoriteBorder size={20} className='text-dark-gray' />
                                        <MdDeleteOutline size={20} className='text-dark-gray cursor-pointer' />
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


// Things to implement
// 2. Remove the scrollbar on dashboard page
// 3. Add timestamps to posts 
