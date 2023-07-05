import { Input } from "antd";
const { TextArea } = Input;

export default function ({handleSubmit, handleRef}) {
    return (
        <form onSubmit={handleSubmit} ref={handleRef}>
            <Input className="w-full py-4 px-2 text-2xl" type="text" placeholder="Add a title" />
            <TextArea className="text-md mt-2" rows={25} placeholder="Write your Recipe..." />
            <button type="submit" className="mt-2 bg-semi-bold-green px-10 py-2 font-bold text-2xl text-white hover:bg-fresh-green drop-shadow-2xl">POST</button>
        </form>
    )
}