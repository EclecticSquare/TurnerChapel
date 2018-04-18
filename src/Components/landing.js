import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/landing.css'
import ImageA from '../Images/sunsetCross.jpg'
import ImageB from '../Images/insideChurch.jpg'
import ImageC from '../Images/turner_logo.jpg'

//this is a component as a function
const landing = (props) => {
    return (
        <div className=''>
            <div id='slideshowContainer'>
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