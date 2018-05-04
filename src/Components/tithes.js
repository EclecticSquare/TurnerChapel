import React, { Component } from 'react';
import '../css/tithes.css';
import Logo from '../Images/turner_logo.jpg'
import Tithe from '../Images/tithePlate.jpeg'
import {Link} from 'react-router-dom'

class Tithes extends Component {
    render() {
        return (
        <div className=''>
            {/* navbar */}
              {/* navbar */}
              <ul className="nav justify-content-left fixed-top">
                    
                    
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
              

                {/* corne logo */}
                <div className="">
                        <Link to='/home'><img className="cornerLogo" src={Logo}/></Link>
                </div>

                {/* Tithing section */}


                
                <div className='tithes container-fluid'>
                    <div className='row'>
                        {/* Why tithe */}
                        <div className='tithe col-md'>
                            <img  id='tithePlate' src={Tithe}/>
                        </div>

                        <div className='tithe col-md'>
                            <h2 className='titheTitle'>Tithes and Offerings</h2>
                            <h5 className='tithePara'>These two words are often spoken in the same breath...but what's the difference between them? “Tithe” literally means "tenth" or 10 percent. A tithe is the first 10% of your income. An offering is anything you give in addition to 10%. The Bible says in Deuteronomy 14:23 (Living Bible):

 "The purpose of tithing is to teach you always to put God first in your lives..."

<br/>Tithing is a reminder that God is the supplier of everything we have. It is also God’s personal invitation to experience an outpouring of his blessing in each of our lives. In Malachi 3:10, God essentially says:

“Go ahead. I dare you. See if you can out-give me!”

<br/>And in 2 Corinthians 8:7, we're encouraged to EXCEL in the grace of giving because God influences the world through his people. He GIVES TO YOU so he can GIVE THROUGH YOU. As we faithfully give, the world is changed for the glory of God: the LIFE Jesus offers is preached, people are fed, brokeness is healed, churches are built and each of us, in turn, are blessed by God so that we can give again.

<br/>SO, is God wise? Do we trust him? If God is wise, then WE are wise to follow what he says about financial stewardship. If we trust him, then we must trust him with all aspects of our lives - including finances. So go ahead - accept God’s invitation to put him to the test. Start tithing faithfully and watch what he does in and through your life. Thanks to Saddleback Church for providing some of the above text.</h5>
                        </div>




             
                    </div>

                </div>



        {/* giving quotes */}
       
        <div>
           

            

            
        </div>







        <div id='slideshowContainer'>
                <div id='slideshow'>
                    <blockquote className="blockquote" id='quote1'>
                    <p className="mb-0"><span>&#10077;</span>There is one who scatters, and yet increases all the more, and there is one who withholds what is justly due, and yet it results only in want. The generous man will be prosperous, and he who waters will himself be watered.</p>
                    <footer className="blockquote-footer">Proverbs 11:24-25</footer>
                </blockquote>

                <blockquote className="blockquote" id='quote2'>
                    <p className="mb-0">Give generously to him and do so without a grudging heart; then because of this the Lord your God will bless you in all your work and in everything you put your hand to..<span>&#10078;</span></p>
                    <footer className="blockquote-footer">Deuteronomy 15:10 </footer>
                </blockquote>

                <blockquote className="blockquote" id='quote3'>
                    <p className="mb-0"><span>&#10077;</span>“Bring the whole tithe into the storehouse, so that there may be food in My house, and test Me now in this,” says the Lord of hosts, “if I will not open for you the windows of heaven and pour out for you a blessing until it overflows.</p>
                    <footer className="blockquote-footer">Malachi 3:10</footer>
                </blockquote>

                </div>
        </div>



        {/* Where to tithe */}
        <a href="https://www.givelify.com"><button type="button" className="btn btn-secondary btn-lg">Give Here</button></a>        

        </div>
        )
    }
}


export default Tithes;