import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ProductTabMenu from "../ProductTabMenu";

const ProductSingleSec = ({ item, addToCart }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [qty, setQty] = useState(1);

  return (
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
                        alt="that wanaka tree"
                        src="https://www.dextercoffees.com/assets/images/shop/Dexter_Cafe.png"
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quis ultrices lectus lobortis, dolor et tempus porta, leo mi
                  efficitur ante, in varius felis sem ut mauris. Proin volutpat
                  lorem inorci sed vestibulum tempus. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Aliquam hendrerit sem porta
                  dolor congue sagittis Lorem ipsum dolor sit amet consectetur.
                </p>
                <div className="product-filter-item color">
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
                </div>
                <div className="product-filter-item color filter-size">
                  <div className="color-name">
                    <span>Weight :</span>
                    <ul>
                      <li className="color">
                        <input id="wa1" type="radio" name="size" value="30" />
                        <label htmlFor="wa1">4L</label>
                      </li>
                      <li className="color">
                        <input id="wa2" type="radio" name="size" value="30" />
                        <label htmlFor="wa2">2L</label>
                      </li>
                      <li className="color">
                        <input id="wa3" type="radio" name="size" value="30" />
                        <label htmlFor="wa3">500ML</label>
                      </li>
                      <li className="color">
                        <input id="wa4" type="radio" name="size" value="30" />
                        <label htmlFor="wa4">200ML</label>
                      </li>
                    </ul>
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
                    onClick={() => addToCart(item, qty)}
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductTabMenu />
      </div>
    </div>
  );
};

export default ProductSingleSec;
