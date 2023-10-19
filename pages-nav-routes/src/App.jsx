import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import SectionAbout from '../components/Sections/SectionAbout'
import SectionContact from '../components/Sections/SectionContact'
import SectionBlog from '../components/Sections/SectionBlog'
/* import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import Blog from '../components/Blog/Blog' */


function App() {

  return (
    <div className='w-full h-screen bg-white'>
        <Header/>
        <Routes>
            <Route path='/About' element={<SectionAbout/>}/>
            <Route path='/Contact' element={<SectionContact/>}/>
            <Route path='/Blog' element={<SectionBlog/>}/>
        </Routes>
    </div>
  )
}

export default App
