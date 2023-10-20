import { Route, Routes } from 'react-router-dom'
import SectionAbout from '../components/Sections/SectionAbout'
import SectionContact from '../components/Sections/SectionContact'
import SectionBlog from '../components/Sections/SectionBlog'
import Home from '../components/Home/Home'
import Layouts from '../components/Layouts/Layouts'


function App() {

  return (
    <div className='w-full h-screen bg-white'>
        <Routes>
              <Route path='/' element={
                  <Layouts>
                      <Home/>
                  </Layouts>
              }/>
                <Route path='/About' element={
                    <Layouts>
                      <SectionAbout/>
                    </Layouts>  
                }/>
              <Route path='/Contact' element={
                    <Layouts>
                      <SectionContact/>
                    </Layouts>
              }/>
            < Route path='/Blog' element={
                    <Layouts>
                      <SectionBlog/>
                    </Layouts>
            }/>
        </Routes>
    </div>
  )
}

export default App
