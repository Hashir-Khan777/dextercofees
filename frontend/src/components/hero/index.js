import React, { Component } from "react";



class Hero extends Component {
    render() {

        return (
            <section className="hero-style-1">
                {/* <div className="hero-slider"> */}
                    {/* <div className="slide"> */}
                        <div className="container h-100">
                            <div class="row justify-content-start align-items-center h-100">
                                <div class="col-lg-6 col-md-8 slider_item">
                                    <h3 class="title_text text-white text-uppercase">
                                        Time to discover coffee house
                                    </h3>
                                    <p>
                                        The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. given an opportunity to sample.
                                    </p>
                                    <ul class="btns_group ul_li">
                                        <li><a class="btn btn_primary text-uppercase" href="menu.html" tabindex="0">testy Coffee</a></li>
                                        <li><a class="btn btn_border border_white text-uppercase" href="shop_details.html" tabindex="0">Learn more</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div className="right-image">
                            <div className="simg-1"><img src={hero2} alt="slide-img"/></div>
                            <div className="simg-2"><img src={hero3} alt="slide-img"/></div>
                        </div>
                        <div className="hero-shape-img"><img src={hero4} alt="slide-img"/></div> */}
                    {/* </div> */}
                {/* </div> */}
            </section>
        )
    }
}

export default Hero;