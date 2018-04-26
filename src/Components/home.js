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
                        <Link to='/calendar'><a className="nav-link" href="#">Calendar</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/news'><a className="nav-link" href="#">News and Events</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/ministries'><a className="nav-link" href="#">Ministries</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact'><a className="nav-link" href="#">Contact Us</a></Link>
                    </li>
                </ul>
              
                <div className='container-fluid'>
                    <div className='row'>

                        {/* slideshow */}
                        <div className='col-10'>
                            <Landing/>
                        </div>

                        {/* information buttons */}
                        <div className='col-2'>
                            <br/>
                            <br/>
                            
                            <img src={Logo}/>
                            <div className="btn-group-vertical btn-group-lg">
                                <button type="button" className="btn btn-secondary" >Mission</button>
                                <button type="button" className="btn btn-secondary">Services</button>
                                <button type="button" className="btn btn-secondary">Announcements</button>
                            </div>
                        </div>
                        
                    </div>
                </div>


                
                {/* follow me */}
            </div>















                



                    



            







        )
    }
}

export default Home