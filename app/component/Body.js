// import Image from "next/image"

export default function Body() {
    return (
        <div className="px-10 pt-20 h-[30rem] bg-slate-300">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-7xl">Share<br />Your<br />Food- gorithms</h1>
                    <div className="flex gap-10 mt-6">
                        <button className=" bg-amber-700 px-4 py-2 rounded-xl">WRITE</button>
                        <button className=" bg-amber-800 px-4 py-2 rounded-xl">POST</button>
                    </div>
                </div>
                <div className="relative">
                    <img
                    className=" z-10 absolute translate-y-8 translate-x-[-10rem] w-[230px] h-[270px]"
                        src='/food1.jpg'
                        alt='food1'
                    />
                    <img
                    className=" z-10 img1 absolute translate-y-16 translate-x-[-15rem] w-[230px] h-[270px]"
                        src='/food2.jpeg'
                        alt='food2'
                    />
                    <img
                        className="img2 translate-x-[-7rem] w-[230px] h-[270px]"
                        src='/food3.jpeg'
                        alt='food3'
                    />
                </div>
            </div>

        </div>

    )
}