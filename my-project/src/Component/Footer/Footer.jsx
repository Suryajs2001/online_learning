import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className="App">

            <div className="container">


                <div className="nav-links">
                    <div className="nav-section">
                        <p>Internative</p>
                        <ul>
                            <li> HOME</li>
                            <li>BLOGS</li>
                            <li>INVESTOR</li>
                            <li>RECOGONITION/MEDIA</li>
                            
                        </ul>
                    </div>


                    <div className="nav-section">
                        <p>Business</p>
                        <ul>
                          <li> <NavLink to='/privacy'>PRIVACY POLICY</NavLink> </li>
                            <li>TERM & CONDITION</li>
                            <li>REFUND POLICY</li>

                        </ul>
                    </div>
                </div>

                <div className="social-links">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faFacebook} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTwitter} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faDiscord} />
                        </li>
                    </ul>
                </div>
                {/* <div className='companylogo'><img src="companylogo.png"/>  */}
                {/* </div> */}
                <div><hr /></div>
                <div className="footer">
                    <p>&copy; Internative School</p>
                    <ul>
                        
                        <li>© Copyright 2024 , Internative School. All rights reserved</li>
                    
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Footer;
