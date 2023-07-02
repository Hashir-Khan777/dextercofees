import React, { Fragment, useState } from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { totalPrice } from "../../utils";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/actions/action";
import { ImBin } from "react-icons/im";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CartPage = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { carts } = props;

  return (
    <Fragment>
      <Navbar hClass={"header-style-2"} />
      <PageTitle pageTitle={"Cart"} pagesub={"Cart"} />
      <div className="cart-area section-padding">
        <div className="container">
          <div className="form">
            <div className="cart-wrapper">
              <div className="row">
                <div className="col-12">
                  <form action="cart">
                    <table className="table-responsive cart-wrap">
                      <thead>
                        <tr>
                          <th className="images images-b">Image</th>
                          <th className="product-2">Product Name</th>
                          <th className="pr">Quantity</th>
                          <th className="ptice">Price</th>
                          <th className="stock">Total Price</th>
                          <th className="remove remove-b">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {carts && carts.length > 0 ? (
                          carts.map((catItem, crt) => (
                            <tr key={crt}>
                              <td className="images">
                                <LazyLoadImage src={catItem.proImg} alt={catItem.title} effect="blur" />
                              </td>
                              <td className="product">
                                <ul>
                                  <li className="first-cart">
                                    {catItem.title}
                                  </li>
                                  <li>Brand : {catItem.brand}</li>
                                  <li>Size : {catItem.size}</li>
                                </ul>
                              </td>
                              <td className="stock">
                                <div className="pro-single-btn">
                                  <Grid className="quantity cart-plus-minus">
                                    <Button
                                      className="dec qtybutton"
                                      onClick={() =>
                                        props.decrementQuantity(catItem.id)
                                      }
                                    >
                                      <GrFormSubtract />
                                    </Button>
                                    <input value={catItem.qty} type="text" />
                                    <Button
                                      className="inc qtybutton"
                                      onClick={() =>
                                        props.incrementQuantity(catItem.id)
                                      }
                                    >
                                      <IoMdAdd />
                                    </Button>
                                  </Grid>
                                </div>
                              </td>
                              <td className="ptice">
                                ${catItem.qty * catItem.price}
                              </td>
                              <td className="stock">
                                ${catItem.qty * catItem.price}
                              </td>
                              <td className="action">
                                <ul>
                                  <li
                                    className="w-btn"
                                    onClick={() =>
                                      props.removeFromCart(catItem.id)
                                    }
                                  >
                                    {/* <i className="fi flaticon-delete"></i> */}
                                    <ImBin size={28} />
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <p className="no-data-found">No Data Found</p>
                        )}
                      </tbody>
                    </table>
                  </form>
                  <div className="submit-btn-area">
                    <ul>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          className="btn btn_primary text-uppercase"
                          to="/our-coffees"
                        >
                          Continue Shopping
                        </Link>
                      </li>
                      {/* <li>
                        <button type="submit">Update Cart</button>
                      </li> */}
                    </ul>
                  </div>
                  <div className="cart-product-list">
                    <ul>
                      <li>
                        Total product<span>( {carts.length} )</span>
                      </li>
                      <li>
                        Sub Price<span>${totalPrice(carts)}</span>
                      </li>
                      <li>
                        Vat<span>$0</span>
                      </li>
                      <li>
                        Eco Tax<span>$0</span>
                      </li>
                      <li>
                        Delivery Charge<span>$0</span>
                      </li>
                      <li className="cart-b">
                        Total Price<span>${totalPrice(carts)}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="submit-btn-area">
                    <ul>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          className="btn btn_primary text-uppercase"
                          to="/checkout"
                        >
                          Proceed to Checkout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};
export default connect(mapStateToProps, {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
})(CartPage);
