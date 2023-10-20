import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-200">
        <h3 className="text-7xl text-white">Home</h3>
        <Link to='/Products/0' className="relative -top-80 text-2xl text-blue-700 hover:text-blue-600">Products</Link>
    </div>
  )
}
