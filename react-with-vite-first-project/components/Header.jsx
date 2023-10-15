import reactLogo from '../src/assets/react.svg'
import Nav from './Nav';
export default function Header() {
    return (
        <header className="w-full h-20 bg-slate-600 flex justify-between items-center px-7">
            <div className="cursor-pointer">
                <img src={reactLogo} className="" alt="Vite logo" />
            </div>
            <Nav/>
        </header>
    );
}