import { BASE_URL_API } from "../../API";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiFillStar } from 'react-icons/ai';
import { BiSolidUser, BiLoader } from 'react-icons/bi';

    
export const ProductsId = () => {
    const { id } = useParams();
    const [productId, setProductId] = useState([])
    const [load, setLoad] = useState(false)

    const getItem = async () => {
        setLoad(true)
        const response = await fetch(`${BASE_URL_API}/products/${id}`);
        const data = await response.json();
        setProductId(data)
        setLoad(false)
        console.log(data)
    } 
    useEffect(() => {
        getItem()
    }, [])
    
    return (
        <div>
            { 
                load && <div className="w-full h-full py-10 px-10 flex items-center justify-center">
                            <div className="w-[560px] h-[685px] shadow-lg rounded-2xl flex flex-col justify-center items-center">
                                <BiLoader className="text-8xl" />
                            </div>
                        </div> 
            }
                
            { productId && (
                    <>
                    
                        <div className="w-full h-full flex items-center justify-center py-10">
                            <div className="w-[350px] md:w-[700px] flex flex-col justify-between items-center shadow-lg rounded-2xl p-5 overflow-hidden">
                                <img src={productId.image} alt="" className="w-72 mix-blend-color-burn" />
                                <p className="text-lg font-semibold mt-5 text-center">{productId.title}</p>
                                <p className="max-w-[700px] mt-5 text-center">{productId.description}</p>
                                <p className="bg-blue-500 px-4 py-2 rounded-2xl text-3xl font-bold text-white mt-5">{`$${productId.price}`}</p>
                                <div className="w-full flex items-center gap-3 mt-7 md:mt-5">
                                    <div className="flex">
                                    <AiFillStar className="text-yellow-300 text-3xl" />
                                    <span className="text-xl ml-1">{productId.rating ? productId.rating.rate : null}</span>
                                    </div>
                                    <div className="flex items-center">
                                    <p className="text-xl">{productId.rating ? productId.rating.count : null}</p>
                                    <span className="text-xl ml-1">{<BiSolidUser />}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </div>
    );
}

