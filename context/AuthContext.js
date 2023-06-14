'use client'
import React, {useContext, useState, useEffect, useRef, Children} from "react";
import {auth,db, signInWithGoogle, logout} from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import {doc, getDoc} from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext); 
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const userInfo = useRef();

    function loginWithGoogle(){
        return signInWithGoogle();
    }

    function signout(){
        return logout();
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe
    }, [])


    const value = {
        currentUser,
        loginWithGoogle,
        signout,
        userInfo
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
} 
