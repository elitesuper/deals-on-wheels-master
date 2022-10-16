import { Button } from '@mui/material';
import React from 'react';
import "./BlogSection.css";
import blogcar1 from "../../assets/images/blogcar1.png";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {useNavigate} from "react-router-dom"


const BlogSection = () => {
    const naviagte = useNavigate();
    return (
        <div className='blod-section-container'>
            <img src={blogcar1}/>
            <p className='blog_title'>These are the 10 most popular vehicles of 2022</p>
            <p className='blog_date'>Jun 25, 2022</p>
            <p className='blog_info'>Every year, Car and Driver releases a list of the best-selling vehicles. While dealerships have only entered the second sales quarter of the year, Car and Driver has already provided a round-up of the cars, trucks, and SUVs that are popular sellers. Are the most popular vehicles from 2021 holding onto their strong sales figures or have new models bumped out last year’s favorite vehicles? For consumers looking for a new car, these are the 10 most popular vehicles of 2022. * Ford F-Series * Dodge Ram Pickup * Chevrolet Silverado * Toyota RAV4 * Jeep Grand Cherokee * Toyota Highlander * Toyota Camry * Honda CR-V * GMC ...</p>
            <Button onClick={()=>naviagte("/blogs/1")} className='blog_btn' endIcon={<ArrowRightAltIcon/>} variant='contained'>Read More</Button>
            
        </div>
    );
};

export default BlogSection;