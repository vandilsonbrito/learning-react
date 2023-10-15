import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import './index.css'

function App() {
  
  return (
      <>
        <Header className="w-full h-20 bg-slate-600 flex justify-between items-center px-7" />
        <Main/>
        <Footer className='w-full h-20 bg-slate-600 flex justify-center items-center'/>
      </>
  )
}

export default App
