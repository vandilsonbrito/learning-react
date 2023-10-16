import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import './index.css'

function App() {
  
  let [num, setNum] = useState(0)

  const handleClick = () => {
    setNum(num += 1);
  }

  useEffect(() => {
      console.log('Renderizou')
  }, [num]);

  return (
      <>
        <Header className="w-full h-20 bg-slate-600 flex justify-between items-center px-7" />
        <Main>
            <div className="flex flex-col justify-center items-center">
              <span>Número: {num}</span>
              <button onClick={handleClick} className='w-20 h-10 bg-white translate-x-[98]'>Click</button>
            </div>
        </Main>
        <Footer className='w-full h-20 bg-slate-600 flex justify-center items-center'/>
      </>
  )
}

export default App
