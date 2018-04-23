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
                            <img  id='tithePlate' src={Tithe}/>
                        </div>

                        <div className='tithe col-md'>
                            <h2 className='titheTitle'>Tithes and Offerings</h2>
                            <h5 className='tithePara'>These two words are often spoken in the same breath...but what's the difference between them? “Tithe” literally means "tenth" or 10 percent. A tithe is the first 10% of your income. An offering is anything you give in addition to 10%. The Bible says in Deuteronomy 14:23 (Living Bible):

 "The purpose of tithing is to teach you always to put God first in your lives..."

<br/>Tithing is a reminder that God is the supplier of everything we have. It is also God’s personal invitation to experience an outpouring of his blessing in each of our lives. In Malachi 3:10, God essentially says:

“Go ahead. I dare you. See if you can out-give me!”

<br/>And in 2 Corinthians 8:7, we're encouraged to EXCEL in the grace of giving because God influences the world through his people. He GIVES TO YOU so he can GIVE THROUGH YOU. As we faithfully give, the world is changed for the glory of God: the LIFE Jesus offers is preached, people are fed, brokeness is healed, churches are built and each of us, in turn, are blessed by God so that we can give again.

<br/>SO, is God wise? Do we trust him? If God is wise, then WE are wise to follow what he says about financial stewardship. If we trust him, then we must trust him with all aspects of our lives - including finances. So go ahead - accept God’s invitation to put him to the test. Start tithing faithfully and watch what he does in and through your life. Thanks to Saddleback Church for providing some of the above text.</h5>
                        </div>



                        {/* Where to tithe */}
                        
                    </div>

                </div>

                

        </div>
        )
    }
}


export default Tithes;