import Section1 from "./Section1";
import Section2 from "./Section2";

export default function Main() {
    return (
        <main className="w-full h-fit p-5 bg-slate-400 flex flex-col gap-5">
            <Section1/>
            <Section2/>
        </main> 
    );
}