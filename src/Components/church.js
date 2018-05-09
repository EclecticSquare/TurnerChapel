import React, { Component } from 'react';
import '../css/church.css';
import Logo from '../Images/turner_logo.jpg'
import ImageV from '../Images/churchExample.jpg'
import {Link} from 'react-router-dom'


class Church extends Component {
    render() {
        return (
            <div className='church'>
                   {/* navbar */}
                     
                <ul className="nav  nonHome justify-content-left">
                    
                    
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

                {/* about the church Info */}

                
                <h1 className='display-3 churchTitle'>History of <span className='churchName'>Greater Turner Chapel A.M.E.</span> Church</h1>
                
                <img className='church' src={ImageV}/>

                <p className='paraText'>In 1908 a small group of pioneering Christians, under the leadership of the Rev. Horace Williams,
                gathered together for the purpose of organizing a church in the Bellwood community. Much of the early
                history of the church is obscure because of the unavailability of written records.<br/>
                The efforts of our heroic founders resulted in the formation of Turner Chapel A.M.E. Church on
                Julian Street. It was named in honor of Bishop Henry McNeal Turner. The young church made steady
                progress, and we are the benefactors of their dedicated efforts and great sacrifices.<br/>
                During the early thirties, the church on Julian Street was destroyed by fire. Negotiations were
                made for property located at 578 Kennedy Street. The membership continued to grow and prosper,
                meeting the needs of the members and community. The following ministers served as pastors prior to
                November 1971: 
                </p>


                <div className='list1 container-fluid'>
                    <div className='reverendList row'>
                            <div className='reverendList col-4'>
                                <ul className='reverend'>
                                    <li>Rev. Alexander </li>
                                    <li>Rev. R.T Bussey</li>
                                    <li>Rev. M.C. Davos</li>
                                    <li>Rev. K.C. Dunlap</li>
                                    <li>Rev. C.C. Ealey</li>
                                    <li>Rev. Odum</li>
                                    <li>Rev. G.A. Roberts</li>
                                    <li>Rev. L.L. Flewellen</li>
                                </ul>
                            </div>

                            <div className='reverendList col-4'>
                                <ul className='reverend'>
                                    <li>Rev. Foley</li>
                                    <li>Rev. P. Fountain</li>
                                    <li>Rev. J.S. Horton</li>
                                    <li>Rev. A. Hightower</li>
                                    <li>Rev. J.W. O'neal</li>
                                    <li>Rev. Stanford</li>
                                    <li>Rev. H. William</li>
                                    <li>Rev. T.T. Ivery</li>
                                </ul>
                            </div>

                            <div className='reverendList col-4'>
                                <ul className='reverend'>
                                    <li>Rev. Mathis</li>
                                    <li>Rev. C. May</li>
                                    <li>Rev. McCain</li>
                                    <li>Rev. McClendon</li>
                                    <li>Rev. F.L. Riley</li>
                                    <li>Rev. E.B. Wright</li>
                                </ul>
                            </div>
                    </div>
                </div>


                <p className='paraText'>The realization of our long time dreams and efforts to construct a new church edifice became a reality!  Through God’s wisdom, Rev. L.W. Hope was assigned to the church in November 1971.  An untiring thrust was placed upon this effort, in 1975 under the leadership of Rev. Hope, Greater Turner Chapel A.M.E. Church relocated to Cascade Road, SW Atlanta.  The following ministers served as pastors since November 1971:</p>

                <div className='list2 container-fluid'>
                    <div className='reverendList row'>
                            <div className='reverendList col-4'>
                                <ul className='reverend'>
                                    <li>Rev. J. H. Butler </li>
                                    <li>Rev. R. D. Mizer</li>
                                    <li>Rev.  E. Lyons</li>
                                    <li>Rev. L.E. Logan II</li>
                                </ul>
                            </div>

                            <div className='reverendList col-4'>
                                <ul className='reverend'>
                                    <li>Rev. L.W. Hope</li>
                                    <li>Rev. B. Jordan</li>
                                    <li>Rev. A. Wilkes</li>
                                    <li>Rev. A. Morris</li>
                                </ul>
                            </div>

                            <div className='reverendList col-4'>
                                <ul className='reverend'>
                                    <li>Rev. G. S. Hardeman</li>
                                    <li>Rev. T. R. Stegall</li>
                                    <li>Rev. R. Allen</li>
                                    <li>Rev. T. Belin-Ingram</li>
                                </ul>
                            </div>
                    </div>
                </div>

               







        

                    


            

                   
                





            </div>
                    
        )
    }
}

export default Church;