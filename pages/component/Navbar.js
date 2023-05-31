// import Link from "next/link"
// import Dashboard from "../dashboard"

export default function Navbar() {

    return (
        <div>
            <div className="flex flex-row bg-nav-bar-clr justify-between px-10 py-7">
                <h1 className="text-5xl font-extrabold italic text-klove">Klove</h1>
                <div className="flex gap-10">
                    <button className=" text-xl bg-signup-btn-clr px-8 py-2 rounded-3xl">Signup</button>
                    <button className="text-xl bg-login-btn-clr px-8 py-2 rounded-3xl">
                        {/* <Link href='../dashboard'>Login</Link> */}
                        <a href="/auth">Login</a>
                    </button>
                </div>
            </div>

            <div className="flex justify-evenly my-4">
                <h1 className="text-2xl">HOME</h1>
                <h1 className="text-2xl">ABOUT</h1>
                <h1 className="text-2xl">CONTACT</h1>
            </div>

        </div>
    )
}