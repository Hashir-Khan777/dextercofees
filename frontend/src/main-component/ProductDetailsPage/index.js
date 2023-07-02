import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import ProductSingleSec from "../../components/ProductSingleSec";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { connect, useDispatch, useSelector } from "react-redux";
import api from "../../api";
import { addToCart, getProduct } from "../../store/actions/action";

const ProductDetailsPage = (props) => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { addToCart } = props;
  const { product } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return (
    <Fragment>
      <Navbar hClass={"header-style-2"} />
      <PageTitle pageTitle={"Product Single"} pagesub={"Product"} />
      {product ? (
        <ProductSingleSec item={product} addToCart={addToCart} />
      ) : null}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.data.products,
  };
};

export default connect(mapStateToProps, { addToCart })(ProductDetailsPage);
