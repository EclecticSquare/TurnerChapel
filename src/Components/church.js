import React, { Component } from 'react';
import '../css/church.css';
import Logo from '../Images/turner_logo.jpg'
import ImageV from '../Images/churchExample.jpg'
import {Link} from 'react-router-dom'


class Church extends Component {
    render() {
        return (
            <div className=''>
                   {/* navbar */}
                   <ul className="nav justify-content-left fixed-top">
                <li className="nav-item">
                        <Link to='/home'><a className="church nav-link" href="#">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/story'><a className="church nav-link" href="#">Our Story</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/pastor'><a className="church nav-link" href="#">Meet the Pastor</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/tithes'><a className="church nav-link" href="#">Tithes and Offerings</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/calendar'><a className="church nav-link" href="#">Calendar</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/news'><a className="church nav-link" href="#">News and Events</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/ministries'><a className="church nav-link" href="#">Ministries</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact'><a className="church nav-link" href="#">Contact Us</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/home'><img className="navLogo" src={Logo}/></Link>
                    </li>
                </ul>

                {/* about the church Info */}

                
                <h1 className='display-3 churchTitle'>Greater Turner Chapel A.M.E. Church</h1>
                
                <p className='paraText'><img className='church' src={ImageV}/>Maecenas orci ipsum, sagittis at elit sed, pellentesque ultricies erat. Ut blandit eleifend elit quis elementum. Suspendisse id laoreet tellus. Maecenas enim leo, aliquet nec diam non, posuere pulvinar felis. Integer et diam non dui facilisis finibus nec sit amet tellus. Sed convallis risus nec tortor eleifend lacinia. Phasellus tempor congue dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vehicula urna, at suscipit nibh. Aenean faucibus, ante nec semper tempus, libero mi tristique augue, ut vulputate elit nibh a est. Nullam quis efficitur mi. <br/>
                    Integer pharetra justo ante, nec sodales erat dictum et. Fusce vestibulum aliquam libero, eget eleifend arcu tristique efficitur. Nulla justo diam, semper sit amet turpis ac, tempus fermentum metus. Ut non ornare felis. In imperdiet erat urna, a ullamcorper ligula fringilla a. Aliquam erat volutpat. Quisque risus metus, volutpat nec sodales vel, ultricies vitae ligula. Nunc eu metus rutrum, porta mauris ac, dignissim orci. Praesent sed pellentesque nisi. Phasellus viverra gravida mi, sit amet dapibus elit rhoncus vel. Quisque sed viverra justo. Aenean nisl ligula, luctus eleifend laoreet nec, molestie at ipsum. Donec nulla justo, ultrices eget vulputate vel, finibus vel enim. Pellentesque quis magna eu elit lacinia imperdiet.<br/>
                    Nullam aliquet turpis vitae lectus porttitor congue. Ut ex tellus, imperdiet ac urna eget, ullamcorper semper est. Cras viverra accumsan velit. Morbi feugiat magna ante, nec mollis ipsum porta quis. Pellentesque nec fermentum tellus, sed iaculis est. Praesent odio tellus, rutrum in ornare in, elementum vel nulla. Vivamus suscipit accumsan mattis. Nulla nulla arcu, egestas ac hendrerit id, condimentum feugiat nulla.<br/>
                    Fusce facilisis arcu urna, sed dignissim ligula rutrum sit amet. Vivamus sagittis magna vitae risus imperdiet aliquam. Sed pretium augue lorem, eget dictum velit finibus aliquet. Proin egestas odio eu massa feugiat, in eleifend metus sollicitudin. Morbi lacinia fringilla elit nec consequat. Sed libero ligula, hendrerit at sagittis rhoncus, volutpat eu arcu. Proin eget orci quis nibh tincidunt pulvinar ut a augue. Nulla sit amet mattis ligula. Aenean fringilla auctor nulla vitae pulvinar. Vivamus dolor turpis, molestie eget diam eu, malesuada pulvinar urna. Pellentesque scelerisque diam a feugiat laoreet. Proin vulputate viverra lacus sit amet viverra. Nunc efficitur mi vitae urna vehicula fermentum. Morbi a diam diam. Vivamus fringilla, ex a convallis porttitor, diam risus egestas odio, vitae maximus nulla tellus at urna. Fusce at tempus enim.<br/>
                    Vivamus scelerisque laoreet eros, vitae dignissim lectus vehicula id. Sed quis fringilla dolor, ut luctus nibh. Praesent non massa consequat, accumsan tortor sed, lobortis enim. Duis sit amet nunc vitae turpis tincidunt volutpat. Donec sollicitudin rutrum odio sed eleifend. Integer placerat condimentum accumsan. Nunc et maximus ipsum. Praesent tempor vulputate massa, at porttitor dui porta vulputate. Maecenas bibendum luctus quam ut dictum. Suspendisse potenti.</p>
            </div>
                    
        )
    }
}

export default Church;