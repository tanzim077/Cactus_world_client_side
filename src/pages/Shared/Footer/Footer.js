import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-12">
                                <div className=" border_top1"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <h3>menu LINKS</h3>
                                <ul className="link_menu">
                                    <Link to='/'><li><a href="#">Home</a></li>
                                    </Link>
                                    <Link to='/items'> <li><a href="items">Items</a></li></Link>
                                    <Link to='/aboutus'> <li><a href="aboutus">About Us</a></li></Link>
                                    <li><a href="#">Our Goals</a></li>
                                </ul>
                            </div>
                            <div className=" col-md-3">
                                <h3>Cactus World</h3>
                                <p className="many">
                                    We plant the right trees in the right places to safeguard biodiversity, protect nature, and fight climate change.
                                </p>
                            </div>
                            <div className="col-lg-3 offset-md-lg-2 col-md-4 offset-md-1">
                                <h3>Contact </h3>
                                <p><i className="fa fa-map-marker" aria-hidden="true"></i> Dhaka, Bangladesh</p>
                                <p> <i className="fa fa-envelope" aria-hidden="true"></i><a > admin@gmail.com</a></p>
                                <p><i className="fa fa-mobile" aria-hidden="true"></i> Call : +01123456789</p>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;