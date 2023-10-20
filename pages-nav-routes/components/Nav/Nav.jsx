import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();
    const login = ()=> {
        navigate('/Login');
    }

    return (
        <div className="w-[50%] flex items-center justify-around ">

            <Link to="/About" className='text-xl text-white'>About</Link>
            <Link to="/Contact" className='text-xl text-white'>Contact</Link>
            <Link to="/Blog" className='text-xl text-white'>Blog</Link>
            <button className="text-xl text-white" onClick={login}>Login</button>
        </div>
    );
}