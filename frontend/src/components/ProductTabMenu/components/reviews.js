import React from 'react';
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";

import author1 from "../../../images/product-details/author.png";
import author2 from "../../../images/product-details/author2.png";

const Reviews = () => {
    return (
        <Grid className="prdTabContent faqReview">
            <Grid className="reviewItems">
                <Grid className="reviewImg">
                    <img src={author1} alt="author1"/>
                </Grid>
                <Grid className="reviewContent">
                    <h2><Link to="/">Philip M. Hankins</Link></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi deleniti
                        doloremque eos illum officiis, perferendis quidem. Architecto incidunt magni
                        provident repudiandae. Accusantium aliquam, asperiores commodi ipsam similique velit
                        voluptates!</p>
                </Grid>
            </Grid>
            <Grid className="reviewItems">
                <Grid className="reviewImg">
                    <img src={author2} alt="author1"/>
                </Grid>
                <Grid className="reviewContent">
                    <h2><Link to="/">Joseph L. Dorsey</Link></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi deleniti
                        doloremque eos illum officiis, perferendis quidem. Architecto incidunt magni
                        provident repudiandae.</p>
                    <ListItem className="reviewItems">
                        <Grid className="reviewImg">
                            <img src={author1} alt="author1"/>
                        </Grid>
                        <Grid className="reviewContent">
                            <h2><Link to="/">Joseph L. Dorsey</Link></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi
                                deleniti
                                doloremque eos illum officiis, perferendis quidem. Architecto incidunt magni
                                provident repudiandae.</p>
                        </Grid>
                    </ListItem>
                </Grid>
            </Grid>
            <Grid className="reviewItems">
                <Grid className="reviewImg">
                    <img src={author2} alt="author2"/>
                </Grid>
                <Grid className="reviewContent">
                    <h2><Link to="/">Joseph L. Dorsey</Link></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi
                        deleniti
                        doloremque eos illum officiis, perferendis quidem. Architecto incidunt magni
                        provident repudiandae.</p>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Reviews;