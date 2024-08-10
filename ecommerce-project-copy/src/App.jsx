import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  { ProductsList } from './pages/productsList';
import { ProductsId } from './pages/productsId';
import Layout from '../components/Layouts/Layout';

function App() {


  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<ProductsList/>}/>
                <Route path='/ProductsId/:id' element={<ProductsId/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
