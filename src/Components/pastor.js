import React, { Component } from 'react';
import '../css/pastor.css'
import Logo from '../Images/turner_logo.jpg'
import pastorImage from '../Images/pastor.jpg'


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
                
                <div className="container-fluid">
                <div className="row">
                    <div className='holder'>
                        <img className='pastorImage' src={pastorImage}/>
                        <h1 className='display-3 pastorTitle'>Our Pastor</h1>
                            <p className='paraText mb-0'>Maecenas orci ipsum, sagittis at elit sed, pellentesque ultricies erat. Ut blandit eleifend elit quis elementum. Suspendisse id laoreet tellus. Maecenas enim leo, aliquet nec diam non, posuere pulvinar felis. Integer et diam non dui facilisis finibus nec sit amet tellus. Sed convallis risus nec tortor eleifend lacinia. Phasellus tempor congue dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vehicula urna, at suscipit nibh. Aenean faucibus, ante nec semper tempus, libero mi tristique augue, ut vulputate elit nibh a est. Nullam quis efficitur mi.<br/> Maecenas enim leo, aliquet nec diam non, posuere pulvinar felis. Integer et diam non dui facilisis finibus nec sit amet tellus. Sed convallis risus nec tortor eleifend lacinia. Phasellus tempor congue dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Ut blandit eleifend elit quis elementum. Suspendisse id laoreet tellus. Maecenas enim leo, aliquet nec diam non, posuere pulvinar felis. Integer et diam non dui facilisis finibus nec sit amet tellus. Sed convallis risus nec tortor eleifend lacinia. Phasellus tempor congue dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vehicula urna, at suscipit nibh. Aenean faucibus, ante nec semper tempus, libero mi tristique augue, ut vulputate elit nibh a est. Nullam quis efficitur mi.</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Pastor;