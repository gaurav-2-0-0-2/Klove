
'use client';
// import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Dashboard from "./pages/dashboard";
import { auth } from "./firebase";
import Login from "./component/Login";
import Logout from './component/Logout';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";

// import {useAuthState} from 'react-firebase-hooks/auth';
// const router = useRouter();


const provider = new GoogleAuthProvider();

export default function Auth(props) {

    const [user, setUser] = useState(null);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        });

        return () => unsubscribe();
    }, [])



    const handleLogin = async () => {
        // const result = await signInWithPopup(auth, provider)
        // setUser(auth)
        // console.log("user signed in success.")
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            console.log('User signed in successfully.');
        } catch (error) {
            console.error('Error signing in:', error);
        }
    }


    const handleLogout = async () => {
        //  const logout = signOut(auth);
        //  setUser(null);
        //  console.log("signned out success");
        try {
            await signOut(auth);
            setUser(null);
            console.log('User signed out successfully.');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    }


    return (
        <div>
            
                {
                    user ? (
                        <Logout signout={handleLogout} />
                    ) : (
                        <Login signin={handleLogin} />
                    )
                }

        </div>
    )

}
