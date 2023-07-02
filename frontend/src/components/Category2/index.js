import React from 'react'
import Coffee from '../../images/category/coffee-cup.png'
import Beans from '../../images/category/beans.png'
import { FaAward, FaMedal } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";
import CategoryImage from '../../images/category/About-us.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaCoffee } from "react-icons/fa";
import PresidentMessage from '../../images/category/President-Message.webp'

const Category2 = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }
    return(
        <>
            <section className={`category-area-s2 section-padding ${props.StyleClass}`}>
                <div className="container">
                    <div className="category-wrap">
                        <div className="row">
                            <div className="col-xl-3 col-sm-6 col-12 d-flex">
                                <div className="category-item text-start flex-grow-1">
                                    <div className="category-icon text-center text-sm-start">
                                        <FaMedal size={46} />
                                    </div>
                                    <div className="category-content">
                                        <h2>Excellence</h2>
                                        <p>We pursue Luxury Coffees innovation, provide high quality products.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12 d-flex">
                                <div className="category-item text-start flex-grow-1">
                                    <div className="category-icon text-center text-sm-start">
                                        <GiCoffeeBeans size={46} />
                                    </div>
                                    <div className="category-content">
                                        <h2>Freshness</h2>
                                        <p>We roast fresh at our own facility in small batches.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12 d-flex">
                                <div className="category-item text-start flex-grow-1">
                                    <div className="category-icon text-center text-sm-start">
                                        <FaHandshake size={48} />
                                    </div>
                                    <div className="category-content">
                                        <h2>Commitment</h2>
                                        <p>We are dedicated to maintaining a constant pursuit of coffee excellence.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12 d-flex">
                                <div className="category-item text-start flex-grow-1">
                                    <div className="category-icon text-center text-sm-start">
                                        <FaAward size={46} />
                                    </div>
                                    <div className="category-content">
                                        <h2>Quality</h2>
                                        <p>We select and roast only the highest grades of Arabica coffee.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape-img-1">
                    <img src={Coffee} alt="Coffee cup" />
                </div>
                <div className="hero-shape-img-2">
                    <img src={Beans} alt="Coffee cup" />
                </div>
            </section>
            <section className="category-area section-padding">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-xl-6 col-lg-6 col-12 order-1">
                            <div className="category-img ps-0 position-relative">
                                <LazyLoadImage src={PresidentMessage} effect="blur" alt="Dexter Coffee" className="mb-5 mb-md-0 w-100" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-12 order-0">
                            <div className="category-wrap">
                                <div className="category-title">
                                    <div className='d-flex align-items-center small-headings mb-2'>
                                        <FaCoffee color='#C7A17A' size={20} />
                                        <p className='text-uppercase ps-2 pb-0 mb-0'>President Message</p>
                                    </div>
                                    <h2 className="text-start text-uppercase">President Mission and Vision about DEXTER COFFEES</h2>
                                    <p className="text-start mb-4">
                                        We understand that the first step to living your best life by attaining healthy Life. Everything we make is designed to help you do just that. That’s our commitment to building luxurious life-changing technologies that keep your taste , discover your innovative and sophisticated at every stage of life, help you feel luxurious, and move proudly. We bring information related to, coffee beverages, and breakthroughs to discover new delicious flavor for every Sip and design your luxury lifestyle along with sophisticated personality.
                                    </p>
                                    <p className="text-start">
                                        Extensive luxury COFFEE Brand and a full range of high-quality Coffee products around the bean belt. We pride ourselves on using only the highest standards Coffee Beans and ingredients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category2;