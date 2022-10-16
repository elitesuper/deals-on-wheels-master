import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";
import car1 from "../../assets/images/car1.png";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Container } from "@mui/material";
import Card from "../Card/Card"

function Carousel() {
    const [swiper, setSwiper] = useState(false);

    useEffect(()=>{
        const resizeHandler = async () => {
            if(window.innerWidth < 1024){
                setSwiper(true)
            }else{
                setSwiper(false)
            }
       window.addEventListener("resize",()=>{ if(window.innerWidth < 768){
        setSwiper(true)
    }else{
        setSwiper(false)
    }});
    console.log(swiper);
            
        }
        resizeHandler();


    },[])

    
  return (
    <>
    <Container>
    <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          1100: {
           
            slidesPerView: 4,
          },
        }}
         
        spaceBetween={20}
       
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide><Card image={car1} price={"$202,723.00"} des={"2016 Ferrari California T"}/></SwiperSlide>
        <SwiperSlide><Card image={car1} price={"$202,723.00"} des={"2016 Ferrari California T"}/></SwiperSlide>
        <SwiperSlide><Card image={car1} price={"$202,723.00"} des={"2016 Ferrari California T"}/></SwiperSlide>
        <SwiperSlide><Card image={car1} price={"$202,723.00"} des={"2016 Ferrari California T"}/></SwiperSlide>
        <SwiperSlide><Card image={car1} price={"$202,723.00"} des={"2016 Ferrari California T"}/></SwiperSlide>
        <SwiperSlide><Card image={car1} price={"$202,723.00"} des={"2016 Ferrari California T"}/></SwiperSlide>
        <SwiperSlide><Card image={car1} price={"$202,723.00"} des={"2016 Ferrari California T"}/></SwiperSlide>
        <SwiperSlide><Card image={car1} price={"$202,723.00"} des={"2016 Ferrari California T"}/></SwiperSlide>
       
      </Swiper>

   
    </Container>
      
    </>
  );
}

export default Carousel;
