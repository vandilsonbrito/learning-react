import { Link } from "react-router-dom"

export default function index() {
  return (
    <div className="w-full h-20 bg-blue-500 flex justify-center items-center">
        <Link to='/'>
            <h1 className="text-3xl text-white">DevStore</h1>                
        </Link>
    </div>
  )
}
