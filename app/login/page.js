"use client";
import { useState } from "react";
import {auth, signInWithGoogle} from "../../firebase.config";
import {useRouter} from "next/navigation";
import { useAuth } from "@/context/AuthContext";




export default function login(){

    const router = useRouter();


    const { loginWithGoogle} = useAuth();


    const handleLogin = async ()=>{
        const loginUser = await loginWithGoogle();
        router.push('/dashboard');
    }





    return (
        <div>
            <button onClick={handleLogin} className="fixed md:left-[45%] left-[35%] top-[50%] text-xl bg-peach-red px-8 py-2 rounded-3xl">Login with Google</button>
        </div>
    )
}