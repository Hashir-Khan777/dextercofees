import React from 'react'
import {Link} from 'react-router-dom'
import CategoryImage from '../../images/category/About-us.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaCoffee } from "react-icons/fa";

const Category = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className="category-area section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-12 order-0">
                        <div className="category-wrap">
                            <div className="category-title">
                                <div className='d-flex align-items-center small-headings mb-2'>
                                    <FaCoffee color='#C7A17A' size={20} />
                                    <p className='text-uppercase ps-2 pb-0 mb-0'>About us</p>
                                </div>
                                <h2 className="text-start">THERE IS ALL ABOUT DEXTER COFFEE HOUSE</h2>
                                <p className="text-start">
                                    DEXTER COFFEES an American Premium Brand we used only premium class 100% Arabica Beans around the world for a supreme class CUP OF COFFEE DEXTER first brought his love for high quality coffees to the American marketplace.
                                </p>
                            </div>
                            <ul class="about_info ul_li_block">
                                <li>
                                    <h4 class="text-uppercase">Our Passion</h4>
                                    <p class="mb-0">
                                        Our passion for great coffees ensures that you will get an exceptional cup of coffee, each and every time.
                                    </p>
                                </li>
                                <li>
                                    <h4 class="text-uppercase">Our Dedication</h4>
                                    <p class="mb-0">
                                        Our dedication to roasting a consistently great cup of coffee quickly earned the DEXTER COFFEE name accelerates for its rich flavor and clean, smooth finish.
                                    </p>
                                </li>
                                <ul class="btns_group ul_li">
                                    <li>
                                        <Link to={"/about"} className="btn btn_primary text-uppercase">
                                            Learn more
                                        </Link>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12 order-1">
                        <div className="category-img ps-0 position-relative">
                            <LazyLoadImage src={CategoryImage} effect="blur" alt="Dexter Coffee" className="mb-5 mb-md-0" />
                            {/* <div className="year_content_wrap text-uppercase">
                                <div class="content_wrap d-flex flex-column">
                                    <span>27 <small>+ years of</small></span>
                                    <strong>experience</strong>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;