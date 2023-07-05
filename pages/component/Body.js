// import Image from "next/image"
import { Nunito } from 'next/font/google';

const nunito = Nunito({ 
    subsets: ['latin'], 
    weight: ['400', '700'],
    variable: '--font-nunito'
});




export default function Body() {
    return (
        <div className={`${nunito.variable} font-sans2 px-10 pt-20 h-[33rem] bg-white`}>
            <div className="flex">
                <div>
                    <h1 className="hero-text1 text-7xl text-vibrant-orange">SHARE YOUR</h1>
                    <h1 className="hero-text3 text-7xl text-fresh-green">FOOD-GORITHMS</h1>
                    <p className="w-[45%] pr-3 mt-6 text-dark-gray font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dignissimos neque sequi veniam earum error laudantium odit vel totam doloremque necessitatibus saepe dolorem voluptatem cupiditate aliquid laborum optio, debitis voluptate!</p>
                    <div className="flex gap-10 mt-16">
                        <button className="hover:shadow-xl hover:shadow-fresh-green hover:scale-[1.1] transition ease-in-out delay-5 text-white bg-fresh-green text-xl font-extrabold px-8 py-2 rounded-md">WRITE</button>
                        <button className="hover:shadow-xl hover:shadow-vibrant-orange-dark hover:scale-[1.1] transition ease-in-out delay-5 text-white bg-vibrant-orange text-xl font-extrabold px-8 py-2 rounded-md">SIGNUP</button>
                    </div>
                </div>
                <div className="relative">
                    {/* The middle image */}
                    <img
                        className=" z-10 absolute translate-y-8 translate-x-[-10rem] w-[380px] h-[350px]"
                        src='/food1.jpg'
                        alt='food1'
                    />
                    {/* The outermost image */}
                    <img
                        className=" z-10 img1 absolute translate-y-16 translate-x-[-15rem] w-[380px] h-[350px]"
                        src='/food2.jpeg'
                        alt='food2'
                    />
                    <img
                        className="img2 translate-x-[-7rem] w-[380px] h-[350px]"
                        src='/food3.jpeg'
                        alt='food3'
                    />
                </div>
            </div>

        </div>

    )
}