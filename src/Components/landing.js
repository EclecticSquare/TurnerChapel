import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/landing.css'
import ImageA from '../Images/sunsetCross.jpg'
import ImageB from '../Images/insideGTC2.jpg'
import ImageC from '../Images/turner_logo.jpg'
import Logo from '../Images/turner_logo.jpg';


//this is a component as a function
const landing = (props) => {
    return (
        <div className=''>
            <div id='slideshowContainer'>
                <h1 className='landingWelcome'>All Are Welcome</h1>
                <h1 className='landingFamily'>Come Join Our Family</h1>
                <div id='landingSlideshow'>
                    <img  className='landingImage' src={ImageA}/>
                    <img className='landingImage' src={ImageB}/>
                    <img  className='landingImage' src={ImageC}/>
                </div>
            </div>
            
            
            

        </div>
    )
}

export default landing;