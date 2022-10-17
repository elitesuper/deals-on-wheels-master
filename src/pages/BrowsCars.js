import React,{useEffect} from 'react';
import BrowsCard from '../components/BrowsCard/BrowsCard';
import Navbar from '../components/Navbar/Navbar';
import Grid from '@mui/material/Grid';
import Footer from "../components/Footer/Footer";

import Container from '@mui/material/Container';
import AccordionCheck from '../components/AccordionCheck/AccordionCheck';
import { cars } from '../carsData';
import "./Page.css"

const BrowsCars = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div className='back'>
            <Container >
            <Navbar/>

            <Grid container spacing={2} marginTop="3rem" marginBottom="4rem" paddingLeft={2} paddingRight={2}>
                <Grid item  lg={3} md={12} xs={12} sm={12}>
                    <AccordionCheck/>
                </Grid>
                <Grid item lg={9} md={12} sm={12}xs={12}>
                    {
                        cars.map((car) =>(
                            <div key={car.id}>
                                <BrowsCard carData={car}/>
                            </div>
                        ))
                    }
                </Grid>
            </Grid>

            <Footer/>
            
            </Container>
            
            
        </div>
    );
};

export default BrowsCars;