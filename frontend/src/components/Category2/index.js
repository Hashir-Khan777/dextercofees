import React from 'react'
import Coffee from '../../images/category/coffee-cup.png'
import Beans from '../../images/category/beans.png'
import { FaAward, FaMedal } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";


const Category2 = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
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
    )
}

export default Category2;