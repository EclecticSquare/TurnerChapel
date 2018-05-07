import React, { Component } from 'react';
import Logo from '../Images/turner_logo.jpg';
import {Link} from 'react-router-dom'
import '../css/contact.css'



class Contact extends Component {
    render(){
        return(
            <div className='pageHolder'>

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

                <h1 className='display-4 contactTitle'>Contact Us</h1>
                <h4 className='contactTag'>If the Spirit moves you, reach out!</h4>






            </div>
        )
    }
}

export default Contact;