import {auth, signInWithGoogle, logout} from "../firebase.config"

export default function login(){



    const handleLogin = async ()=>{
        // console.log("clicked");
        const userLogin = await signInWithGoogle();
        
    }



    return (
        <div>
            <button onClick={handleLogin} className="login-btn">Login with Google</button>
        </div>
    )
}