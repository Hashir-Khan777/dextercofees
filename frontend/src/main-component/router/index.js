import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "../HomePage";
import Homepage2 from "../HomePage2";
import AboutPage from "../AboutPage";
import ShopPage from "../ShopPage";
import ProductDetailsPage from "../ProductDetailsPage";
import CheckoutPage from "../CheckoutPage";
import OrderRecived from "../OrderRecived";
import CartPage from "../CartPage";
import WishlistPage from "../WishlistPage";
import ProjectSinglePage from "../ProjectSinglePage";
import ProjectPage from "../ProjectPage";
import BlogPage from "../BlogPage";
import BlogPageLeft from "../BlogPageLeft";
import BlogPageFullwidth from "../BlogPageFullwidth";
import BlogDetails from "../BlogDetails";
import BlogDetailsLeftSiide from "../BlogDetailsLeftSiide";
import BlogDetailsFull from "../BlogDetailsFull";
import ErrorPage from "../ErrorPage";
import ContactPage from "../ContactPage";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import ForgotPassword from "../ForgotPassword";
import Verification from "../VerificationPage";
import ResetPassword from "../ResetPassword";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, data }) => {
  if (!data?.email) {
    return <Navigate to="/login" />;
  }
  return children;
};

const AllRoute = () => {
  const { data } = useSelector((state) => state.authReducer);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          {/* <Route path="/home" element={<Homepage />} /> */}
          {/* <Route path="/home2" element={<Homepage2 />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product-single/:id" element={<ProductDetailsPage />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute data={data}>
                <CheckoutPage />
              </PrivateRoute>
            }
          />
          <Route path="/order_received" element={<OrderRecived />} />
          <Route
            path="/cart"
            element={
              <PrivateRoute data={data}>
                <CartPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <PrivateRoute data={data}>
                <WishlistPage />
              </PrivateRoute>
            }
          />
          <Route path="/project-single" element={<ProjectSinglePage />} />
          {/* <Route path="/project" element={<ProjectPage />} /> */}
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-left-sidebar" element={<BlogPageLeft />} />
          <Route path="/blog-fullwidth" element={<BlogPageFullwidth />} />
          <Route path="/blog-single/:id" element={<BlogDetails />} /> */}
          {/* <Route
            path="/blog-single-left-sidebar/:id"
            element={<BlogDetailsLeftSiide />}
          /> */}
          {/* <Route
            path="/blog-single-fullwidth/:id"
            element={<BlogDetailsFull />}
          /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
