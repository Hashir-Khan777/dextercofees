import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import CheckoutSection from '../../components/CheckoutSection'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import {connect} from "react-redux";


const CheckoutPage =({cartList}) => {
    return(
        <Fragment>
            <Navbar hClass={"header-style-2"} />
            <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'}/> 
            <CheckoutSection cartList={cartList}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
const mapStateToProps = state => {
    return {
        cartList: state.cartList.cart,
        symbol: state.data.symbol
    }
};

export default connect(mapStateToProps)(CheckoutPage);
