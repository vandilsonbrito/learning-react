import PropTypes from 'prop-types';
export default function Section1(props) {
    return (
        <section className="w-full h-80 bg-white flex p-5 justify-around items-center"> 
            <p className="text-2xl text-center px-40 leading-relaxed">{props.children}</p>
        </section>
    );
}

Section1.propTypes = {
    children: PropTypes.string.isRequired
  }