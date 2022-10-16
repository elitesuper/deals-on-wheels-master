import React,{useEffect} from 'react';
import About from '../components/About/About';
import About2 from '../components/About2/About2';
import Banner from '../components/Banner/Banner';
import Contact from '../components/Contact/Contact';
import ExploreA from '../components/ExploreA/ExploreA';
import Footer from '../components/Footer/Footer';
import Navbar from "../components/Navbar/Navbar"
import Team from '../components/Team/Team';
import "./Page.css";


const AboutUs = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div className='back'>
            <Navbar/>
            <About/>
            <Banner/>
            <ExploreA/>
            <About2/>
            <Team/>
            <Contact/>
            <Footer/>
            
            
            
            
        </div>
    );
};

export default AboutUs;