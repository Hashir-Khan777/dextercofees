import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ProductTabMenu from "../ProductTabMenu";
import DefaultModal from "../Modal";
import { FaCoffee } from "react-icons/fa";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import Cookies from "universal-cookie";
// import api from "../../api";

const ProductSingleSec = ({ item, addToCart }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const push = useNavigate();
  const cookies = new Cookies();

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

  const products = api();

  const [qty, setQty] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState({});

  const handleClickOpen = (item) => {
    setOpen(true);
    setState(item);
  };

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <div className="product-single-section section-padding">
        <div className="container">
          <div className="product-details">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="product-single-img">
                  <div className="product-active">
                    <div className="item">
                      <Zoom>
                        <img
                          alt="Dexter Coffee"
                          src={item.proImg}
                          // width="500"
                        />
                      </Zoom>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="product-single-content">
                  <h5>{item.title}</h5>
                  <h6>${item.price}</h6>
                  {/* <ul className="rating">
                  <li>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                </ul> */}
                  <p>{item.description}</p>
                  {/* <div className="product-filter-item color">
                  <div className="color-name">
                    <span>Color :</span>
                    <ul>
                      <li className="color1">
                        <input id="a1" type="radio" name="color" value="30" />
                        <label htmlFor="a1"></label>
                      </li>
                      <li className="color2">
                        <input id="a2" type="radio" name="color" value="30" />
                        <label htmlFor="a2"></label>
                      </li>
                      <li className="color3">
                        <input id="a3" type="radio" name="color" value="30" />
                        <label htmlFor="a3"></label>
                      </li>
                    </ul>
                  </div>
                </div> */}
                  <div className="product-filter-item color filter-size pt-3">
                    <div className="color-name">
                      <span>Roast Type :</span>
                      <div className="ms-3 roast-type">{item.brand}</div>
                    </div>
                  </div>
                  <div className="pro-single-btn d-flex align-items-center">
                    <Grid className="quantity cart-plus-minus mt-2">
                      <Button
                        className="dec qtybutton"
                        onClick={() => setQty(qty <= 1 ? 1 : qty - 1)}
                      >
                        -
                      </Button>
                      <input
                        value={qty}
                        onChange={() => setQty(qty)}
                        type="text"
                      />
                      <Button
                        className="inc qtybutton"
                        onClick={() => setQty(qty + 1)}
                      >
                        +
                      </Button>
                    </Grid>
                    <a
                      className="btn btn_primary text-uppercase ms-4"
                      onClick={() => addToCartProduct(item, qty)}
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <ProductTabMenu /> */}
        </div>
      </div>
      <section className="product-area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="category-title">
                <div className="d-flex align-items-center small-headings mb-2">
                  <FaCoffee color="#C7A17A" size={20} />
                  <p className="text-uppercase ps-2 pb-0 mb-0">
                    DEXTER COFFEE SHOP
                  </p>
                </div>
                <h2>OUR RELATED PRODUCT</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 category-title">
              <div className="abtn_wrap text-lg-end text-md-end btn-end">
                <Link
                  to={"/shop"}
                  className="btn btn_border border_black text-uppercase"
                >
                  See all products
                </Link>
              </div>
            </div>
          </div>
          <div className="product-wrap">
            <div className="row align-items-center justify-content-start">
              {products.length > 0 &&
                products.slice(0, 4).map((product, pitem) => (
                  <div
                    className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 shop-items"
                    key={pitem}
                  >
                    <div className="product-item">
                      <div className="product-img p-3">
                        <img src={product.proImg} alt="" />
                        <ul>
                          <li>
                            <button
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Add to Cart"
                              onClick={() => addToCartProduct(product)}
                            >
                              <i className="fi flaticon-shopping-cart"></i>
                            </button>
                          </li>
                          <li>
                            <button
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Quick View"
                              onClick={() => handleClickOpen(product)}
                            >
                              <i className="fi ti-eye"></i>
                            </button>
                          </li>
                          <li>
                            <button
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Add to Wishlist"
                              onClick={() => addToWishListProduct(product)}
                            >
                              <i className="fi flaticon-like"></i>
                            </button>
                          </li>
                        </ul>
                        <div className="offer-thumb">
                          <span>{product.offer}</span>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3 className="text-uppercase">
                          <Link
                            onClick={ClickHandler}
                            to={`/product-single/${product.id}`}
                          >
                            {product.title}
                          </Link>
                        </h3>
                        <div className="product-btm">
                          <div className="product-price">
                            <ul>
                              <li>${product.price}</li>
                              <li>${product.delPrice}</li>
                            </ul>
                          </div>
                          {/* <div className="product-ratting">
                          <ul>
                            <li>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                            <li>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </li>
                          </ul>
                        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <DefaultModal
          addToCartProduct={addToCartProduct}
          open={open}
          onClose={handleClose}
          product={state}
        />
      </section>
    </>
  );
};

export default ProductSingleSec;
