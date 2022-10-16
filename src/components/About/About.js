import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import "./About.css";

const About = () => {
    return (
            <Container>
        <div className='about'>
                <Grid container>
                    <Grid item md={8} xs={12}>
                        <p className='head'>About us</p>
                        <h1>We Offers The Metaverse Experience For Every Car</h1>
                        <p className='des'>An industry first, Deals on Wheels is the only way to explore thousands of cars in AR and 3D using your smartphone, tablet or computer. Go virtual now!</p>
                    </Grid>

                </Grid>
                
            
        </div>
            </Container>
    );
};

export default About;