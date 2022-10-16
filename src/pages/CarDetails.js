import React,{useEffect} from 'react';
import CarSlider from '../components/CarSlider/CarSlider';
import Navbar from '../components/Navbar/Navbar';
import CarDetailsInfo from '../components/CarDetailsInfo/CarDetailsInfo';
import Pics from '../components/Pics/Pics';
import Footer from "../components/Footer/Footer";
import {cars} from "../carsData.js";
import {useParams} from "react-router-dom";
import "./Page.css"




const CarDetails = ({props}) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const {id} =  useParams();
  const car = cars[id - 1]
  const {price , name} = car
    return (
        <div className='back'>
          <Navbar/>
          <CarSlider price={price} name={name}/>
          <CarDetailsInfo/>
          <Pics name={"Similar Vehicles"}/>
          <div style={{marginTop:"10rem"}}>
          <Footer/>
          </div>
          
          
            
        </div>
    );
};

export default CarDetails;