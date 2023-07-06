// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
// import { initializeApp } from "firebase/app";
import {
    // GoogleAuthProvider,
    getAuth,
    // signOut, 
    // signInWithPopup
} from "firebase/auth";
import {
    getFirestore,
    // query,
    // getDocs,
    // collection,
    // where,
    // addDoc,
    
} from "firebase/firestore";
// import { getAuth } from 'firebase/auth';


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
// const storage = getStorage(app);

// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async ()=>{
//     try{
//         const res = await signInWithPopup(auth, googleProvider);
//         const user = res.user;
//         const q = query(collection(db, "users"), where("uid", "==" ,user.uid));
//         const docs = await getDocs(q);
//         if(docs.docs.length === 0){
//             await addDoc(collection(db, "users"), {
//                 uid: user.uid,
//                 name: user.displayName,
//                 authProvider: "google",
//                 email: user.email,
//                 image: user.photoURL,
//             });
//         }
//     }catch (err){
//         console.error(err);
//     }
// };





// const logout = () =>{
//     signOut(auth);
// }

export {
  auth,
  db,
//   signInWithGoogle,
//   logout,
  
};








