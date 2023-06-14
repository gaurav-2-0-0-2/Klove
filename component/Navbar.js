import Link from "next/link";


export default function Navbar() {

    

    return (
        <div>
            <div className="flex flex-row bg-maroon-light justify-between px-10 py-7">
                <h1 className="text-5xl font-extrabold italic text-klove">Klove</h1>
                <div className="flex gap-10">
                    <button className=" text-xl bg-peach-light px-8 py-2 rounded-3xl">Signup</button>
                    <Link href='/login' className="text-xl bg-peach-red px-8 py-2 rounded-3xl">Login</Link>
                </div>


            </div>

            <div className="flex justify-evenly bg-peach-light py-4">
                <h1 className="text-2xl">HOME</h1>
                <h1 className="text-2xl">ABOUT</h1>
                <h1 className="text-2xl">CONTACT</h1>
            </div>

        </div>
    )
}