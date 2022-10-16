import { Container } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
// import { Button } from '../Button/Button';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./ExploreA.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CardExploreA from './CardExploreA';

// import explore from "../../assets/images/explore.jpg";
// import coin from "../../assets/images/coin.png";
import ea1 from "../../assets/images/ea1.png";
import ea2 from "../../assets/images/ea2.png";
import ea3 from "../../assets/images/ea3.png";
import ea4 from "../../assets/images/ea4.png";

import nft1 from "../../assets/images/nft1.png";
import ba1 from "../../assets/images/ba1.png";
import ba2 from "../../assets/images/ba2.png";
import ba3 from "../../assets/images/ba3.png";
import ba4 from "../../assets/images/ba4.png";



const ExploreA = () => {
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
                            <img className='img-one' src={ea1}/>
                            </div>
                            
                            <div><img className='img-two' src={ea2}/></div>
                            <div> <img className='img-three' src={ea3}/></div>
                            <div> <img className='img-four' src={ea4}/></div>
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
                            <CardExploreA image={ba1}/>
                        </Grid>

                        <Grid item md={3} >
                        <CardExploreA image={ba2}/>
                        </Grid>

                        <Grid item md={3} >
                        <CardExploreA image={ba3}/>
                        </Grid>

                        <Grid item md={3} >
                        <CardExploreA image={ba4}/>
                        </Grid>

                    </Grid>
                    <Button endIcon={<ArrowRightAltIcon/>} variant='contained' className='crd-btn'>View All NFTs</Button>
                   
                

                </div>


               


                
                
                
            </Container>
            
        </div>
    );
};

export default ExploreA;