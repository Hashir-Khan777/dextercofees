import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import blogs from '../../api/blogs'
import { useParams } from 'react-router-dom'
import BlogSingle from '../../components/BlogDetails'
import Footer from '../../components/footer';

const BlogDetails =(props) => {

    const { id } = useParams()

    const BlogD = blogs.find(item => item.id === id)


    return(
        <Fragment>
            <Navbar hClass={"header-style-2"} />
            <PageTitle pageTitle={BlogD.title} pagesub={'Blog'}/> 
             <BlogSingle/>
             <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetails;
