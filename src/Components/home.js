import React, { Component } from 'react';
import MdIconPack from 'react-icons/lib/md'
import {Link} from 'react-router-dom';
import {MdHome, MdLocationCity, MdPerson, MdFlare, MdPhoneInTalk} from 'react-icons/lib/md';
import FaIconPack from 'react-icons/lib/fa'
import FaCalendar from 'react-icons/lib/fa/calendar'
import FaGift from 'react-icons/lib/fa/gift'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaFacebook from 'react-icons/lib/fa/facebook'
import Logo from '../Images/turner_logo.jpg'
import '../css/home.css';
import Landing from '../Components/landing'
// import Menu from '../Components/menu'
import Slideshow from '../Components/slideshow'
import ImageA from '../Images/turner_logo.jpg'



{/* <Link to='/home' className='linkStyle'>Home</Link> */}


class Home extends Component {
    render() {
        return(
            <div className=''>
                {/* navbar */}
                <ul className="nav justify-content-end fixed-top">
                    <li className="nav-item">
                        <Link to='/home'><a className="nav-link active" href="#">Our Story</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/pastor'><a className="nav-link" href="#">Meet the Pastor</a></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tithes and Offerings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Calendar</a>
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
                            
                            <img src={ImageA}/>
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