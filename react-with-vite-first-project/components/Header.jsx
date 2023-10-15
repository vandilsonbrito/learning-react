import PropTypes from 'prop-types';
import reactLogo from '../src/assets/react.svg'
import Nav from './Nav';

export default function Header(props) {
    return (
        <header className={props.className}>
            <div className="cursor-pointer">
                <img src={reactLogo} className="" alt="Vite logo" />
            </div>
            <Nav/>
        </header>
    );
}

Header.propTypes = {
    className: PropTypes.string.isRequired
  }