import { BASE_URL_API } from '../../API';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiLoader } from 'react-icons/bi';

export const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false)

    const listDataProducts = async () => {
        setLoad(true)
        const res = await fetch(`${BASE_URL_API}/products`);
        const data = await res.json();
        setProducts(data);
        setLoad(false)
        console.log(data);
    }

    function loadItemsSkeleton() {
        const skeletonItems = [];
      
        for (let i = 0; i < 12; i++) {
          skeletonItems.push(
            <div key={i} className="w-64 h-[320px] mt-6 mx-5 p-5 shadow-lg rounded-xl flex flex-col justify-center items-center">
              <BiLoader className="text-8xl" />
            </div>
          );
        }
      
        return skeletonItems;
      }
      
    
    useEffect(() => {
        listDataProducts()
    }, [])

    return (
        <div className='w-full h-full flex justify-center items-center flex-wrap my-10 px-10'>
            { load ? (
                <>
                   {loadItemsSkeleton()} 
                </>
                
                ) : (

                    products.map((item, index) => {
                    return (
                        <div key={index} className='w-[310px] h-[360px] lg:w-64 lg:h-[320px]  flex flex-col items-center bg-white mt-6 mx-5 p-5 rounded-xl shadow-xl'>
                            <div className="w-full h-full flex flex-col justify-between items-center">
                                <Link to={`./ProductsId/${item.id}`} className='w-full h-full flex flex-col justify-between items-center'>

                                    <img src={item.image} alt="" className='w-[95%] aspect-[3/2] object-contain hover:scale-[1.1] transition ease-in-out '/>
                                    <p className='text-center text-sm custom-text'>{item.title}</p>
                                    <div className='w-full border-[1px] bg-slate-300'></div>
                                    <p className='font-semibold text-lg'>{`$${item.price}`}</p>
                                    <button className='w-full h-fit p-2 bg-green-500 rounded-full font-semibold text-white hover:bg-green-600'>Mais informações</button>

                                </Link>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
}