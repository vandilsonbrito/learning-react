import PropTypes from 'prop-types';
export default function About() {
    return (
        <div className="cursor-pointer">
            <h2 className='text-5xl text-black'>About</h2>
        </div>
    );
}

About.PropTypes = {
    children: PropTypes.string.isRequired
}