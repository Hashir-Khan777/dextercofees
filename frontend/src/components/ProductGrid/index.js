import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DefaultModal from "../Modal";

const ProductGrid = ({ products, addToCartProduct, addToWishListProduct }) => {
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
    <div className="product-wrap">
      <div className="row align-items-center justify-content-start">
        {products.length > 0 ? (
          products.map((product, pitem) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 shop-items"
              key={pitem}
            >
              <div className="product-item">
                <div className="product-img p-3">
                  <LazyLoadImage
                    src={product.image}
                    alt={product.name}
                    effect="blur"
                  />
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
                        title="Add to Cart"
                        onClick={() => handleClickOpen(product)}
                      >
                        <i className="fi ti-eye"></i>
                      </button>
                    </li>
                    <li>
                      <button
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Add to Cart"
                        onClick={() => addToWishListProduct(product)}
                      >
                        <i className="fi flaticon-like"></i>
                      </button>
                    </li>
                  </ul>
                  <div className="offer-thumb">
                    <span>New</span>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="text-uppercase">
                    <Link
                      onClick={ClickHandler}
                      to={`/product-single/${product._id}`}
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <div className="product-btm">
                    <div className="product-price">
                      <ul>
                        <li>${product.price}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data-found">No Data Found</p>
        )}
      </div>
      <DefaultModal
        addToCartProduct={addToCartProduct}
        open={open}
        onClose={handleClose}
        product={state}
      />
    </div>
  );
};

export default ProductGrid;
