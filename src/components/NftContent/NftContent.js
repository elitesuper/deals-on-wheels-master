import { Container,Grid } from '@mui/material';
import React from 'react';
import AutoComplete from '../../components/AutoComplete/AutoComplete';
import CardExplore from '../Explore/CardExplore';
import HeroSection from '../HeroSection/HeroSection';
import Footer from "../../components/Footer/Footer";
import "./NftContent.css";

const NftContent = () => {
    return (
        <div>
            <Container>
              <div className='nft-content'>
                    <h2>Our Metaverse NFTs</h2>
                    <div className='nft-auto-complete'>
                        <AutoComplete/>
                    </div>

                </div>


                <Grid container spacing={2} className="card_nft">
                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>

                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>

                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>

                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>


                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>

                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>

                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>

                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>




                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>

                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>

                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>

                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>




                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>

                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>

                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>

                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>



                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>

                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>

                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>

                    <Grid item  lg={3}>
                        <CardExplore nft={"NFT"}/>

                    </Grid>
                </Grid>

                <HeroSection title={"Want to Buy a Real"} span={"Car ?"}/>

                <div style={{marginTop:"10rem"}}>
                <Footer/>
                </div>

                </Container>
               
            
        </div>
    );
};

export default NftContent;