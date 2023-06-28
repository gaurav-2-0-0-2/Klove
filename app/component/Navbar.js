import Link from "next/link";
import {FaGithub} from "react-icons/fa";
import { Dancing_Script } from "@next/font/google";

const dancingScript = Dancing_Script({
    subsets:['latin'],
    variable: '--font-dancingscript'
})


export default function Navbar() {

    

    return (
        <div>
            <div className="flex flex-row bg-white justify-between px-10 py-7">
                <h1 className={`${dancingScript.variable} font-sans text-5xl font-extrabold italic text-klove`}>Klove</h1>
                <div className="flex gap-10">
                    <Link href={"https://github.com/gaurav-2-0-0-2/Klove"}><FaGithub className="mt-2 text-fresh-green hover:text-semi-bold-green transition ease-in-out delay-10 hover:scale-125" size={35}/></Link>
                    <Link href='/login' className="text-xl border-2 border-vibrant-orange px-4 pt-2 text-vibrant-orange rounded-xl hover:bg-vibrant-orange hover:text-white transition ease-in-out">Login</Link>
                </div>


            </div>

            <div className="flex justify-evenly bg-semi-bold-green">
                <h1 className="text-2xl text-white px-7 hover:bg-klove cursor-pointer transition ease-in delay-5">HOME</h1>
                <h1 className="text-2xl text-white px-7 hover:bg-klove cursor-pointer transition ease-in delay-5">ABOUT</h1>
                <h1 className="text-2xl text-white px-7 hover:bg-klove cursor-pointer transition ease-in delay-5">CONTACT</h1>
            </div>

        </div>
    )
}