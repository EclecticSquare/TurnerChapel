import React from 'react';
import '../css/slideshow.css'
import Image1 from '../Images/openDoor.jpg'
import Image2 from '../Images/2.jpg'
import Image3 from '../Images/3.jpg'
import Image4 from '../Images/4.jpg'
import Image5 from '../Images/5.jpg'
import Image6 from '../Images/1.jpg'
//this is a component as a function
const slideshow = (props) => {
    return (
        <div className='slideContainer'>
            
            <div id="container">
                <div id="slideshow">
                </div>
            </div> 
            
            
            
            
            
            
            <div className='mg-image'>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li> 
                </ul>
                
                {/* <img className='mainImage' src={Image5}/> */}
            </div>

           














            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3 slideImage'>
                        <img  src={Image1}/>
                    </div>
                    
                    <div className='col-3 slideImage'>
                        <img  src={Image2}/>
                    </div>

                    <div className='col-3 slideImage'>
                        <img   src={Image3}/>
                    </div>

                    <div className='col-3 slideImage'>
                        <img   src={Image4}/>
                    </div>

                    {/* <img src={Image5}/>
                    <img src={Image6}/> */}
                </div>
            </div>



        </div>
    )
}

export default slideshow;