import { Outlet } from "react-router-dom"
import Header from '../Header/';
import Footer from '../Footer';

export default function Layout() {
  return (
    <div className="w-full h-full">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
