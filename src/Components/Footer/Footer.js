/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import  footerlogo from '../../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'
import facebook from '../../Assets/facebook.png';
import linkedin from '../../Assets/linkedin.png'; 
import Instagram from '../../Assets/Anestagrame.png';
import twitter from '../../Assets/twitter.png';
const Footer = () => {
    return(
        <footer>
        <div className='container'>
        <div className='row'>
        <div className='col-md-3 col-sm-6'>
        <img src= {footerlogo} alt=""/> 
        <p>Lorem this is description about our site : site for doctor or clinic or pharmacie</p>
        <div className="footer-contact">
        <div className='footer-icon'>
        <FontAwesomeIcon icon={faPhone} />
        </div>
        <div className="footer-text">
        <h6> Contact Us </h6>
        <h6> +216 97 276 139 </h6>
        </div>
        </div>
        </div>
        <div className='col-md-3 col-sm-6'>
        <h2>Quick Links</h2>
        <ul>
        <li> <a href="#">Home</a></li>
        <li> <a href="#">About</a></li>
        <li> <a href="#">Blog</a></li>
        <li> <a href="#">Booking</a></li>
        <li> <a href="#">Faqs</a></li>
        <li> <a href="#">Our Team</a></li>
        <li> <a href="#">Services</a></li>
        </ul>
        </div>
        <div className='col-md-3 col-sm-6'>
        <h2>Our Services</h2>
        <ul>
        <li> <a href="#">Dental care</a></li>
        <li> <a href="#">Cardiaque clinic</a></li>
        <li> <a href="#">Massage Therapy</a></li>
        <li> <a href="#">Cardiology</a></li>
        <li> <a href="#">Precise Diagnostic</a></li>
        <li> <a href="#">Ambulance Services</a></li>
        </ul>
        </div>
        <div className='col-md-3 col-sm-6'>
        <h2>Subscribe</h2>
        <form>
        <input type="email"/>
        <button type='submit'> subscribe now</button>
        </form>
        <ul className='social'>
        <li> <a href='#'> <img src={facebook} alt=""/></a></li>
        <li> <a href='#'> <img src={Instagram} alt=""/></a></li>
        <li> <a href='#'> <img src={twitter} alt=""/></a></li>
        <li> <a href='#'> <img src={linkedin} alt=""/></a></li>
        </ul>
        </div>
        </div>
        </div> 
        <div className="footer-bottom" >
        <div className="container">
        <div className="row">
        <div className="col-lg-12 col-md-12">
        <span>Copyright 2023 Design & developped by Abderraouf</span>
        </div>
        </div>
        </div>
        </div>
        </footer>
    )
}

export default Footer;
