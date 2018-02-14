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
                                <h4>4650 Cascade Road, Atlanta, Georgia 30331</h4>
                            </div>
                            <div className="col-8">Column Two
                            
                            </div>
                        </div>
                    </div>

                    



            </div>







        )
    }
}

export default Home