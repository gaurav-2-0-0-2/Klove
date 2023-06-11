"use client";
import { useState } from "react";
import {auth, signInWithGoogle} from "../../firebase.config";
import {useRouter} from "next/navigation"



export default function login(){

    const router = useRouter();
   

    const handleLogin = async ()=>{
        // console.log("clicked");
        const userLogin = await signInWithGoogle();
        router.push("/dashboard");
    }



    return (
        <div>
            <button className="fixed md:left-[45%] left-[35%] top-[50%] text-xl bg-peach-red px-8 py-2 rounded-3xl" onClick={handleLogin}>Login with Google</button>
        </div>
    )
}