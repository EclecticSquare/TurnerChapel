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
                  {/* navbar */}
                  <ul className="nav nonHome justify-content-left">
                    
                    
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
              

                {/* corner logo */}
                <div className="">
                        <Link to='/home'><img className="cornerLogo" src={Logo}/></Link>
                </div>



                <div className='container-fluid'>
                    <div className='row'>  
                        <div className='col-8'> 
                            {/* Calendar */}
                            <div class="googleCalendar">
                            <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showTabs=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=gtcamechurch%40gmail.com&amp;color=%23711616&amp;ctz=America%2FNew_York" width="800" height="600" frameborder="0" scrolling="no"></iframe>                </div>
                        </div>

                        <div className='col-4'>
                        HELLO
                            {/* News and Events Feed */}
                            {/* <div className="news">
                                <img className='scrollImage' src={Image10}/>
                                <img className='scrollImage' src={Image11}/>
                                <img className='scrollImage' src={Image12}/>
                                <img className='scrollImage' src={Image13}/>
                                <img className='scrollImage' src={Image14}/>
                            </div> */}
                        </div>
                 
                    </div>
                </div>

            </div>
        )
    }
}

export default CalendarNews;