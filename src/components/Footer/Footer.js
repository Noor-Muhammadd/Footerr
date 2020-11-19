import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
    
    <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
               
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Enterprise </a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li> <a href="#">Status  </a> </li>
                        </ul>
                    </div>
                    
                    <div className="col-sm-6 col-md-3 item">
                        
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Security</a></li>
                            <li> <a href="#">Login</a> </li>
                        </ul>
                    </div>
                    <div className="col item social">
                    <a href="#"><i class="icon ion-social-facebook"></i></a>
                    <a href="#"><i class="icon ion-social-twitter"></i></a>
                    <a href="#"><i class="icon ion-social-linkedin"></i></a>
                    <a href="#"><i class="icon ion-social-instagram"></i></a>
                    </div>
                </div>
                <p className="copyright">Athene Design © 2020</p>
            </div>
        </footer>
    </div>
    
    );
};

export default Footer;
