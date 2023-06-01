import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import { Link } from 'react-router-dom'

import psImg from '../../images/project-single/img-1.jpg'


const ProjectSinglePage =() => {
    return(
        <Fragment>
            <Navbar hClass={"header-style-2"} />
            <PageTitle pageTitle={'Project Single'} pagesub={'Project'}/> 
            <section className="project-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8 col-12">
                            <div className="project-content">
                                <div className="img-holder">
                                    <img src={psImg} alt=""/>
                                </div>
                                <h2>FRESH ORIGINAL HONEY</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which don't
                                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                    need to be sure there isn't anything embarrassing hidden in the middle of text. All the
                                    Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                    making this the first true generator on the Internet. </p>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                                    structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
                                    therefore always free from repetition, injected humour.</p>
                                <ul>
                                    <li>Randomised words which don't look even slightly believable.</li>
                                    <li>It uses a dictionary of over 200 Latin words</li>
                                    <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined.</li>
                                    <li>You need to be sure there isn't anything embarrassing hidden.</li>
                                    <li>The generated Lorem Ipsum is therefore.</li>
                                </ul>
                                <div className="pagi">
                                    <ul>
                                        <li><Link to="/project-single">Previous</Link></li>
                                        <li><Link to="/project-single">Next</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-12">
                            <div className="service-sidebar">
                                <div className="widget project-info-widget">
                                    <h3>Project Information</h3>
                                    <ul>
                                        <li><span>Project Title: </span> FRESH ORIGINAL HONEY </li>
                                        <li><span>Client: </span> Robert Symon</li>
                                        <li><span>Date: </span> 20 January 2021</li>
                                        <li><span>Project Value:</span> $5500</li>
                                        <li><span>Category: </span> Honey </li>
                                        <li><span>Status : </span> Completed </li>
                                        <li><span>live link : </span> <Link to="/project-single">http://demo.com</Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectSinglePage;
