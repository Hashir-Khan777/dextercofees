import React, { Fragment } from "react";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar";
import Hero from "../../components/hero";
import Category from "../../components/Category";
import Product from "../../components/Product";
import Testimonial from "../../components/Testimonial";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const HomePage = ({ addToCart, addToWishList }) => {
  const productsArray = api();

  const cookies = new Cookies();
  const push = useNavigate();

  const addToCartProduct = (product, qty = 1) => {
    if (cookies.get("_user")) {
      addToCart(product, qty);
    } else {
      push("/login");
    }
  };
  const addToWishListProduct = (product, qty = 1) => {
    if (cookies.get("_user")) {
      addToWishList(product, qty);
    } else {
      push("/login");
    }
  };

  const products = productsArray;

  return (
    <Fragment>
      <Navbar hClass={"header-style-1"} />
      <Hero />
      <Category />
      <Product
        addToCartProduct={addToCartProduct}
        addToWishListProduct={addToWishListProduct}
        products={products}
      />
      {/* <Testimonial /> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default connect(null, { addToCart, addToWishList })(HomePage);
