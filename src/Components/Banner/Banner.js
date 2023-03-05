import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = (props) => {
    return(
        <section>
            <div className='banner'>
            <div className='container'>
            <div className='row'>
            <div className='col-lg-12 col-md-12'>
            <h2>{props.title}</h2>
            <li>
                <Link to = '/Home'> 
                <FontAwesomeIcon icon={faHome}    />  home        

                </Link>
                /{props.smtitle}
            </li> 
            </div>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Banner;