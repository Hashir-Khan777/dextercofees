import React, { Fragment, useState } from "react";
import { Dialog, Grid, Button } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import bee from '../../images/bee2.png'
import { Link } from "react-router-dom";

const DefaultModal = ({
  maxWidth,
  open,
  onClose,
  addToCartProduct,
  product,
}) => {
  const [qty, setQty] = useState(1);

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <i className="fa fa-close"></i>
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={onClose}
        ></DialogTitle>
        <Grid className="modalBody modal-body p-0">
          <div className="product-details">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="product-single-img">
                  <div className="modal-product">
                    <div className="item">
                      <img src="https://www.dextercoffees.com/assets/images/shop/Dexter_Cafe.png" alt="Product Image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="product-single-content">
                  <h5>{product && product.title}</h5>
                  <h6>{product && product.price} USD</h6>
                  <ul className="rating">
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
                  <p>
                    {product && product.description}
                  </p>
                  <div className="product-filter-item color">
                    <div className="color-name">
                      <span>Color :</span>
                      <ul>
                        <li className="color1">
                          <input id="1" type="radio" name="color" value="30" />
                          <label htmlFor="1"></label>
                        </li>
                        <li className="color2">
                          <input id="2" type="radio" name="color" value="30" />
                          <label htmlFor="2"></label>
                        </li>
                        <li className="color3">
                          <input id="3" type="radio" name="color" value="30" />
                          <label htmlFor="3"></label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-filter-item color filter-size">
                    <div className="color-name">
                      <span>Weight :</span>
                      <ul>
                        <li className="color">
                          <input id="w1" type="radio" name="size" value="30" />
                          <label htmlFor="w1">4L</label>
                        </li>
                        <li className="color">
                          <input id="w2" type="radio" name="size" value="30" />
                          <label htmlFor="w2">2L</label>
                        </li>
                        <li className="color">
                          <input id="w3" type="radio" name="size" value="30" />
                          <label htmlFor="w3">500ML</label>
                        </li>
                        <li className="color">
                          <input id="w4" type="radio" name="size" value="30" />
                          <label htmlFor="w4">200ML</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pro-single-btn">
                    <Grid className="quantity cart-plus-minus">
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
                    <button
                      onClick={() => addToCartProduct(product, qty)}
                      className="theme-btn"
                    >
                      Add to cart
                    </button>
                  </div>
                  <div className="social-share">
                    <span>Share with : </span>
                    <ul className="socialLinks">
                      <li>
                        <Link to="/">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-youtube-play"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="m-shape">
                    <img src={bee} alt="" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default DefaultModal;
