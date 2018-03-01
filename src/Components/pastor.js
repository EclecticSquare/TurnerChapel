import React, { Component } from 'react';
import '../css/pastor.css'
import Logo from '../Images/turner_logo.jpg'


class Pastor extends Component {
    render() {
        return(
            <div className=''>
                <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                    <img src={Logo} width="" height="75" className="d-inline-block align-top" alt=""/>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="nav-item nav-link list" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link list" href="#">Our Pastor</a>
                        <a className="nav-item nav-link list" href="#">News and Events</a>
                        <a className="nav-item nav-link list" href="#">Tithes and Offerings</a>
                        <a className="nav-item nav-link list" href="#">Ministries</a>
                        <a className="nav-item nav-link list" href="#">Contact Us</a>
                        </div>
                    </div>
                </nav>

                <div className='introImage'></div>

            </div>
        )
    }
}

export default Pastor;