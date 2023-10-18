import { useState } from 'react'

function App() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);

  const addName = (e) => {
      setName(e.target.value)
  }

  const addEmail = (e) => {
      setEmail(e.target.value)
  }

  const prevForm = (e) => {
      e.preventDefault();
      sendForm()
  }
 
  const sendForm = () => {
      if(!name || !validateEmail(email)) {
          alert('Preencha corretamente os campos!')
      }
      else {
        alert('Dados enviados')
      }
  }

  function validateEmail(email) {
    const rule = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return rule.test(String(email).toLowerCase());
  }
  
  function showInfo() {
    if(!show) {
      setShow(true)
    }
    else {
      setShow(false)
    }
  }
 
  return (
    <>
      <main className='w-full h-screen bg-slate-200 flex flex-col justify-center items-center font-sans'>
        <form onSubmit={prevForm} className='w-80 flex flex-col gap-5 bg-slate-400 p-8 rounded-2xl'>
            <div className="flex flex-col">
              <label htmlFor='name'>Name:</label>
              <input className='w-full h-8 px-1' type="text" placeholder='Name' value={name} onChange={addName} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">E-mail:</label>
              <input className='w-full h-8 px-1' type='email' htmlFor="email" placeholder='E-mail' value={email} onChange={addEmail}></input>
            </div>
           
            <button onClick={sendForm} type='submit' className='w-full h-10 bg-black rounded-2xl font-bold text-white cursor-pointer mt-5 active:scale-95 ' id='btn-submit'>Submit</button>
            
        </form>

        <div className="w-80 h-fit rounded-2xl p-4 gap-2 mt-2 bg-white flex flex-col overflow-hidden">
            <span>Name: {show && name}</span>
            <span>E-mail: {show && email}</span>
            <button onClick={showInfo} className='w-1/2 h-8 rounded-2xl m-auto transform active:scale-95 bg-black text-white font-semibold border-[1px] border-black'>{show ? "Hide Info" : "Show Info"}</button>
        </div>
      </main>
    </>
  )
}

export default App
