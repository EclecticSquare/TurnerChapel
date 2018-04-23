import React, { Component } from 'react';
import '../css/pastor.css'
import Logo from '../Images/turner_logo.jpg'
import {Link} from 'react-router-dom';
import pastorImage from '../Images/pastorStandin.jpeg'
import ImageZ from '../Images/pastorExample1.jpeg'
import ImageW from '../Images/pastorExample2.jpeg'
import ImageX from '../Images/pastorExample3.jpeg'
import ImageY from '../Images/pastorExample4.jpeg'
class Pastor extends Component {
    render() {
        return(
            <div className=''>
                 {/* navbar */}
                 <ul className="pastor nav justify-content-center fixed-top">
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
                        <Link to='/story'><a className="pastor nav-link" href="#">Tithes and Offerings</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/calendar'><a className="pastor nav-link" href="#">Calendar</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/news'><a className="pastor nav-link" href="#">News and Events</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/ministries'><a className="pastor nav-link" href="#">Ministries</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact'><a className="pastor nav-link" href="#">Contact Us</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/home'><img className="navLogo" src={Logo}/></Link>
                    </li>
                </ul>

                
                
                {/* pastor Info */}
                <div className='pastorContainer'>
                    <h1 className='display-3 pastorTitle'>Toni Belin Ingram</h1>
                   
                    <p className='pastorInfo'><img className='pastorImage' src={pastorImage}/>Maecenas orci ipsum, sagittis at elit sed, pellentesque ultricies erat. Ut blandit eleifend elit quis elementum. Suspendisse id laoreet tellus. Maecenas enim leo, aliquet nec diam non, posuere pulvinar felis. Integer et diam non dui facilisis finibus nec sit amet tellus.  Sed convallis risus nec tortor eleifend lacinia. Phasellus tempor congue dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vehicula urna, at suscipit nibh. Aenean faucibus, ante nec semper tempus, libero mi tristique augue, ut vulputate elit nibh a est. Nullam quis efficitur mi.<br/> Maecenas enim leo, aliquet nec diam non, posuere pulvinar felis. Integer et diam non dui facilisis finibus nec sit amet tellus. Sed convallis risus nec tortor eleifend lacinia. Phasellus tempor congue dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Ut blandit eleifend elit quis elementum. Suspendisse id laoreet tellus. Maecenas enim leo, aliquet nec diam non, posuere pulvinar felis. Integer et diam non dui facilisis finibus nec sit amet tellus. Sed convallis risus nec tortor eleifend lacinia. Phasellus tempor congue dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vehicula urna, at suscipit nibh. Aenean faucibus, ante nec semper tempus, libero mi tristique augue, ut vulputate elit nibh a est. Nullam quis efficitur mi.</p>
                </div>


                {/* randomized images */}
                <div className='needDiv'>Hello</div>
                






                <div className="pastor container-fluid">
                    <div className="row">
                        <div className="col-sm">
                        <img className='pastorSlideImage' src={ImageW}/>
                        </div>
                        <div className="col-sm">
                        <img className='pastorSlideImage' src={ImageX}/>
                        </div>
                        <div className="col-sm">
                        <img className='pastorSlideImage' src={ImageY}/>
                        </div>
                        <div className="col-sm">
                        <img className='pastorSlideImage' src={ImageZ}/>
                        </div>
                    </div>
                </div>

               
    

            </div>
        )
    }
}

export default Pastor;