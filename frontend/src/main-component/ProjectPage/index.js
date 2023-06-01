import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const ProjectPage =() => {
    return(
        <Fragment>
            <Navbar hClass={"header-style-2"} />
            <PageTitle pageTitle={'Project'} pagesub={'Project'}/> 
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage;
