import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import BlogSingle from '../../components/BlogDetails'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import Footer from '../../components/footer';


const BlogDetailsLeftSiide =() => {

    const { id } = useParams()
    const BlogDetails = blogs.find(item => item.id === id)
    return(
        <Fragment>
            <Navbar hClass={"header-style-2"} />
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'}/> 
            <BlogSingle blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsLeftSiide;


