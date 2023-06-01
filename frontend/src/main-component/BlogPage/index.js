import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import BlogList from '../../components/BlogList'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogPage =() => {
    return(
        <Fragment>
            <Navbar hClass={"header-style-2"} />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPage;

