import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useState, useEffect } from 'react';
import 'swiper/css'; // Importe o CSS principal do Swiper
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import './App.css'

// Importe os módulos desejados
SwiperCore.use([Navigation, Pagination, Scrollbar]);


export default function App() {
  const [data, setData] = useState({ photos: [] });
  const [load, setLoad] = useState(false);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    getApi();
  });

  const getApi = async () => {
    try {
      setLoad(true);
      const response = await fetch(
        'https://api.pexels.com/v1/search?query=goldenretriever&orientation=landscape&size=medium&per_page=20',
        {
          method: 'GET',
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const json = await response.json();
      setLoad(false);
      setData(json);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-800'>
        <Swiper className='swiper-container w-[650px] h-[420px] flex justify-center items-center bg-slate-100'
          navigation={true}
          pagination={true}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          >
          
            {data.photos.map((photo, index) => (
                <SwiperSlide className="w-full h-full overflow-hidden" key={index}>{
                  <img 
                  className='w-full h-full bg-center' 
                  key={photo.id} 
                  src={photo.src.medium} 
                  alt={photo.photographer} 
                  />
                }
                {/* <div className="swiper-button-next "></div>
                <div className="swiper-button-prev"></div> */}
                </SwiperSlide>
              ))}

        </Swiper>
        </div>   
  );
}
