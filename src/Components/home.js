import React, { Component } from 'react';
import Logo from '../Images/turner_logo.jpg';
import '../css/home.css';
import Landing from '../Components/landing';
import Slideshow from '../Components/slideshow';
import {Link} from 'react-router-dom';





class Home extends Component {
    render() {
        return(
            <div className=''>
                {/* navbar */}
                <ul className="nav justify-content-left fixed-top">
                    
                    
                    <li className="nav-item">
                        <Link to='/home'><a className="nav-link active" href="#">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/story'><a className="nav-link active" href="#">Our Story</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/pastor'><a className="nav-link" href="#">Meet the Pastor</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/tithes'><a className="nav-link" href="#">Tithes and Offerings</a></Link>
                    </li>
   
                    <li className="nav-item">
                        <Link to='/news'><a className="nav-link" href="#">News and Events</a></Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to='/contact'><a className="nav-link" href="#">Contact Us</a></Link>
                    </li>
                </ul>
              

                {/* corne logo */}
                <div className="">
                        <Link to='/home'><img className="cornerLogo" src={Logo}/></Link>
                </div>

                {/* slideshow */}
                <div className='col-10'>
                    <Landing/>
                </div>


                
                {/* follow me */}



            </div>















                



                    



            







        )
    }
}

export default Home