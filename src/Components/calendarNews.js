import React, { Component } from 'react';
import Logo from '../Images/turner_logo.jpg';
import {Link} from 'react-router-dom';
import '../css/calendarNews.css'

import Image10 from '../Images/1.jpg'
import Image11 from '../Images/2.jpg'
import Image12 from '../Images/3.jpg'
import Image13 from '../Images/4.jpg'
import Image14 from '../Images/5.jpg'

class CalendarNews extends Component {
    render(){
        return (
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
                    <li className="nav-item">
                        <Link to='/home'><img className="navLogo" src={Logo}/></Link>
                    </li>
                </ul>

               

                {/* News and Events Feed */}
                <div className="news">
                    <img className='scrollImage' src={Image10}/>
                    <img className='scrollImage' src={Image11}/>
                    <img className='scrollImage' src={Image12}/>
                    <img className='scrollImage' src={Image13}/>
                    <img className='scrollImage' src={Image14}/>
                </div>
                 
                 {/* Calendar */}
                

            </div>
        )
    }
}

export default CalendarNews;