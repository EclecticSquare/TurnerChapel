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

class Home extends Component {
    render() {
        return(
            <div className=''>
                {/* navbar */}

              
                <div className='container-fluid'>
                    <div className='row'>

                        {/* slideshow */}
                        <div className='col-11'>
                            <Landing/>
                        </div>

                        {/* information buttons */}
                        <div className='col-1'>

                        </div>
                        
                    </div>
                </div>



                {/* information buttons */}
                {/* follow me */}
            </div>















                



                    



            







        )
    }
}

export default Home