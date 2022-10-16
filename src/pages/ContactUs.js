import React from 'react';
import Container from '@mui/material/Container';
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";
import ContactUsCards from '../components/ContactUsCards/ContactUsCards';
import Form from '../components/Form/Form';
import {useEffect} from 'react';
import AccordionSection from '../components/Accoidion/Accordion';
import Footer from '../components/Footer/Footer';
import "./Page.css";



const ContactUs = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div className='back'>
            <Container>
                <Navbar />

                <div style={{marginTop:"-8rem"}}>
                <Contact  />
                </div>
                <ContactUsCards/>
                <Form/>

                <AccordionSection/>
                <Footer/>




                
                
            </Container>
            
        </div>
    );
};

export default ContactUs;