import { Container } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
// import { Button } from '../Button/Button';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./Explore.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CardExplore from './CardExplore';

// import explore from "../../assets/images/explore.jpg";
// import coin from "../../assets/images/coin.png";
import ex1 from "../../assets/images/ex1.png";
import ex2 from "../../assets/images/ex2.png";
import ex3 from "../../assets/images/ex3.png";

import nft1 from "../../assets/images/nft1.png";



const Explore = () => {
    return (
        <div className='main-explore'>
            <Container>
                <div className='explore'>
                <Grid container spacing={5} justifyContent="center">
                    <Grid item md={6} xs={12} className="left" >
                        <h1 className='explore_heading'>Explore & Buy Our Metaverse <span className='nft'>NFTs</span></h1>
                        <p>Explore thousands of cars NFTs in Metaverse<br/> using your smartphone, tablet or computer.</p>
                        <Button variant="contained" className='btn'  endIcon={< ArrowDownwardIcon/>}>Explore Now</Button>
                       

                    </Grid>

                    <Grid item md={6} xs={12} className="mobile-hidden" >
                        <div className='main-image-container'>
                            <div>
                            <img className='img-one' src={ex1}/>
                            </div>
                            
                            <div><img className='img-two' src={ex2}/></div>
                            <div> <img className='img-three' src={ex3}/></div>
                            <div> <img className='img-four' src={ex3}/></div>
                            <div className='info'>
                                <span>25k+</span>
                                <p>Vistors bought cars & <br/>NFTs using our metaverse</p>
                            </div>
                           
                            
                        </div>

                    </Grid>

                </Grid>
                </div>

                <div className='ex-cards'>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item md={3} >
                            <CardExplore/>
                        </Grid>

                        <Grid item md={3} >
                        <CardExplore/>
                        </Grid>

                        <Grid item md={3} >
                        <CardExplore/>
                        </Grid>

                        <Grid item md={3} >
                        <CardExplore/>
                        </Grid>

                    </Grid>
                    <Button endIcon={<ArrowRightAltIcon/>} variant='contained' className='crd-btn'>View All NFTs</Button>
                   
                

                </div>
               


                
                
                
            </Container>
            
        </div>
    );
};

export default Explore;