'use client';
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect} from "firebase/auth";
export default function Home() {


  const provider = new GoogleAuthProvider();


  
  

  const handleLogin = async () => {

    const result = await signInWithPopup(auth, provider)
    // .then((result) => {
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;

    //   const user = result.user;
    // }).catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;

    //   const email = error.customData.email;

    //   const credential = GoogleAuthProvider.credentialFromError(error)
    // });
  }




  return (
    <div>
      <h1 className='text-3xl text-red-500'>LOGIN WITH GOOGLE</h1>
      <button onClick={handleLogin} className=" bg-slate-500 px-4 py-2 rounded-md">LOGIN</button>
    </div>
  )
}
