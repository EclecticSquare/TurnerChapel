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

                <div className='container-fluid'>
                    <div className='row'>
                            <div className='col-8'>
                                <h1 className='display-4 contactTitle'>Contact Us</h1>
                                <h4 className='contactTag'>If the Spirit moves you, reach out!</h4>
                                <iframe className='form' src="https://docs.google.com/forms/d/e/1FAIpQLSeQb-gmaiVjussd8CY8B8aC9Xq2mDDyHN29DEXtXv7UCL-bIA/viewform?embedded=true" width="100%" height="85%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>                            </div>

                            <div className='col-4'>
                                <p className='address'> 
                                    Greater Turner Chapel A.M.E <br/>
                                    4650 Cascade Rd. <br/>
                                    Atlanta, GA 30331 <br/>
                                    404.699.0023
                                </p>
                            </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact;