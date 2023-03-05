import React from 'react'
import { Button } from 'react-bootstrap';
import Banner from '../Components/Banner/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMap,faGlobe, faHeart, faMobile } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'
import FormContact from './FormContact';

const Contact = () => {
    return(
        <>
           <Banner title='Contact Us' smtitle="Contact"/>
            <section className="contact us">
            <div className='container'>
            <div className='row'>
            <div className='col-lg-6 col-md-6'>
                   <FormContact/>  
            </div>
            <div className='col-lg-6 col-md-6'>
             <div className='side'>
             <div className='overlay'>
             <h3> Contact us for any informations </h3>
             <li> <FontAwesomeIcon icon={faMap}/>Location</li>
             <hr/>
             <p>58 Rue Afrique El Hamma Gabes Tunise </p>
             <li> <FontAwesomeIcon icon={faEnvelope}/>Email & Phone</li>
             <hr/>
             <p> Abdiabderraouf@gmail.com</p>
             <p> 216 75 334 464 </p>
             <li> <FontAwesomeIcon icon={faGlobe}/>Follow Us</li>
             <ul>
             <li> <FontAwesomeIcon icon={faHeart}/>Facebook</li>
             <li> <FontAwesomeIcon icon={faGlobe}/>Anestagram</li>   
             <li> <FontAwesomeIcon icon={faMobile}/>LinkedIn</li>
             </ul>
             </div>
             </div>
            </div>
            </div>
            </div>
            </section>
        </>
    )
}

export default Contact;