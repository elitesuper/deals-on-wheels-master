import { Container, Grid } from '@mui/material';
import React,{useEffect} from 'react';
import Navbar from "../components/Navbar/Navbar";
import "./Blogs.css";
import BlogSection from '../components/BlogSection/BlogSection';
import bloglittle from "../assets/images/bloglittle.png";
import Footer from "../components/Footer/Footer";
import "./Page.css"

const Blogs = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div className='back'>
            <Navbar/>

            <Container  sx={{marginTop:"2rem"}}>
                <h2 className='blogs_heding' style={{marginLeft:"18px",}}>Blogs</h2>

                <Grid container spacing={2}>
                    <Grid item lg={9} md={8}>
                        <BlogSection/>
                        <div style={{marginTop:"35px"}}><BlogSection/></div>
                        <div style={{marginTop:"35px"}}><BlogSection/></div>
                    </Grid>
                    <Grid item lg={3} md={4}>
                        <div className='card-left-blog'>
                            <p className='left-head'>Recent Posts</p>
                            <Grid container  spacing={2} >
                                <Grid item lg={3} sm={12} xs={12}>
                                    <img className='img-blog-little' src={bloglittle}/>
                                </Grid>
                                <Grid item lg={9}sm={12} xs={12}>
                                    <p className='title_little_blog'>These are the 10 Most Popular Vehicles of 2022</p>
                                </Grid>

                                <Grid item lg={3} sm={12} xs={12} marginTop="-1rem">
                                    <img className='img-blog-little' src={bloglittle}/>
                                </Grid>
                                <Grid item lg={9} sm={12} xs={12} marginTop="-1rem">
                                    <p className='title_little_blog'>These are the 10 Most Popular Vehicles of 2022</p>
                                </Grid>

                                <Grid item lg={3} sm={12} xs={12} marginTop="-1rem">
                                    <img className='img-blog-little' src={bloglittle}/>
                                </Grid>
                                <Grid item lg={9} sm={12} xs={12} marginTop="-1rem">
                                    <p className='title_little_blog'>These are the 10 Most Popular Vehicles of 2022</p>
                                </Grid>

                                <Grid item lg={3} sm={12} xs={12} marginTop="-1rem">
                                    <img className='img-blog-little' src={bloglittle}/>
                                </Grid>
                                <Grid item lg={9} sm={12} xs={12} marginTop="-1rem">
                                    <p className='title_little_blog'>These are the 10 Most Popular Vehicles of 2022</p>
                                </Grid>

                                <Grid item lg={3} sm={12} xs={12} marginTop="-1rem">
                                    <img className='img-blog-little' src={bloglittle}/>
                                </Grid>
                                <Grid item lg={9} sm={12} xs={12} marginTop="-1rem">
                                    <p className='title_little_blog'>These are the 10 Most Popular Vehicles of 2022</p>
                                </Grid>


                                <Grid item lg={3} sm={12} xs={12} marginTop="-1rem">
                                    <img className='img-blog-little' src={bloglittle}/>
                                </Grid>
                                <Grid item lg={9} sm={12} xs={12} marginTop="-1rem">
                                    <p className='title_little_blog'>These are the 10 Most Popular Vehicles of 2022</p>
                                </Grid>
                            </Grid>
                        </div>

                        <div className='card-left-blog' style={{marginTop:"15px"}}>
                            <p className='left-head'>Luxury Cars</p>
                            
                               
                               
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>2022 Tesla Model Y</p>
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>Ferrari 296 GTB</p>
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>Porche 718 Cayman GT4 RS</p>
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>Lamborghini Huracan Evo RWD Spyder</p>
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>Fenyr Supersport</p>
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>Maserati  MC20 Cielo</p>
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>Aston Martin Valkyrie</p>
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>Bugatti Veyron 16.4</p>
                                

                        </div>

                        
                        <div className='card-left-blog' style={{marginTop:"15px"}}>
                            <p className='left-head'>Categories</p>
                            
                               
                               
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>Cars in Metaverse</p>
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>Augmented Virtual Reality in Automotive</p>
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>Cars Trending</p>
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>Trending Automotive Technology</p>
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>Cars in Metaverse</p>
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>Augmented Virtual Reality in Automotive</p>
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>Cars Trending</p>
                                    <p style={{marginTop:"-12px"}} className='title_little_blog'>Trending Automotive Technology</p>
                                

                        </div>

                    </Grid>

                </Grid>
                
               
                

            </Container>
            <div style={{marginTop:"7rem"}}>
                <Footer/>
                </div>
            
        </div>
    );
};

export default Blogs;