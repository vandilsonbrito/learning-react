export default function Nav() {
    return (
        <nav className='w-[30%] flex justify-between text-white'>
            <a href="#home" className="mr-6 text-xl font-bold">Home</a>
            <a href="#about" className="mr-6 text-xl font-bold">About</a>
            <a href="#contact" className="text-xl font-bold">Contact</a>
        </nav>
    );
}