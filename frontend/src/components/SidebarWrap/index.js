import React from 'react';
import {Link} from 'react-router-dom'
import ins1 from '../../images/recent-posts/img-1.jpg'
import ins2 from '../../images/recent-posts/img-2.jpg'
import ins3 from '../../images/recent-posts/img-3.jpg'


const SidebarWrap = () => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    return(
        <div className="col col-lg-4 col-12">
            <div className="tp-blog-sidebar">
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Recent posts</h3>
                    <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins1} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">Many Children are suffering a lot for food.</Link></h4>
                                <span className="date">22 Sep 2021</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins2} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">Be kind for the poor people and the kids.</Link></h4>
                                <span className="date">22 Sep 2021</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins3} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">Be soft and kind for the poor people.</Link></h4>
                                <span className="date">22 Sep 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link to="/blog-details">Donations</Link></li>
                        <li><Link to="/blog-details">Charity</Link></li>
                        <li><Link to="/blog-details">Help</Link></li>
                        <li><Link to="/blog-details">Non Profit</Link></li>
                        <li><Link to="/blog-details">Poor People</Link></li>
                        <li><Link to="/blog-details">Helping Hand</Link></li>
                        <li><Link to="/blog-details">Video</Link></li>
                    </ul>
                </div>
            </div>
        </div>
     )
        
}

export default SidebarWrap;
