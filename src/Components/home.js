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

class Home extends Component {
    render() {
        return(
            <div className=''>
                {/* navbar */}
                <ul className="nav justify-content-end fixed-top">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
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
                                <button type="button" className="btn btn-secondary">Our Story</button>
                                <button type="button" className="btn btn-secondary">Meet the Pastor</button>
                                <button type="button" className="btn btn-secondary">Tithes and Offerings</button>
                                <button type="button" class="btn btn-secondary">Right</button>
                                <button type="button" class="btn btn-secondary">Right</button>
                                <button type="button" class="btn btn-secondary">Right</button>
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