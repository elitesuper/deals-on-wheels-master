import { Container, Grid } from '@mui/material';
import React,{useEffect} from 'react';
import Navbar from "../components/Navbar/Navbar";
import NftDetailsBanner from '../components/NftDetailsBanner/NftDetailsBanner';
import CardExplore from '../components/Explore/CardExplore';
import "./NftDetails.css";
import mob from "../assets/images/mob.png";
import Footer from "../components/Footer/Footer";
import "./Page.css"

const NftDetails = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div className='back'>
            <Navbar/>
            <div style={{marginTop:"20px"}}> <NftDetailsBanner/></div>

           
            <div style={{marginTop:"60px",marginBottom:"10rem"}}>
                <Container>
                    <h2 className='realted_nft_heading' >Related NFTs</h2>
                    <Grid justifyContent="center" container spacing={1}>
                        <Grid item lg={3}>
                            <CardExplore/>
                        </Grid>
                        <Grid item lg={3}>
                            <CardExplore/>
                        </Grid>
                        <Grid item lg={3}>
                            <CardExplore/>
                        </Grid>
                        <Grid item lg={3}>
                            <CardExplore/>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <div style={{margingTop:"60px"}}>
                <Container>
                    <Grid container spacing={1} justifyContent="center" alignItems="center" sx={{margingTop:"2rem"}}>
                        <Grid  item lg={4} >
                            <div className='mob-img-container'>
                                <img src={mob}/>
                            </div>
                        </Grid>
                        <Grid item lg={8}>
                            <p className='one-step'>One step to your dream life </p>
                        </Grid>
                    </Grid>
                </Container>
            </div>



      <div style={{marginTop:"5rem"}}>
      <Footer/>
      </div>

            
            
        </div>
    );
};

export default NftDetails;