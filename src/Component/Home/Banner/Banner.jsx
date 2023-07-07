import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Banner() {
  return (
<>
<div>
<Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='pb-28 bg-no-repeat bg-cover bg-[url("https://img.freepik.com/premium-vector/online-shopping-digital-technology-with-icon-blue-background-ecommerce-online-store-marketing_252172-219.jpg")]' >
               <div className='flex justify-around items-center '>
                <div className='text-white mt-28 ms-11' >
                    <h1 className='fw-bold md:text-6xl text-3xl '>BUY ONE GET ONE FREE</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis amet voluptatem rerum nesciunt!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis amet voluptatem rerum nesciunt!
                    </p>
                </div>
                <div>

                </div>

               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' pb-28 bg-no-repeat bg-cover bg-[url("https://wallpaperaccess.com/full/2593042.jpg")]' >
               <div className='flex justify-around items-center '>
                <div className='text-black mt-28 ms-11' >
                    <h1 className='fw-bold md:text-6xl text-3xl '>BUY ONE GET ONE FREE</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis amet voluptatem rerum nesciunt!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis amet voluptatem rerum nesciunt!
                    </p>
                </div>
                <div>

                </div>

               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className='pb-28 bg-no-repeat bg-cover bg-[url("https://img.freepik.com/premium-vector/online-shopping-digital-technology-with-icon-blue-background-ecommerce-online-store-marketing_252172-219.jpg")]' >
               <div className='flex justify-around items-center '>
                <div className='text-white mt-28 ms-11' >
                    <h1 className='fw-bold md:text-6xl text-3xl '>BUY ONE GET ONE FREE</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis amet voluptatem rerum nesciunt!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis amet voluptatem rerum nesciunt!
                    </p>
                </div>
                <div>

                </div>

               </div>
            </div>
            </SwiperSlide>
    
        
      </Swiper>
</div>








</>
  )
}
