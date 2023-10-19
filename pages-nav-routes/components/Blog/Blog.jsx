
export default function Blog(prop) {
  return (
    <div className="cursor-pointer">
      <h2 className='text-xl text-white'>{prop.children}</h2>
    </div>
  )
}
