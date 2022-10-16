import { Container,Grid } from '@mui/material';
import React from 'react';
import "./NftDetailsBanner.css";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Button from '@mui/material/Button';
import nftdet from "../../assets/images/nftdet.png";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const NftDetailsBanner = () => {
    return (
        <div>
            <Container>
                <Grid container >

                    <Grid item lg={12}>
                    <Button className='nft-det-banner__btn'  startIcon={<ArrowLeftIcon />}>View all NFTs</Button>
                    </Grid>


                    <Grid item lg={12} spacing={1} marginTop={3}>
                        <Grid container  >
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <div className='nft-det-img-container'>
                                    <img src={nftdet}/>
                                </div>
                            </Grid>




                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Grid container justifyContent="center">
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <div className='nft-bnner-text' style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                            <p className='h6_nft-det'>Formula 1 Race Cars Compilation</p>
                                            <div style={{display:"flex", alignItems:"center"}}>
                                            <i style={{marginRight:"4px"}} class="fa-solid fa-share"></i>
                                            <FavoriteBorderIcon/>
                                            </div>

                                           
                                        </div>
                                    </Grid>

                                    <Grid item lg={12}>
                                        <div className='border-span'></div>
                                    </Grid>

                                    <Grid marginTop={2} item lg={12} md={12} sm={4} xs={6}>
                                        <p className='pirce_det_nft'>Current Price</p>
                                    </Grid>

                                    <Grid item lg={12} md={12} sm={4} xs={6}>
                                        <div className='price_eth'>
                                         <i class="fa-brands fa-ethereum"></i>
                                         <h6>15.77</h6>
                                         <p>($999.99)</p>
                                        </div>
                                   
                                    </Grid>



                                    <Grid item lg={12} md={12} sm={4} xs={12}>
                                        <button className='nft-det-bnner-btn'>Buy Now</button>

                                    </Grid>



                                    <Grid item lg={12}>
                                        <div className='nft-det-des-container'>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <div className='c-address-con'>
                                                <p>Contract Address</p>
                                                <p className='specific-addr'>0x762Bc5880F...</p>
                                            </div>

                                            <div className='c-token-con'>
                                                <p>Token ID</p>
                                                <p className='specific-token'>3926</p>
                                            </div>

                                            <div className='c-stn-con'>
                                                <p>Token Standard</p>
                                                <p className='specific-stn'>ERC-721</p>
                                            </div>

                                            <div className='c-stn-con'>
                                                <p>Blockchain</p>
                                                <p className='specific-stn'>Ethereum</p>
                                            </div>

                                            <div className='c-stn-con'>
                                                <p>Creator Fee</p>
                                                <p className='specific-stn'>5%</p>
                                            </div>


                                        </div>

                                    </Grid>

                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>

            </Container>
            
        </div>
    );
};

export default NftDetailsBanner;