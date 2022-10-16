import React, { useState } from 'react';
import Container from '@mui/material/Container';
import "./Brands.css";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';


const Brands = () => {
  
    
    return (
        <div className='brands'>
            <Container>
                <h1>Browse by Brands</h1>

                <div className='search'>
                <input  className='input' placeholder='Find Brand'/>
                  <IconButton className='icon-barnd-container'><SearchIcon className='icon-barnd'/></IconButton>
                </div>

                <div className='barands__papers'>
                    <Grid container spacing={2}>
                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>Acura</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>BMW</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>Buick</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>Cadillac</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>chevrolet</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>aston martin</Paper>
                        </Grid>



                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>alfa romeo</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>audi</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>bentley</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>bugatti</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>chrysel</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>daewoo</Paper>
                        </Grid>





                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>dodge</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>fiat</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>ferrari</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>fisker</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>ford</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>GMC</Paper>
                        </Grid>






                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>genesis</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>hummer</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>honda</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>hyundai</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>infiniy</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>isuzu</Paper>
                        </Grid>






                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>jaguar</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>jeep</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>karma</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>kia</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>lamboghini</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>land rover</Paper>
                        </Grid>





                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>lexus</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>lincoln</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>lotus</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>mini</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>maserati</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>mazda</Paper>
                        </Grid>





                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>mclaren</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>mercedez benz</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>mercury</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>misubishi</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>ALI</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>nissan</Paper>
                        </Grid>






                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>porche</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>ram</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>rolls-royce</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>saab</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>saturn</Paper>
                        </Grid>

                        <Grid item md={2} sm={4} xs={6}>
                            <Paper className='barnd__paper'>scion</Paper>
                        </Grid>






                   




                    </Grid>

                </div>
                

            </Container>
            
        </div>
    );
};

export default Brands;