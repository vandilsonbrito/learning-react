import PropTypes from 'prop-types';
import Section1 from "./Section1";
import Section2 from "./Section2";

export default function Main(props) {
    return (
        <main className="w-full h-fit p-5 bg-slate-400 flex flex-col gap-5">
            {props.children}
            <Section1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas laborum quaerat cumque sint, nesciunt amet nam?</Section1>
            <Section2/>
        </main> 
    );
}

Main.propTypes = {
    children: PropTypes.string.isRequired
  }