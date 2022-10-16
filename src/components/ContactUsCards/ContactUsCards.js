import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import gcard from "../../assets/images/gcard.png";
import "./ContactUsCards.css";
import Rating from '@mui/material/Rating';
import face from "../../assets/images/face.png";
import Button from '@mui/material/Button';

const ContactUsCards = () => {
    return (
        <div className='contact-us'>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <div className='contact-us__card'>
                            <div className='left-card'>
                                <div className='left-content'>
                                    <img src={gcard}/>
                                    <div style={{display:"flex",marginLeft:"-20px",alignItems:"center"}}>
                                    <span style={{color:"#DE9E04",marginRight:"5px"}}>4.4</span> <Rating className='rating' name="half-rating-read" defaultValue={4.4} precision={0.5} readOnly />
                                    </div>
                                   

                                </div>

                            </div>
                            <div className='right-card'>
                                <div className='right-content'>
                                <p style={{marginTop:"28px"}}>"Nice dealership. Good service advisors and courteous staff. Especially their courtesy shuttle drivers: Brian, Rick and Clyde are all very good. Sometimes they go out of their way to accommodate customers schedules." <span style={{fontWeight:"bold"}}>- Fartab</span></p>
                                <Button className='leave-btn' sx={{marginTop:"-5px",backgroundColor:"#D95050",borderRadius:"5px"}} variant='contained'>Leave a Review</Button>
                                </div>
                              

                            </div>

                            

                        </div>

                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <div className='contact-us__card'>
                            <div className='left-card'>
                                <div className='left-content'>
                                    <img src={face}/>
                                    <div style={{display:"flex",marginLeft:"-20px",alignItems:"center"}}>
                                    <span style={{color:"#DE9E04",marginRight:"5px"}}>4.4</span> <Rating className='rating' name="half-rating-read" defaultValue={4.4} precision={0.5} readOnly />
                                    </div>
                                   

                                </div>

                            </div>
                            <div className='right-card'>
                                <div className='right-content'>
                                <p>"We bought all of our company cars from them. Great place and great energy in Pickering Toyota. 100% recommended!" <span style={{fontWeight:"bold"}}>- Millssquare Pemberton</span></p>
                                <Button className='leave-btn' sx={{marginTop:"1rem",backgroundColor:"#D95050",borderRadius:"5px"}} variant='contained'>Leave a Review</Button>

                                </div>
                               

                            </div>

                            

                        </div>

                    </Grid>
                   
                </Grid>
            </Container>
            
        </div>
    );
};

export default ContactUsCards;