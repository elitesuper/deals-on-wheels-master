import React from 'react';
import "./Footer.css";

import logo from "../../assets/images/logo.png";
import google from "../../assets/images/googleplay.png"

import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

const Footer = () => {
    return (
        <>
        <Container>
			<footer>
				<div className='footer-container'>
					<Grid container  spacing={1}  rowSpacing={6}>
						<Grid  item lg={3} md={3} sm={6} xs={12}>
							<img className='footer-logo' src={logo}/>
							<p><span style={{fontWeight:"bold"}}>Mon - Thu :</span> 09:00 AM to 12:00 PM</p>
							<p className='footer-time'><span style={{fontWeight:"bold"}}>Fri :</span> 04:00 PM to 12:00 AM</p>
							<p className='footer-time'><span style={{fontWeight:"bold"}}>Sat - Sun :</span> 09:00 AM to 12:00 PM</p>
						</Grid>
						<Grid item lg={3} md={3} sm={6}  xs={12}>
							<p className='footer-heading'>NAVIGATION</p>
							<p className='footer-title'>Home</p>
							<p className='footer-title'>About us</p>
							<p className='footer-title'>Blogs</p>
							<p className='footer-title'>View in Metaverse</p>
						</Grid>
						<Grid item lg={3} md={3} sm={6}  xs={12}>
						<p className='footer-heading'>USEFULL LINKS</p>
							<p className='footer-title'>Browse Cars</p>
							<p className='footer-title'>Conatct Us</p>
							<p className='footer-title'>Terms & Conditions</p>
							<p className='footer-title'>Privacy Policy</p>
						</Grid>
						<Grid item lg={3} md={3} sm={6}  xs={12}>
						<p className='footer-heading'>Contact Us</p>
							<p className='footer-title'>Al QuozAl - 2 Al Safeena Street - Al Quoz 1 - Dubai - United Arab Emirates</p>
							<p className='footer-title'>info@dealsonwheels.ae <br/>+971 4 123 4567</p>
							<div style={{marginTop:"-10px"}}>
							<i className="fab fa-instagram"></i>
							<i className="fab fa-facebook-f"></i>
							<i className="fab fa-twitter"></i>
							<i className="fab fa-linkedin-in"></i>
							<i className="fab fa-youtube"></i>
							</div>

						</Grid>

					</Grid>

				</div>
			</footer>

		 
            <div style={{textAlign:"center",padding:"15px"}}>All Rights Reserved © <span className='bold'>Deals on Wheels.</span> Powered by <span className='bold'>Autoaid</span>.</div>
  </Container>

            
            
        </>
    );
};

export default Footer;
    //      <footer className="footer">
  	//  <div className="container">
  	//  	<div className="row">
  	//  		<div className="footer-col">
  	//  			<img src={logo} className="logo" alt="logo"/>
  	//  			<ul style={{marginTop:"15px"}}>
  	//  				<li><a className='left-info-footer'><span style={{fontWeight:"bold"}}>Mon - Thu : </span>09:00 AM to 12:00 PM</a></li>
	// 				   <li style={{marginTop:"-10px"}}><a className='left-info-footer'><span style={{fontWeight:"bold"}}>Fri : </span>04:00 AM to 12:00 PM</a></li>
	// 				   <li style={{marginTop:"-10px"}}><a className='left-info-footer'><span style={{fontWeight:"bold"}}>Sat - Sun : </span>09:00 AM to 12:00 PM</a></li>
  	//  				<li><img className='google' src={google} /></li>
  	//  				{/* <li><a href="#">privacy policy</a></li>
  	//  				<li><a href="#">affiliate program</a></li> */}
  	//  			</ul>
  	//  		</div>
  	//  		<div className="footer-col">
  	//  			<h4>NAVIGATION</h4>
  	//  			<ul>
  	//  				<li><a href="#">Home</a></li>
  	//  				<li><a href="#">About us</a></li>
  	//  				<li><a href="#">Blogs</a></li>
  	//  				<li><a href="#">View in metaverse</a></li>
  	 			
  	//  			</ul>
  	//  		</div>
  	//  		<div className="footer-col">
  	//  			<h4>USEFULL LINKS</h4>
  	//  			<ul>
  	//  				<li><a href="#">Brows Cars</a></li>
  	//  				<li><a href="#">Contact Us</a></li>
  	//  				<li><a href="#">Terms & Conditions</a></li>
  	//  				<li><a href="#">Privacy policy</a></li>
  	//  			</ul>
  	//  		</div>
  	//  		<div className="footer-col">
  	//  			<h4>CONTACT US</h4>
    //                <ul>
  	//  				<li><a href="#">Al QuozAl - 2 Al Safeena Street - Al Quoz 1 - Dubai - United Arab Emirates</a></li>
  	//  				<li><a href="#">info@dealsonwheels.ae<br/> +971 4 123 4567</a></li>
  	 				
  	//  			</ul>
  	//  			<div className="social-links">
  	//  				<a href="#"><i className="fab fa-instagram"></i></a>
  	//  				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	//  				<a href="#"><i className="fab fa-twitter"></i></a>
  	//  				<a href="#"><i className="fab fa-linkedin-in"></i></a>
    //                 <a href="#"><i className="fab fa-youtube"></i></a>
  	//  			</div>
  	//  		</div>
  	//  	</div>
  	//  </div>
    //      </footer>