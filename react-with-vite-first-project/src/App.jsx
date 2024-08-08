import { useState, useEffect, useRef, useReducer, useMemo } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import './index.css'

function App() {
  
  //const [num, setNum] = useState(0);
  const [count, setCount] = useState({ count: 0, theme: 'dark' });

  const handleClick = () => {
    //setNum(prevState => prevState + 1);
    setCount((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1
      }
    })
  }

  useEffect(() => {
      console.log('Renderizou')
  }, [count]);

  // useRef serve como estado no qual não renderiza o componente quando atualiza o estado, diferentemente do useState 
  // Ex de uso: referenciar elem HTML, salvar valor anterior de useState 
  const renders = useRef(0);
  useEffect(() => {
    renders.current = renders.current + 1;
  })

  // useReducer, use when envolve lógica de estados mais complexa com sub valores 
  const reducer = (state, action) => {
    switch(action.type) {
      /* case 'increment': {
        //retorna um novo state com o counter sendo atualizado
        return {
          counter: state.counter + 1,
        }
      }
      case 'decrement': {
        return {
          counter: state.counter - 1,
        }
      } */
     case 'add-task': {
      return {
        tasks: [
          ...state.tasks,
          { name: action.payload, isCompleted: false }
        ]
      }
     }
      default: return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, { tasks: [] })
  const [inputValue, setInputValue] = useState('');


  //useMemo é usado para resolver problema de performance. É possível assim usar com uma função dentro e só atualizar essa função dado um estado (supre o que não é possível com useEffect, que é declarar uma função dentro do useState para renderizar apenas com uma depedência e ter acesso a ela fora do escopo do useEffetct). Só usar para resolver problema de performance!
  const slowFunction = (num) => {
    for (let i = 0; i < 1000; i++) {console.log()}
    return num * 2;
  }
  const[number, setNumber] = useState(1);
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  

  //useCallback parecido com o useMemo, o que diferencia é que o useMemo guarda em memória o retorno da função e o useCallback guarda a função em memória 

  //useLayoutEffect é parecido com o useEffect, o que diferencia é que o useEffect é renderizado/montado depois do DOM ser montado e o useLayoutEffect ocorre antes
  
  console.log(doubleNumber)
  return (
      <>  
        <Header className="w-full h-20 bg-slate-600 flex justify-between items-center px-7" />
        <Main>
            <div className="flex flex-col justify-center items-center">
              <span>Número: {count.count}</span>
              <button onClick={handleClick} className='w-20 h-10 bg-white translate-x-[98]'>Click</button>
              <p>Renderizações: {renders.current}</p>
            </div>
        </Main>
        <Footer className='w-full h-20 bg-slate-600 flex justify-center items-center'/>
        <div className="w-full min-h-screen flex flex-col items-center p-20 bg-slate-100">
            <div className="w-full h-full flex flex-col items-center p-20 bg-slate-200">
              <p>{state.counter}</p>
              <div className="p-5 flex gap-5">
                <button onClick={() => {{dispatch({ type: 'increment' })}  setNumber(number + 1)}}>Increment</button>
                <button onClick={() => { dispatch({ type: 'decrement' }) }}>Decrement</button>
              </div>
            </div>
            <div className="w-full h-full flex justify-center items-center p-20">
                <input type="text" className='h-10 border-2 p-2' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <div className="p-5 flex gap-5">
                  <button onClick={() => { 
                    dispatch({ type: 'add-task', payload: inputValue }) 
                    setInputValue('')
                    }}>Add</button>
                </div>
            </div>
              { state.tasks.map((task, index) => (
                <p key={index}>{task.name}</p>
              ))  }
      </div>
      </>
  )
}

export default App
