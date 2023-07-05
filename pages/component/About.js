

export default function About() {
    return (
        <div className="my-10 mx-24 h-[20rem]">
            <h1 className=" text-vibrant-orange text-center text-4xl">ABOUT<span className=" text-fresh-green ml-2">US</span></h1>
            <div className="flex justify-between">
                <ul className=" list-disc  space-y-10 ">
                    <li className="text-vibrant-orange text-5xl"><span className=" text-2xl text-dark-gray">Lorem ipsum dolor set amet</span></li>
                    <li className="text-fresh-green text-5xl"><span className=" text-2xl text-dark-gray">Lorem ipsum dolor set amet</span></li>
                    <li className="text-vibrant-orange text-5xl"><span className=" text-2xl text-dark-gray">Lorem ipsum dolor set amet</span></li>
                </ul>

                <div class="h-full flex flex-col gap-4 items-center mt-7">
                    <div className="border-r border-gray-300 h-16"></div>
                    <img className="rounded-full w-[3rem]" src="/fork-spoon.jpg" alt="fork-spoon" />
                    <div className="border-r border-gray-300 h-16"></div>
                </div>

                <ul className="list-disc space-y-10 text-dark-gray">
                    <li className="text-fresh-green text-5xl"><span className=" text-2xl text-dark-gray">Lorem ipsum dolor set amet</span></li>
                    <li className="text-vibrant-orange text-5xl"><span className=" text-2xl text-dark-gray">Lorem ipsum dolor set amet</span></li>
                    <li className="text-fresh-green text-5xl"><span className=" text-2xl text-dark-gray">Lorem ipsum dolor set amet</span></li>
                </ul>
            </div>

        </div>
    )
}  