import React, { Component } from 'react';
import Logo from '../Images/turner_logo.jpg'
import './home.css'

class Home extends Component {
    render() {
        return(
            <div className=''>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <img className='logo' alt='church logo'src={Logo} />
                                <h4 className='address'>4650 Cascade Road, Atlanta, Georgia 30331</h4>
                                <h5>SUNDAY MORNING WORSHIP SERVICES</h5>
                                <h6>8am and 11am</h6>
                                <h5>WEDNESDAY BIBLE STUDY</h5>
                                <h6>12:30pm and 7:00pm</h6>
                            </div>
                            <div className="col-8">
                                <h1 className="welcome">Welcome</h1>
                                <h1 className='mission'>Greater Turner Chapel African Methodist Episcopal Church seeks to be a people that abide in God's Love for ALL people. Empowering and Encouraging one another - Exalting God.</h1>
                                
                            </div>
                        </div>
                    </div>

                    



            </div>







        )
    }
}

export default Home