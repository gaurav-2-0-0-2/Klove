'use client'
import React, { useContext, useState, useEffect, useRef } from "react";
import { auth } from "../firebase.config";
import {
    onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut
} from "firebase/auth";

// use next-auth instead of firebase auth ****

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
    } catch (err) {
        console.error(err);
    }
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const userInfo = useRef();

    function loginWithGoogle() {
        return signInWithGoogle();
    }

    function signout() {
        return signOut();
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
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
