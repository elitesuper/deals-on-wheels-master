import { Container } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./HeroSection.css";

import hero from "../../assets/images/hero.jpg";
import coin from "../../assets/images/coin.png";

const HeroSection = ({title,span}) => {
    return (
        <div className='main-hero'>
            <Container>
                <div className='hero'>
                <Grid container spacing={5}>
                    <Grid item md={6} xs={12}>
                        <div className="hero-info">
                            <h1>{title}  <span className='meta'>{span}</span></h1>
                            <p>explore thousands of cars in AR and 3D using your smartphone, tablet or computer.</p>
                        </div>
                        <div className="d-flex explorebtnlayout">
                            <Button variant="contained" className='btn'  endIcon={< ArrowRightAltIcon/>}>Explore Now</Button>
                        </div>
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <div className='img-parent'>
                            <img src={hero}/>
                            <img className='coin' src={coin}/>
                        </div>

                    </Grid>

                </Grid>
                </div>
                
                
            </Container>
            
        </div>
    );
};

export default HeroSection;