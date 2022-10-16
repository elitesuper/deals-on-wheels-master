import React from 'react';
import"./Form.css";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Form = () => {
    return (
        <div className='form'>
            <Container>
                <h1>We’ll Love to hear from you...</h1>

                <div className='form__container'>
                    <form>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <p><label className="label">First Name</label></p>
                                <input className='input'/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <p><label className="label">Last Name</label></p>
                                <input className='input'/>
                            </Grid>

                            <Grid item xs={12} md={6}>
                            <p><label className="label">Phone Number</label></p>
                                <input className='input'/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <p><label className="label">Email Address</label></p>
                                <input className='input'/>
                            </Grid>

                            <Grid item xs={12} md={12}>
                            <p><label className="label">Message</label></p>
                            <textarea className='textarea' cols={3} rows={4}/>

                            </Grid>

                            
                            <Grid item xs={12} md={12} >
                                <Button variant='contained' className='button' endIcon={<SendIcon/>}>send</Button>
                           

                            </Grid>

                        </Grid>

                    </form>
                </div>

            </Container>
            
        </div>
    );
};

export default Form;