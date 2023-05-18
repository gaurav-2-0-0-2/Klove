'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import Dashboard from "./pages/dashboard";
// import {useAuthState} from 'react-firebase-hooks/auth';
// const router = useRouter();
export default function Home() {


  const provider = new GoogleAuthProvider();


  const handleLogin = async () => {
    const [user, setUser] = useState(auth);
    try {
      const result = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    }

   
    
  }






  return (
    <div>
      <h1 className='text-3xl text-red-500'>LOGIN WITH GOOGLE</h1>
      <button onClick={handleLogin} className=" bg-slate-500 px-4 py-2 rounded-md">LOGIN</button>
    </div>
  )
}
