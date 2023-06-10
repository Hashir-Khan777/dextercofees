import React, { useState } from "react";
import { Link } from "react-router-dom";

import DefaultModal from "../Modal";
import { FaCoffee } from "react-icons/fa";

const Product = ({ products, addToCartProduct, addToWishListProduct }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [open, setOpen] = React.useState(false);

  function handleClose() {
    setOpen(false);
  }

  const [state, setState] = useState({});

  const handleClickOpen = (item) => {
    setOpen(true);
    setState(item);
  };
  return (
    <section className="product-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="category-title">
              <div className='d-flex align-items-center small-headings mb-2'>
                  <FaCoffee color='#C7A17A' size={20} />
                  <p className='text-uppercase ps-2 pb-0 mb-0'>DEXTER COFFEE SHOP</p>
              </div>
              <h2>OUR POPULAR PRODUCT</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 category-title">
            <div className="abtn_wrap text-lg-end text-md-end btn-end">
              <Link to={"/shop"} className="btn btn_border border_black text-uppercase">
                See all products
              </Link>
            </div>
          </div>
        </div>
        <div className="product-wrap">
          <div className="row align-items-center justify-content-start">
            {products.length > 0 &&
              products.slice(0, 8).map((product, pitem) => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 shop-items" key={pitem}>
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
  );
};

export default Product;
