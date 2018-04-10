import React from 'react';
import '../css/slideshow.css'
import Image1 from '../Images/openDoor.jpg'
import Image2 from '../Images/2.jpg'
import Image3 from '../Images/3.jpg'
import Image4 from '../Images/4.jpg'
import Image5 from '../Images/5.jpg'
import Image6 from '../Images/1.jpg'
import Image7 from '../Images/turner_logo.jpg'
//this is a component as a function
const slideshow = (props) => {
    return (
        <div className=''>
            <div id='slideshowContainer'>
                <div id='slideshow'>
                    <img  className='mainImage' src={Image7}/>
                    <img className='mainImage' src={Image1}/>
                    <img  className='mainImage' src={Image5}/>
                    <img  className='mainImage' src={Image3}/>
                    <img  className='mainImage' src={Image6}/>
                </div>
            </div>
            
            <div className='bottom container-fluid'>
                <div className='row'>
                    <div className='col-3 '>
                        <img  className='slideImage' src={Image1}/>
                    </div>
                    
                    <div className='col-3 '>
                        <img  className='slideImage' src={Image2}/>
                    </div>

                    <div className='col-3  '>
                        <img className='slideImage'  src={Image3}/>
                    </div>

                    <div className='col-3  '>
                        <img  className='slideImage' src={Image4}/>
                    </div>
 
                </div>
            </div>
            
            

        </div>
    )
}

export default slideshow;