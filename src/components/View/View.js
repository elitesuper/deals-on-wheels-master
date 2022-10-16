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
                            <h2>View our Vehicles in Metaverse</h2>
                            <div className='view-mobile-flex'>
                            <p>We offer you a unique opportunity to view the our cars<br/> in a Metaverse, so you are not buying a pig in a poke.<br/> The Metaverse are available for all the vehicles.</p>
                            <Button className='view__btn' variant="contained" endIcon={<ArrowRightAltIcon />}>
                              Explore Now
                            </Button>
                        </div>
                       
                    </div>
                </div>
            </Container>
    );
};

export default View;