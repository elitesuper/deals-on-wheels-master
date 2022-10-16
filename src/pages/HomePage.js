import React,{useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import Table from '../components/Table/Table';
import TrendCar from '../components/TrendCar/TrendCar';
import Pics from '../components/Pics/Pics';
import View from '../components/View/View';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Explore from '../components/Explore/Explore';
import "./Page.css";


const HomePage = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div className='back' >
              <Navbar/>
              <HeroSection title={"Buy Luxury Cars in"} span={"Metaverse"}/>
              <Table/>
              <TrendCar/>
              <div style={{marginBottom:"9rem"}}>
              <Pics name={"Our Top Piks"}/>
              </div>
              <View/>
              <Explore/>
              <Contact/>
              <Footer/> 
        </div>
    );
};

export default HomePage;