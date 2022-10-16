import React from 'react';
import Container from '@mui/material/Container';
import './TrendCar.css';

import car from "../../assets/images/trend.png";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const TrendCar = () => {
    return (
        <div className='main-trend'>
            <Container >
                <div className='trend'>
                    <h1>Trending Car of the Week</h1>
                    <h3>2021 Porche 911</h3>
                    <div className='trend__img__container'>
                        <img src={car}/>
                    </div>
                    <div className='trend-btns'>
                    <ButtonGroup className='btn-grp' variant="contained" aria-label="outlined primary button group">
                        <Button className='btn-trend active'>Exterior</Button>
                        <Button className='btn-trend'>Interior</Button>
                        <Button className='btn-trend'>3D View</Button>
                    </ButtonGroup>
                    <Button className='buy' variant="contained" endIcon={<ArrowRightAltIcon />}>
                        Buy Now
        
                     </Button>
                    </div>
                 
                </div>
                
              
            </Container>
            
        </div>
    );
};

export default TrendCar;