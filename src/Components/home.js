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
import Door from '../Images/openDoor.jpg';
import Slideshow from '../Components/slideshow'

class Home extends Component {
    render() {
        return(
            <div className=''>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-2">
                                <img className='logo' alt='church logo'src={Logo} />
                                <h5 className='mission'>Greater Turner Chapel African Methodist Episcopal Church seeks to be a people that abide in God's Love for ALL people. Empowering and Encouraging one another - Exalting God.</h5>
                                <h4 className='address'>4650 Cascade Road, Atlanta, Georgia 30331</h4>
                                <div className='hours'>
                                    <h5>SUNDAY MORNING WORSHIP SERVICES</h5>
                                        <h6>8am and 11am</h6>
                                    <h5>WEDNESDAY BIBLE STUDY</h5>
                                        <h6>12:30pm and 7:00pm</h6>
                                </div>
                                
                                 {/* navbar */}
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <span className='houseIcon'><MdHome/></span><Link to='/home' className="nav-link active">HOME</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/church' className="nav-link"><span className='churchIcon'><MdLocationCity/></span>OUR CHURCH</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/pastor' className="nav-link"><a className="nav-link" href="#"><span className='pastorIcon'><MdPerson/></span>OUR PASTOR</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><span className='calendarIcon'><FaCalendar/></span>NEWS AND EVENTS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><span className='giftIcon'><FaGift/></span>TITHES AND OFFERINGS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><span className='ministryIcon'><MdFlare/></span>MINISTRIES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><span className='contactIcon'><MdPhoneInTalk/></span>CONTACT US</a>
                                    </li>
                                </ul>

                                <div className='follow'>
                                    <h1 className='followText'>Follow Us</h1>
                                    <div className='followImages'> <span><FaTwitter/></span>  <span><FaFacebook/></span>   </div>
                                </div>

                            </div>
                            




                            <div className="col-10">
                                <Slideshow/>
                                <h1 className="welcome">Welcome</h1>
                                
                                {/* <img className='door' alt='open door'src={Door} /> */}
                                
                                {/* <h1 className='mission'>Greater Turner Chapel African Methodist Episcopal Church seeks to be a people that abide in God's Love for ALL people. Empowering and Encouraging one another - Exalting God.</h1> */}
                                {/* <div className='follow'>
                                    <h1 className='followText'>Follow Us</h1>
                                    <div className='followImages'> <span><FaTwitter/></span>  <span><FaFacebook/></span>   </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    



            </div>







        )
    }
}

export default Home