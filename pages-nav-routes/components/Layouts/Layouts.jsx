import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PropTypes from 'prop-types';

export default function Layouts({children}) {
  return (
    <div>
        <Header/>   
        {children}
        <Footer/>
    </div>
  )
}

Layouts.propTypes = {
    children: PropTypes.string.isRequired
}
