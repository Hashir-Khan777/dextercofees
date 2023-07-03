import React, { Fragment } from "react";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { removeFromWishList, addToCart } from "../../store/actions/action";
import { ImBin } from "react-icons/im";
import { BsCart3 } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";

const WishlistPage = (props) => {
  const { wishs } = props;

  return (
    <Fragment>
      <Navbar hClass={"header-style-2"} />
      <PageTitle pageTitle={"Wishlist"} pagesub={"Wishlist"} />
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
                          <th className="ptice">Price</th>
                          <th className="pr">Stock Status</th>
                          <th className="remove remove-b">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishs && wishs.length > 0 ? (
                          wishs.map((wish, crt) => (
                            <tr key={crt}>
                              <td className="images">
                                <LazyLoadImage
                                  src={wish.image}
                                  alt={wish.name}
                                  effect="blur"
                                />
                              </td>
                              <td className="product">
                                <ul>
                                  <li className="first-cart">{wish.name} </li>
                                  <li>Brand : {wish.roastType}</li>
                                </ul>
                              </td>
                              <td className="ptice">${wish.price}</td>
                              <td className="stock">{wish.quantity}</td>
                              <td className="action">
                                <ul>
                                  <li className="c-btn">
                                    <Link to="/cart" className="c-btn">
                                      {/* <i className="fi flaticon-shopping-cart"></i> */}
                                      <BsCart3 size={26} />
                                    </Link>
                                  </li>
                                  <li className="w-btn">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        props.removeFromWishList(wish.id)
                                      }
                                    >
                                      {/* <i className="fi flaticon-delete"></i> */}
                                      <ImBin size={26} className="pb-1" />
                                    </button>{" "}
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
    wishs: state.wishList.w_list,
  };
};
export default connect(mapStateToProps, { removeFromWishList, addToCart })(
  WishlistPage
);
