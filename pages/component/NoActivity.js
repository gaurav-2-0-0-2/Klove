
export default function NoActivity({handleClick}) {
    return (
        <div className="fixed top-[40%] left-[50%] text-center">
            <h1 className="text-light-grey text-3xl font-thin mb-10">No Activity Yet</h1>
            <button onClick={handleClick} className="bg-vibrant-orange px-10 py-2 font-bold text-2xl text-white hover:bg-vibrant-orange-dark drop-shadow-2xl">WRITE</button>
        </div>
    )
}