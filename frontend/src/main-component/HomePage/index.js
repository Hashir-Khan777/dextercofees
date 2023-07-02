import React, { Fragment, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Hero from "../../components/hero";
import Category from "../../components/Category";
import Product from "../../components/Product";
import Testimonial from "../../components/Testimonial";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import {
  addToCart,
  addToWishList,
  getProducts,
} from "../../store/actions/action";
import api from "../../api";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const HomePage = ({ addToCart, addToWishList }) => {
  const cookies = new Cookies();
  const push = useNavigate();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.data);

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

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
