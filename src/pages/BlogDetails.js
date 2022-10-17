import { Grid,Container } from '@mui/material';
import React,{useEffect} from 'react';
import Navbar from "../components/Navbar/Navbar";
import "./Blogs.css";
import "./BlogDetails.css";
import bloglittle from "../assets/images/bloglittle.png";
import bt1 from "../assets/images/bt1.png";
import bt2 from "../assets/images/bt2.png";
import Footer from "../components/Footer/Footer";
import "./Page.css";

const BlogDetails = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div className='back'>
            <Navbar/>

            <Container sx={{marginTop:"3rem"}}>
              <div className="row">
                <div style={{padding:"20px"}} className="col-lg-9 col-md-8">
                    <p className='bt-title'>These are the 10 Most Popular Vehicles of 2022</p>
                    <p className='bt-date'>Jun 25, 2022</p>
                    <div className='bt-img'>
                        <img src={bt1}/>
                    </div>
                    <p className='bt-text'>Every year, Car and Driver releases a list of the best-selling vehicles. While dealerships have only entered the second sales quarter of the year, Car and Driver has already provided a round-up of the cars, trucks, and SUVs that are popular sellers.</p>

                    <p style={{marginTop:"25px"}} className='bt-text'>
                        Are the most popular vehicles from 2021 holding onto their strong sales figures or have new models bumped out last year’s favorite vehicles? For consumers looking for a new car, these are the 10 most popular vehicles of 2022.
                    </p>

                    <ul className='bt-list'>
                        <li>Ford F-Series</li>
                        <li>Dodge Ram Pickup</li>
                        <li>Chevrolet Silverado</li>
                        <li>Toyota RAV4</li>
                        <li>Jeep Grand Cherokee</li>
                        <li>Toyota Highlander</li>
                        <li>Toyota Camry</li>
                        <li>Honda CR-V</li>
                        <li>GMC Sierra</li>
                        <li>Chevrolet Equinax</li>
                    </ul>

                    <div className='bt-img-2'>
                        <img src={bt2}/>
                    </div>

                    <p className='bt-under-img'>The Most Popular Vehicles are Pickup Trucks</p>
                    <p className='bt-under-img-info'>In 2021, the most popular vehicles were the Ford F-Series, the Dodge Ram Pickup and the Chevrolet Silverado. All three models continue their sales dominance.</p>
                    <p style={{marginTop:"2.5rem"}} className='bt-under-img-info'>
More than 140,000 Ford F-Series trucks have already been sold, and the year isn’t even half over. Last year, Ford sold more than 726,000 F-Series trucks. This year, Ford also has added a new F-Series model—the electric F-150 Lightning. Interest in the electric truck has been so overwhelming that Ford has halted orders.
                     </p>

                     <p className='bt-under-img'>The Year isn’t Over!</p>
                     <p className='bt-under-img-info'>While Car and Driver ranked the best-selling models of 2022, the year isn’t even half over. There are still nearly seven months left for car buyers to purchase their dream vehicle.</p>
                     <p style={{marginTop:"2.5rem"}} className='bt-under-img-info'>

It’s doubtful that any model will outsell the F-Series; if it hasn’t happened in about four decades, 2022 probably isn’t going to be the outlier year. Will the CR-V end up in the top five again? Will the Silverado overtake the Ram? Could there be a vehicle shortage that affects 2022 sales? Consumers will have to wait until the year’s end to find out what cars were the most popular in 2022 and which models sank in sales.
                     </p>
                </div>

                <div className="col-lg-3 col-md-4">
                    <div className="row blog-other-info">
                        <div className='card-left-blog col-12 '>
                            <p className='left-head'>Recent Posts</p>
                            <div className="row post-list">
                                <div className="blog-item d-flex mb-2 ">
                                    <img className='img-blog-little' src={bloglittle}/>
                                    <p className='title_little_blog blog-title'>These are the 10 Most Popular Vehicles of 2022</p>
                                </div>
                                <div className="blog-item d-flex mb-2">
                                    <img className='img-blog-little' src={bloglittle}/>
                                    <p className='title_little_blog blog-title'>These are the 10 Most Popular Vehicles of 2022</p>
                                </div>
                                <div className="blog-item d-flex mb-2">
                                    <img className='img-blog-little' src={bloglittle}/>
                                    <p className='title_little_blog blog-title'>These are the 10 Most Popular Vehicles of 2022</p>
                                </div>
                                <div className="blog-item d-flex mb-2">
                                    <img className='img-blog-little' src={bloglittle}/>
                                    <p className='title_little_blog blog-title'>These are the 10 Most Popular Vehicles of 2022</p>
                                </div>
                                <div className="blog-item d-flex mb-2">
                                    <img className='img-blog-little' src={bloglittle}/>
                                    <p className='title_little_blog blog-title'>These are the 10 Most Popular Vehicles of 2022</p>
                                </div>
                                <div className="blog-item d-flex mb-2">
                                    <img className='img-blog-little' src={bloglittle}/>
                                    <p className='title_little_blog blog-title'>These are the 10 Most Popular Vehicles of 2022</p>
                                </div>
                                <div className="blog-item d-flex mb-2">
                                    <img className='img-blog-little' src={bloglittle}/>
                                    <p className='title_little_blog blog-title'>These are the 10 Most Popular Vehicles of 2022</p>
                                </div>
                                <div className="blog-item d-flex mb-2">
                                    <img className='img-blog-little' src={bloglittle}/>
                                    <p className='title_little_blog blog-title'>These are the 10 Most Popular Vehicles of 2022</p>
                                </div>
                                <div className="blog-item d-flex mb-2">
                                    <img className='img-blog-little' src={bloglittle}/>
                                    <p className='title_little_blog blog-title'>These are the 10 Most Popular Vehicles of 2022</p>
                                </div>
                                <div className="blog-item d-flex mb-2">
                                    <img className='img-blog-little' src={bloglittle}/>
                                    <p className='title_little_blog blog-title'>These are the 10 Most Popular Vehicles of 2022</p>
                                </div>
                                <div className="blog-item d-flex mb-2">
                                    <img className='img-blog-little' src={bloglittle}/>
                                    <p className='title_little_blog blog-title'>These are the 10 Most Popular Vehicles of 2022</p>
                                </div>

                            </div>
                        </div>
                        <div className='card-left-blog col-md-12 col-sm-6' style={{marginTop:"15px"}}>
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
                        <div className='card-left-blog col-md-12 col-sm-6' style={{marginTop:"15px"}}>
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
                    </div>  

                </div>

               </div>
               <div style={{marginTop:"5rem"}}>
               <Footer/>
               </div>
               
            </Container>
           
            
        </div>
    );
};

export default BlogDetails;