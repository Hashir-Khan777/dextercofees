import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from "../../images/dexter-logo.svg";
import { TfiFacebook } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { RiInstagramLine } from "react-icons/ri";
import { TfiPinterest } from "react-icons/tfi";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="tp-site-footer">
        <div className="tp-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <Link onClick={ClickHandler} to="/"><img src={Logo} alt="ft-logo" width={110}/></Link>
                            </div>
                            <p>DEXTER COFFEES CreateLuxur Coffees products that make a sophisticated & luxurious lifestyle for people around the world</p>
                            <ul>
                                <li>
                                    <Link onClick={ClickHandler} to="https://www.facebook.com/dextercoffes">
                                        <TfiFacebook className="mb-2" />
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="https://www.linkedin.com/company/dexter-coffees-llc">
                                        <TfiLinkedin className="mb-2" />
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="https://twitter.com/DexterCoffees">
                                        <TfiTwitterAlt className="mb-2" />
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="https://www.instagram.com/dextercoffees">
                                        <RiInstagramLine className="mb-2" />
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="https://www.pinterest.com/dextercoffees">
                                        <TfiPinterest className="mb-2" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Quick Links</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/">Home</Link></li>
                                <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                {/* <li><Link onClick={ClickHandler} to="/wishlist">Wishlist</Link></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Our Popular Products</h3>
                            </div>
                            <ul>
                                {/* <li><Link onClick={ClickHandler} to="/project">Our Projects</Link></li> */}
                                <li><Link onClick={ClickHandler} to="/product-single/5">Dexter Cafe</Link></li>
                                <li><Link onClick={ClickHandler} to="/product-single/7">French Roast</Link></li>
                                <li><Link onClick={ClickHandler} to="/product-single/4">Decaf Colombia Classic</Link></li>
                                <li><Link onClick={ClickHandler} to="/product-single/9">Hazelnut</Link></li>
                                <li><Link onClick={ClickHandler} to="/product-single/2">American Breakfast</Link></li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget tp-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact us</h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><MdLocationPin className="me-3" size={24} /> 7 New York NY 10007</li>
                                    <li><MdEmail className="me-3" size={24} /> info@dextercoffees.com</li>
                                    <li><BsFillTelephoneFill className="me-3" size={20} /> +1 347 445 5144</li>
                                    <li><BsFillTelephoneFill className="me-3 invisible" size={20} />+1 347 279 8775</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        {/* <div className="tp-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> Copyright &copy; 2021 Dexter by <Link onClick={ClickHandler} to="/">themepresss</Link>.
                            All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div> */}
    </footer>
  )
} 

export default Footer;