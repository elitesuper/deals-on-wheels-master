import React from 'react';
import Container from '@mui/material/Container';
import view from "../../assets/images/view.png";
import "./View.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '@mui/material/Button';

const View = () => {
    return (
            <Container>
                <div className='view-hero'>
                    <div>
                        <img src={view}/ >
                    </div>
                    <div className='view__text'>
                            <h2>View our Vehicles in <span className="meta">Metaverse</span></h2>
                            <div className='view-mobile-flex'>
                            <p>We offer you a unique opportunity to view the our cars in a Metaverse, so you are not buying a pig in a poke. The Metaverse are available for all the vehicles.</p>
                            <Button className='view__btn' variant="contained" endIcon={<ArrowRightAltIcon />}>
                              Explore Now
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='view-hero-2 d-flex justify-content-center'>
                    <div className='view__text-2'>
                        <h2>View our Vehicles in <span className="meta">Metaverse</span></h2>
                        <div className='view-mobile-flex'>
                            <p>We offer you a unique opportunity to view the our cars in a Metaverse, so you are not buying a pig in a poke. The Metaverse are available for all the vehicles.</p>
                            <div className="row justify-content-center">
                                <Button className='view__btn' variant="contained" endIcon={<ArrowRightAltIcon />}>
                                    Explore Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
    );
};

export default View;