import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import Logo from "../../images/dexter-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import MobileMenu from "../../components/MobileMenu";
import min3 from "../../images/shop/mini-cart/bee2.png";
import { totalPrice } from "../../utils";
import { removeFromCart, removeFromWishList } from "../../store/actions/action";
import Cookies from "universal-cookie";
import { useState } from "react";
import {
  DELETE_CART,
  DELETE_WISHLIST,
  LOGOUT_SUCCESS,
} from "../../store/actions/type";

const Header = (props) => {
  const [isCartShow, setIsCartShow] = useState(false);
  const [isWishlistShow, setIsWishlistShow] = useState(false);
  const [isprofileShow, setIsprofileShow] = useState(false);
  const push = useNavigate();

  const dispatch = useDispatch();

  const cartHandler = () => {
    if (cookies.get("_user")) {
      setIsCartShow(!isCartShow);
      setIsWishlistShow(false);
    } else {
      push("/login");
    }
  };

  const wishlistHandler = () => {
    if (cookies.get("_user")) {
      setIsWishlistShow(!isWishlistShow);
      setIsCartShow(false);
    } else {
      push("/login");
    }
  };

  const profileHandler = () => {
    setIsprofileShow(!isprofileShow);
  };

  const cookies = new Cookies();

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const logout = () => {
    cookies.remove("_user");
    dispatch({ type: LOGOUT_SUCCESS });
    dispatch({ type: DELETE_CART });
    dispatch({ type: DELETE_WISHLIST });
    window.scrollTo(10, 0);
  };

  const { carts } = props;
  const { wishs } = props;

  let totalwishlistprice = 0;
  if (wishs && wishs.length > 0) {
    for (let i = 1; i <= wishs.length; i++) {
      totalwishlistprice += Number(wishs[i - 1].price);
    }
  }

  return (
    <header id="header" className={`site-header ${props.hClass}`}>
      <nav className="navigation navbar navbar-expand-lg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="navbar-header mt-0">
                <Link
                  onClick={ClickHandler}
                  className="navbar-brand"
                  to="/home"
                >
                  <img src={Logo} alt="icon" className="company-logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                id="navbar"
                className="collapse navbar-collapse navigation-holder"
              >
                <Link onClick={ClickHandler} className="menu-close" to="/">
                  <i className="fi flaticon-cancel"></i>
                </Link>
                <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                  <li>
                    {/* show className active */}
                    <Link onClick={ClickHandler} to="/">
                      Home
                    </Link>
                    {/* <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/home">Home Style 1</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home2">Home Style 2</Link>
                        </li>
                      </ul> */}
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/shop">
                      Shop
                    </Link>
                  </li>
                  {/* <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/cart">Pages</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/cart">Cart</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/wishlist">Wishlist</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/checkout">Checkout</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/404">404 Error</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} to="/">Product</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link onClick={ClickHandler} to="/shop">Product</Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/product-single/1">Product Single</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} to="/">Project</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link onClick={ClickHandler} to="/project">Project</Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/project-single">Project Single</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/login">Login</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/register">Register</Link>
                        </li>
                      </ul>
                    </li> */}
                  {/* <li>
                      <Link onClick={ClickHandler} to="/">Blog</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/blog">Blog right sidebar</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} to="/">Blog details</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link onClick={ClickHandler} to="/blog-single/1">
                                Blog details right sidebar
                              </Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/blog-single-left-sidebar/1">
                                Blog details left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link onClick={ClickHandler} to="/blog-single-fullwidth/1">
                                Blog details fullwidth
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li> */}
                  <li>
                    <Link onClick={ClickHandler} to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="header-right d-flex">
                <div className="header-profile-form-wrapper">
                  <button
                    onClick={profileHandler}
                    className="profile-toggle-btn"
                  >
                    <i
                      className={`${
                        isprofileShow ? "fi ti-close" : "fi flaticon-user"
                      }`}
                    ></i>
                  </button>
                  <div
                    className={`header-profile-content ${
                      isprofileShow ? "header-profile-content-toggle" : ""
                    }`}
                  >
                    <ul>
                      {!cookies.get("_user") ? (
                        <>
                          <li>
                            <Link onClick={ClickHandler} to="/login">
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/register">
                              Register
                            </Link>
                          </li>
                        </>
                      ) : null}
                      {cookies.get("_user") ? (
                        <>
                          <li>
                            <Link onClick={ClickHandler} to="/cart">
                              Cart
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/wishlist">
                              Wishlist
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/checkout">
                              Checkout
                            </Link>
                          </li>
                          <li>
                            <Link onClick={logout} to="/login">
                              Logout
                            </Link>
                          </li>
                        </>
                      ) : null}
                    </ul>
                  </div>
                </div>
                <div className="mini-cart">
                  <button onClick={cartHandler} className="cart-toggle-btn">
                    <i className="fi flaticon-bag"></i>{" "}
                    <span className="cart-count">{carts.length}</span>
                  </button>
                  <div
                    className={`mini-cart-content ${
                      isCartShow ? "mini-cart-content-toggle" : ""
                    }`}
                  >
                    <div className="d-flex justify-content-between w-100 sidebar-inner">
                      <h3>Cart</h3>
                      <button onClick={cartHandler} className="mini-cart-close">
                        <i className="ti-close"></i>
                      </button>
                    </div>
                    <div className="mini-cart-items">
                      {carts &&
                        carts.length > 0 &&
                        carts.map((cart, crt) => (
                          <div className="mini-cart-item clearfix" key={crt}>
                            <div className="mini-cart-item-image">
                              <span>
                                <img
                                  src="https://www.dextercoffees.com/assets/images/shop/Dexter_Cafe.png"
                                  alt="icon"
                                />
                              </span>
                            </div>
                            <div className="mini-cart-item-des">
                              <p>{cart.title} </p>
                              <span className="mini-cart-item-price">
                                ${cart.price} x {cart.qty}
                              </span>
                              <span className="mini-cart-item-quantity">
                                <button
                                  onClick={() => props.removeFromCart(cart.id)}
                                  className="btn btn-sm btn-danger"
                                >
                                  <i className="ti-close"></i>
                                </button>{" "}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="mini-cart-action clearfix">
                      <span className="mini-checkout-price">
                        Total: ${totalPrice(carts)}
                      </span>
                      <div className="mini-btn">
                        <Link
                          onClick={ClickHandler}
                          to="/checkout"
                          className="view-cart-btn s1"
                        >
                          Checkout
                        </Link>
                        <Link
                          onClick={ClickHandler}
                          to="/cart"
                          className="view-cart-btn"
                        >
                          View Cart
                        </Link>
                      </div>
                    </div>
                    {/* <div className="visible-icon">
                        <img src={min3} alt="icon" />
                      </div> */}
                  </div>
                </div>
                <div className="header-wishlist-form-wrapper">
                  <button
                    onClick={wishlistHandler}
                    className="wishlist-toggle-btn"
                  >
                    <i className="fi flaticon-heart"></i>{" "}
                    <span className="cart-count">{wishs.length}</span>{" "}
                  </button>
                  <div
                    className={`mini-wislist-content ${
                      isWishlistShow ? "mini-cart-content-toggle" : ""
                    }`}
                  >
                    <div className="d-flex justify-content-between w-100 sidebar-inner">
                      <h3>Wishlist</h3>
                      <button
                        onClick={wishlistHandler}
                        className="mini-cart-close"
                      >
                        <i className="ti-close"></i>
                      </button>
                    </div>
                    <div className="mini-cart-items">
                      {wishs &&
                        wishs.length > 0 &&
                        wishs.map((wish, i) => (
                          <div className="mini-cart-item clearfix" key={i}>
                            <div className="mini-cart-item-image">
                              <span>
                                <img
                                  src="https://www.dextercoffees.com/assets/images/shop/Dexter_Cafe.png"
                                  alt="icon"
                                />
                              </span>
                            </div>
                            <div className="mini-cart-item-des">
                              <p>{wish.title} </p>
                              <span className="mini-cart-item-price">
                                ${wish.price}
                              </span>
                              <span className="mini-cart-item-quantity">
                                <button
                                  onClick={() =>
                                    props.removeFromWishList(wish.id)
                                  }
                                  className="btn btn-sm btn-danger"
                                >
                                  <i className="ti-close"></i>
                                </button>{" "}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="mini-cart-action clearfix">
                      <span className="mini-checkout-price">
                        Total: ${totalwishlistprice}
                      </span>
                      <div className="mini-btn">
                        <Link
                          onClick={ClickHandler}
                          to="/checkout"
                          className="view-cart-btn s1"
                        >
                          Checkout
                        </Link>
                        <Link
                          onClick={ClickHandler}
                          to="/wishlist"
                          className="view-cart-btn"
                        >
                          View Wishlist
                        </Link>
                      </div>
                    </div>
                    {/* <div className="visible-icon">
                        <img src={min3} alt="icon" />
                      </div> */}
                  </div>
                </div>
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
    wishs: state.wishList.w_list,
  };
};

export default connect(mapStateToProps, { removeFromCart, removeFromWishList })(
  Header
);
