import React, { useState } from "react";
import "./CarSlider.css";
import { images } from "./data.js";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Container from '@mui/material/Container';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CarSlider({price,name}) {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="slider-wrapper mb-5">
      <div className="slider_mobile_text">
        <h3>{name}</h3>
        <div className="slider__text__flex">
          <p className="vin-sto">VIN : JTEKQ5JR4M5931366  |  Stock : 36205F</p>
          <p className="slide__price">{price}</p>
        </div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img className="slide_image" src={`${images[currImg].img}`} /></SwiperSlide>
        <SwiperSlide><img className="slide_image" src={`${images[currImg].img}`} /></SwiperSlide>
        <SwiperSlide><img className="slide_image" src={`${images[currImg].img}`} /></SwiperSlide>
        <SwiperSlide><img className="slide_image" src={`${images[currImg].img}`} /></SwiperSlide>
      </Swiper>
      <div className="slider__text">
        <h3>{name}</h3>
        <div className="slider__text__flex">
          <p className="vin-sto">VIN : JTEKQ5JR4M5931366  |  Stock : 36205F</p>
          <p className="slide__price">{price}</p>
        </div>
      </div>

      <div className="slider__btns">
        <button>View in Metaverse</button>
        <button>360 View</button>
      </div>
    </div>
   
  );
}

export default CarSlider;
