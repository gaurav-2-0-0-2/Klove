// "use client";
import {useRouter} from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { FaGoogle } from "react-icons/fa";




export default function login(){

    const router = useRouter();


    const { loginWithGoogle} = useAuth();


    const handleLogin = async ()=>{
        const loginUser = await loginWithGoogle();
        router.push('/dashboard');
    }

    const handleSubmit = ()=>{
        console.log('Submitted');
    }


    return (

        <div>
            <button onClick={handleLogin} className="fixed md:left-[45%] left-[35%] top-[50%] text-xl bg-vibrant-orange-dark px-8 py-2 rounded-3xl"><FaGoogle className="inline-block mr-2 mb-1" size={15}/>Login</button>
        </div>
    )
}