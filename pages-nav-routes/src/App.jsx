import { Route, Routes } from 'react-router-dom'
import SectionAbout from '../components/Sections/SectionAbout'
import SectionContact from '../components/Sections/SectionContact'
import SectionBlog from '../components/Sections/SectionBlog'
import Home from '../components/Home/Home'
import Layouts from '../components/Layouts/Layouts'
import Login from '../components/Login/Login'
import Products from '../components/Products/Products'


function App() {

  return (
    <div className='w-full h-screen bg-white'>
        <Routes>
          <Route path='/' element={<Layouts/>}>

              <Route index element={<Home/>} />
              <Route path='/About' element={<SectionAbout/>} />
              <Route path='/Contact' element={<SectionContact/>} />
              <Route path='/Blog' element={<SectionBlog/>} />
              <Route path='/Login' element={<Login/>} />
              <Route path='/Products/' element={<Products/>} />
              <Route path='/Products/:id' element={<Products/>} />
          </Route>
                
            
                
        </Routes>
    </div>
  )
}

export default App
