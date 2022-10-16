import React, { useState } from "react";
import "./CarSlider.css";
import { images } from "./data.js";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Container from '@mui/material/Container';
// import cars from "../../carsData.js";

function CarSlider({price,name}) {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="slider-wrapper">
         <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIcon style={{ fontSize: 30,color:"black" }} />
        </div>
        <div className="center">
          {/* <div className="slider-top-text">
            <h3>Assetto Fiorano - Ferrari 296 GTB</h3>
            <div>
                <p>VIN : JTEKQ5JR4M5931366  |  Stock : 36205F</p>
                <p>$202,723.00</p>
            </div>

          </div>
          <p>noori</p> */}
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          < ArrowForwardIcon style={{ fontSize: 30,color:"black" }} />
        </div>
      </div>
         </div>

         <Container>
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
         </Container>
    </div>
   
  );
}

export default CarSlider;
