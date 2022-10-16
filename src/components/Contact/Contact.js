import React from 'react';
import Container from '@mui/material/Container';
import "./Contact.css";
import contact from "../../assets/images/contact.png";
import view from "../../assets/images/360.png";
import logo from "../../assets/images/logo.png";

const Contact = () => {
    return (
            <Container >
                   
        <div className='contact'>
                <h2>Take a tour of our showroom in Dubai</h2>
               
                <div className='contact-img-container'>
                    <img className='hero-contact' src={contact}/>
                    <div className='center-text'>
                    <img className='view-360' src={view}/>
                    <p>Enter 360<br/> View</p>
                    </div>
                    
                    
                    <div className='contact-info'>
                        <div>
                            <img className='contact-logo' src={logo}/>
                            <p>Al QuozAl - 2 Al Safeena Street - Al Quoz 1 - Dubai - United Arab Emirates</p>

                            <p className='open'><span style={{fontWeight:"bold"}}>Mon - Thu :</span> 09:00 AM to 12:00 PM<br/>
                            <span style={{fontWeight:"bold"}}>Fri :</span>  04:00 PM to 12:00 AM<br/>
                             <span style={{fontWeight:"bold"}}>Sat - Sun :</span> 09:00 AM to 12:00 PM<br/></p>

                             <p className='phone'>info@dealsonwheels.ae <br/>+971 4 123 4567</p>

                             <div>
                             <i className="fab fa-instagram"></i>
  	 				       <i className="fab fa-facebook-f"></i>
  	 				       <i className="fab fa-twitter"></i>
  	 				       <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-youtube"></i>
                             </div>


                        </div>

                    </div>
                    

                </div>
                

            
        </div>
            </Container>
    );
};

export default Contact;