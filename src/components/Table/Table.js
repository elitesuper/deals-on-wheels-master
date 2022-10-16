
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "./Table.css";
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {useNavigate} from 'react-router-dom';

const Table = () => {
    const navigate = useNavigate();
    return (
            <Container>
        <div className='table'>
                <h1>Our Top Selling Brands</h1>
                <Grid container spacing={1} >
                    <Grid item md={2} xs={6}>
                        <ul>
                            <li>Acura</li>
                            <li>Audi</li>
                            <li>BMW</li>
                            <li>Cadillac</li>
                            <li>Chevrolet</li>
                        </ul>
                        <hr/>
                    </Grid>
                    <Grid item md={2} xs={6}>
                    <ul>
                            <li>Acura</li>
                            <li>Audi</li>
                            <li>BMW</li>
                            <li>Cadillac</li>
                            <li>Chevrolet</li>
                        </ul>
                        <hr/>
                    </Grid>
                    <Grid item md={2} xs={6}>
                    <ul>
                            <li>Acura</li>
                            <li>Audi</li>
                            <li>BMW</li>
                            <li>Cadillac</li>
                            <li>Chevrolet</li>
                        </ul>
                        <hr/>
                    </Grid>
                    <Grid item md={2} xs={6}>
                    <ul>
                            <li>Acura</li>
                            <li>Audi</li>
                            <li>BMW</li>
                            <li>Cadillac</li>
                            <li>Chevrolet</li>
                        </ul>
                        <hr/>
                    </Grid>
                    <Grid item md={2} xs={6}>
                    <ul>
                            <li>Acura</li>
                            <li>Audi</li>
                            <li>BMW</li>
                            <li>Cadillac</li>
                            <li>Chevrolet</li>
                        </ul>
                        <hr/>
                    </Grid>
                    <Grid item md={2} xs={6}>
                    <ul>
                            <li>Acura</li>
                            <li>Audi</li>
                            <li>BMW</li>
                            <li>Cadillac</li>
                            <li>Chevrolet</li>
                        </ul>
                        <hr/>
                    </Grid>
                  
                    

                </Grid>
             
                
                
                
            
                <Button className='btn__table' onClick={()=>navigate("/brands")} endIcon={<ArrowRightIcon/>}>Browse All Brands</Button>
        </div>
            </Container>
    );
};

export default Table;