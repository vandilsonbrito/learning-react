import Nav from '../Nav/Nav'
export default function Header() {
    return (
        <div className="w-full h-20  bg-slate-400 px-10 flex items-center justify-between">
            <img className="w-[60px] cursor-pointer" src="./src/assets/react.svg" alt="" />

            <Nav/>
        </div>
    );
}