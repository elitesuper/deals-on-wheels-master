import React from 'react';
import Container from '@mui/material/Container';
import "./Pics.css";
import Card from "../Card/Card";
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Carousel from '../Carousel/Carousel'; 
import car1 from "../../assets/images/car1.png";
import car2 from "../../assets/images/car2.png";
import car3 from "../../assets/images/car3.png";
import car4 from "../../assets/images/car4.png";


const Pics = ({name}) => {
  return (
    <div className='pics'>
      <Container>
        <h1> {name}</h1>
        <Grid container justifyContent="center"  className='pa' spacing={2}>
          
          <Grid item xs={12}><Carousel/></Grid>
          
        </Grid>
        <Button variant='contained' className='btn__cars'>View All Cars</Button>
        
      </Container>
      
      
    </div>
  );
};

export default Pics;