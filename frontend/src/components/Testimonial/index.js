import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCoffee } from "react-icons/fa";

import test1 from '../../images/testimonial/1.png'
import test2 from '../../images/testimonial/2.jpg'

class Testimonial extends Component {
    
    render() {
        var settings = {
            dots: false,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true
        };

        return (
            <section className="testimonial-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="category-title">
                                <div className='d-flex align-items-center small-headings mb-2'>
                                    <FaCoffee color='#C7A17A' size={20} />
                                    <p className='text-uppercase ps-2 pb-0 mb-0'>Client Testimonial</p>
                                </div>
                                <h2 className="text-uppercase">Our client say something about Dexter</h2>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-wrap">
                        <div className="testimonial-active">
                            <Slider {...settings}>
                                <div className="testimonial-item">
                                    <div className="testimonial-img">
                                        <img src={test1} alt=""/>
                                        <div className="t-quote">
                                            <i className="fi flaticon-left-quote"></i>
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                            has been the industry's standard dummy text ever since the 1500s unknown
                                            printer took a galley of type and scrambled it to make a type specimen
                                            book has survived not has been the industry's standard consectetur adipisicing elit
                                            only five centuries the industry's standard consectetur.</p>
                                        <div className="testimonial-author">
                                            <h3>Rachel Matthews</h3>
                                            <span>CEO, Deixfes</span>
                                        </div>
                                        <div className="t-content-quote">
                                            <i className="fi flaticon-left-quote"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testimonial-img">
                                        <img src={test2} alt=""/>
                                        <div className="t-quote">
                                            <i className="fi flaticon-left-quote"></i>
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                            has been the industry's standard dummy text ever since the 1500s unknown
                                            printer took a galley of type and scrambled it to make a type specimen
                                            book has survived not has been the industry's standard consectetur adipisicing elit
                                            only five centuries the industry's standard consectetur.</p>
                                        <div className="testimonial-author">
                                            <h3>David Warner</h3>
                                            <span>CEO, TBR</span>
                                        </div>
                                        <div className="t-content-quote">
                                            <i className="fi flaticon-left-quote"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testimonial-img">
                                        <img src={test1} alt=""/>
                                        <div className="t-quote">
                                            <i className="fi flaticon-left-quote"></i>
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                            has been the industry's standard dummy text ever since the 1500s unknown
                                            printer took a galley of type and scrambled it to make a type specimen
                                            book has survived not has been the industry's standard consectetur adipisicing elit
                                            only five centuries the industry's standard consectetur.</p>
                                        <div className="testimonial-author">
                                            <h3>Ken Williamson</h3>
                                            <span>CEO, Bexim</span>
                                        </div>
                                        <div className="t-content-quote">
                                            <i className="fi flaticon-left-quote"></i>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Testimonial;