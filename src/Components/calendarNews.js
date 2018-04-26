import React, { Component } from 'react';
import Logo from '../Images/turner_logo.jpg';
import {Link} from 'react-router-dom';
import '../css/calendarNews.css'


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
                    <span>What's happening at G.T.C</span>
                    <ul>
                        <li><a href="#">Student Bitten by Radioactive Bear...</a></li>
                        <li><a href="#">Pluto Now Officially A Planet Again...</a></li>
                        <li><a href="#">Study Reveals: Babies Are Stupid...</a></li>
                        <li><a href="#">Elvis Presley Found Alive In Jersey...</a></li>
                        <li><a href="#">Alien Life Confirmed on Uranus...</a></li>
                        <li><a href="#">Archeologist Finds Skeleton People...</a></li>
                        <li><a href="#">Microsoft Unveils Windows 21...</a></li>
                        <li><a href="#">Developer Discovers Mobile Internet...</a></li>
                        <li><a href="#">Bluetooth: The Silent Killer?...</a></li>
                    </ul>
                </div>
                 {/* Calendar */}

            </div>
        )
    }
}

export default CalendarNews;