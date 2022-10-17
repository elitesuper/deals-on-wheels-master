import React,{useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Container from '@mui/material/Container';
import Brands from '../components/Brands/Brands';
import Footer from '../components/Footer/Footer';
import "./Page.css"

const BrandsPage = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div className='back'>
            <Container>
                <Navbar/>
                <Brands/>
                <Footer/>
            </Container>
        </div>
    );
};

export default BrandsPage;