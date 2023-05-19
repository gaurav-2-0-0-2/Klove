'use client';
// import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Dashboard from "./pages/dashboard";
import { auth } from "./firebase";
import Login from "./component/Login";
import Logout from './component/Logout';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged  } from "firebase/auth";
// import {useAuthState} from 'react-firebase-hooks/auth';
// const router = useRouter();


const provider = new GoogleAuthProvider(); 

export default function Home(props) {
 
  const [user, setUser] = useState(null);


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
    if(user){
        setUser(user)
      }else{
        setUser(null)
      }
    });

    return ()=> unsubscribe();
  }, [])
  
  
   
  const handleLogin = async ()=>{
      // const result = await signInWithPopup(auth, provider)
      // setUser(auth)
      // console.log("user signed in success.")
      try 
      {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log('User signed in successfully.');
      } catch (error) {
      console.error('Error signing in:', error);
      }
  }


   const handleLogout = async ()=>{
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
          <Logout signout={handleLogout}/>
        ): (
          <Login signin={handleLogin}/>
        )
       }
    </div>
  )



}


  // This is the code I have written

  // const provider = new GoogleAuthProvider();


  // const handleLogin = async () => {
  //   const [user, setUser] = useState(auth);
  //   try {
  //     const result = await signInWithPopup(auth, provider)
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     // console.log(user);
  //   } catch (error) {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //   }

   
    
  // }

  // return (
  //   <div>
  //     <h1 className='text-3xl text-red-500'>LOGIN WITH GOOGLE</h1>
  //     <button onClick={handleLogin} className=" bg-slate-500 px-4 py-2 rounded-md">LOGIN</button>
  //   </div>
  // )