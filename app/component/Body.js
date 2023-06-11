// import Image from "next/image"

export default function Body() {
    return (
        <div className="px-10 pt-20 h-[33rem] bg-peach-lighter">
            <div className="flex justify-between">
                <div>
                    <h1 className="hero-text1 text-7xl italic text-klove">SHARE</h1>
                    <h1 className="hero-text2 text-7xl italic text-klove">YOUR</h1>
                    <h1 className="hero-text3 text-7xl italic text-klove">FOOD-GORITHMS</h1>
                    <div className="flex gap-10 mt-16">
                        <button className=" bg-peach-dark text-xl font-extrabold px-8 py-2 rounded-md">WRITE</button>
                        <button className=" bg-maroon-dark text-xl font-extrabold px-8 py-2 rounded-md">POST</button>
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