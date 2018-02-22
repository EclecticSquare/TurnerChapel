import React, { Component } from 'react';
import '../css/church.css';
import Logo from '../Images/turner_logo.jpg'


class Church extends Component {
    render() {
        return (
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

                <div className='holder'>
                     <h1 className='display-3 churchTitle'>Our Church</h1>
                        <p>Maecenas orci ipsum, sagittis at elit sed, pellentesque ultricies erat. Ut blandit eleifend elit quis elementum. Suspendisse id laoreet tellus. Maecenas enim leo, aliquet nec diam non, posuere pulvinar felis. Integer et diam non dui facilisis finibus nec sit amet tellus. Sed convallis risus nec tortor eleifend lacinia. Phasellus tempor congue dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vehicula urna, at suscipit nibh. Aenean faucibus, ante nec semper tempus, libero mi tristique augue, ut vulputate elit nibh a est. Nullam quis efficitur mi.
                        Integer pharetra justo ante, nec sodales erat dictum et. Fusce vestibulum aliquam libero, eget eleifend arcu tristique efficitur. Nulla justo diam, semper sit amet turpis ac, tempus fermentum metus. Ut non ornare felis. In imperdiet erat urna, a ullamcorper ligula fringilla a. Aliquam erat volutpat. Quisque risus metus, volutpat nec sodales vel, ultricies vitae ligula. Nunc eu metus rutrum, porta mauris ac, dignissim orci. Praesent sed pellentesque nisi. Phasellus viverra gravida mi, sit amet dapibus elit rhoncus vel. Quisque sed viverra justo. Aenean nisl ligula, luctus eleifend laoreet nec, molestie at ipsum. Donec nulla justo, ultrices eget vulputate vel, finibus vel enim. Pellentesque quis magna eu elit lacinia imperdiet.
                        Nullam aliquet turpis vitae lectus porttitor congue. Ut ex tellus, imperdiet ac urna eget, ullamcorper semper est. Cras viverra accumsan velit. Morbi feugiat magna ante, nec mollis ipsum porta quis. Pellentesque nec fermentum tellus, sed iaculis est. Praesent odio tellus, rutrum in ornare in, elementum vel nulla. Vivamus suscipit accumsan mattis. Nulla nulla arcu, egestas ac hendrerit id, condimentum feugiat nulla.
                        Fusce facilisis arcu urna, sed dignissim ligula rutrum sit amet. Vivamus sagittis magna vitae risus imperdiet aliquam. Sed pretium augue lorem, eget dictum velit finibus aliquet. Proin egestas odio eu massa feugiat, in eleifend metus sollicitudin. Morbi lacinia fringilla elit nec consequat. Sed libero ligula, hendrerit at sagittis rhoncus, volutpat eu arcu. Proin eget orci quis nibh tincidunt pulvinar ut a augue. Nulla sit amet mattis ligula. Aenean fringilla auctor nulla vitae pulvinar. Vivamus dolor turpis, molestie eget diam eu, malesuada pulvinar urna. Pellentesque scelerisque diam a feugiat laoreet. Proin vulputate viverra lacus sit amet viverra. Nunc efficitur mi vitae urna vehicula fermentum. Morbi a diam diam. Vivamus fringilla, ex a convallis porttitor, diam risus egestas odio, vitae maximus nulla tellus at urna. Fusce at tempus enim.
                        Vivamus scelerisque laoreet eros, vitae dignissim lectus vehicula id. Sed quis fringilla dolor, ut luctus nibh. Praesent non massa consequat, accumsan tortor sed, lobortis enim. Duis sit amet nunc vitae turpis tincidunt volutpat. Donec sollicitudin rutrum odio sed eleifend. Integer placerat condimentum accumsan. Nunc et maximus ipsum. Praesent tempor vulputate massa, at porttitor dui porta vulputate. Maecenas bibendum luctus quam ut dictum. Suspendisse potenti.</p>
                </div>
            </div>
        )
    }
}

export default Church;