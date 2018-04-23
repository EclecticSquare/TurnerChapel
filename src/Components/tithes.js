import React, { Component } from 'react';
import '../css/tithes.css';
import Logo from '../Images/turner_logo.jpg'
import Tithe from '../Images/tithePlate.jpeg'
import {Link} from 'react-router-dom'

class Tithes extends Component {
    render() {
        return (
        <div className=''>
            {/* navbar */}
            <ul className="nav justify-content-left fixed-top">
                <li className="nav-item">
                        <Link to='/home'><a className="church nav-link" href="#">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/story'><a className="church nav-link" href="#">Our Story</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/pastor'><a className="church nav-link" href="#">Meet the Pastor</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/story'><a className="church nav-link" href="#">Tithes and Offerings</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/calendar'><a className="church nav-link" href="#">Calendar</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/news'><a className="church nav-link" href="#">News and Events</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/ministries'><a className="church nav-link" href="#">Ministries</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact'><a className="church nav-link" href="#">Contact Us</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/home'><img className="navLogo" src={Logo}/></Link>
                    </li>
                </ul>

                {/* Tithing session */}


                
                <div className='tithes container-fluid'>
                    <div className='row'>
                        {/* Why tithe */}
                        <div className='tithe col-md'>
                            one side
                            <img src={Tithe}/>
                        </div>

                        <div className='tithe col-md'>
                            the other side
                        </div>



                        {/* Where to tithe */}
                        
                    </div>

                </div>

                

        </div>
        )
    }
}


export default Tithes;