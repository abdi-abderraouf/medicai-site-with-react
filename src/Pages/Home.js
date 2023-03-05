/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import headerimage from '../Assets/doctor.7c2bc96d.png'
import { Fragment } from 'react'
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return(
        
        // eslint-disable-next-line react/jsx-no-undef
        <Fragment>
        <header>
            <div className='container'>
                <div className='row'>
                <div className='col-md-6 col-lg-6'>
                <h5>We Provide All Health Care Solution</h5>
                <h2>Protect Your Health And Take Care To Of Your Health</h2>
                <button><a href='#'>Read More</a></button>
                <span> + </span>
                </div>
                <div className='col-lg-6 col-md-6'>
                <div className='header-box'>
                 <img src={headerimage} alt=""/>
                 <FontAwesomeIcon icon={faSquare} />
                </div>
                </div>
                </div>
            </div>
        </header>
        </Fragment>
        
    )
}

export default Home;
