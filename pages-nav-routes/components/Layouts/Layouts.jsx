import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PropTypes from 'prop-types';
import { Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <div>
        <Header/>   
        <Outlet/>
        <Footer/>
    </div>
  )
}

Layouts.propTypes = {
    children: PropTypes.string.isRequired
}
