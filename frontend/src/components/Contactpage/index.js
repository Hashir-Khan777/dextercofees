import React from 'react';
import ContactForm from '../ContactFrom'
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Contactpage = () => {

    return(
        <section className="contact-pg-contact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s3 section-title-s5">
                            <h2>Our Contacts</h2>
                        </div>
                        <div className="contact-details">
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. </p>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <MdLocationPin size={24} color="#C7A17A" />
                                    </div>
                                    <h5>Our Location</h5>
                                    <p>7 New York NY 10007</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <BsFillTelephoneFill size={20} color="#C7A17A" />
                                    </div>
                                    <h5>Phone</h5>
                                    <p>+1 347 445 5144, +1 347 279 8775</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <MdEmail size={24} color="#C7A17A" />
                                    </div>
                                    <h5>Email</h5>
                                    <p>info@dextercoffees.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <div className="contact-form-area">
                            <div className="section-title-s3 section-title-s5">
                                <h2 className="ps-2">Quick Contact Form</h2>
                            </div>
                            <div className="contact-form">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col col-xs-12">
                        <div className="contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
     )
        
}

export default Contactpage;
