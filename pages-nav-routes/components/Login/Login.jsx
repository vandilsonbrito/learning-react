
export default function Login() {
  return (
    <div className="w-full h-screen bg-slate-200 flex flex-col justify-center items-center">
        <form className='w-80 flex flex-col gap-5 bg-slate-400 p-8 rounded-2xl'>
            <div className="flex flex-col">
              <label htmlFor='name'>Name:</label>
              <input className='w-full h-8 px-1' type="text" placeholder='Name' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">E-mail:</label>
              <input className='w-full h-8 px-1' type='email' htmlFor="email" placeholder='E-mail'></input>
            </div>
           
            <button type='submit' className='w-full h-10 bg-black rounded-2xl font-bold text-white cursor-pointer mt-5 active:scale-95 ' id='btn-submit'>Submit</button>
            
        </form>
    </div>
  )
}
