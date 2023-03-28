import { data } from "../projectsData";
import { CiDark } from "react-icons/ci";
import { FaBeer, FaEnvelope } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import about from '../assets/about.png'
import face from '../assets/face.png'
import landing from '../assets/landing.png'
import pos from '../assets/pos.png'
import React, { CSSProperties, useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
// import 'swiper/css/lazy';
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const Portfolio = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index:any, className:any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
  <div className="h-screen w-screen bg-white flex ml-20 mt-8">
    {/* <div className="w-1/4 h-screen flex flex-col">
      <h1 className=' text-2xl flex-1 justify-center '>Web Projects</h1>
      <div className="flex flex-wrap text-5xl justify-center h-full  bg-gray-400	">
        <SiFiverr className="m-2 flex-1 bg-red-300" />

        <FaEnvelope className="m-2 bg-slate-600 flex-1" />
        <FaGithubSquare className="m-2 bg-slate-600 flex-1" />
      </div>
    </div> */}
   

    <div className="w-screen  h-screen container  flex mx-auto    p-4 border-4">
    
      
        {/* // data.map((item) =>( */}
          <Swiper
          style={{
            '--swiper-navigation-color': '#2D2727',
            '--swiper-pagination-color': '#A2D2727',
          }as CSSProperties}
         
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[ Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide> <img src={about} alt="picture" loading="lazy"/></SwiperSlide>
          <SwiperSlide> <img src={face} alt="picture" loading="lazy"/></SwiperSlide>
          <SwiperSlide> <img src={landing} alt="picture" loading="lazy"/></SwiperSlide>
          <SwiperSlide> <img src={pos} alt="picture" loading="lazy"/></SwiperSlide>
         
        </Swiper>
          {/* // <div key={item.id} className={`snap-start  w-screen shrink-0 snap-always h-screen flex  justify-center items-end bg-center bg-contain bg-no-repeat bg-[url('./assets/${item.img}')]`}>
          //   <div className="flex-row justify-end flex mb-40">
          //     <button className='bg-red-700	 '>hit me </button>

          //   </div>

          // </div> */}

        {/*  )) */}
      

      <svg className="animate-bounce w-6 h-6 ...">

      </svg>
    </div>
    
   
     
  </div>);
}

export default Portfolio;