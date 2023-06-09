import React, { Fragment, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import FilterSidebar from "../../components/FilterSidebar";
import FilterAllProduct from "../../components/FilterAllProduct";
import api from "../../api";
import {
  addToCart,
  addToWishList,
  getProducts,
} from "../../store/actions/action";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { MdKeyboardArrowDown } from "react-icons/md";

// import ExpandMoreIcon from '@material-ui/core/ExpandMore';

const ShopPage = ({ addToCart, addToWishList }) => {
  const [productsArray, setProductsArray] = useState([]);

  const [filter, setFilter] = useState({
    price: "",
    size: "",
    color: "",
    brand: "",
  });

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.data);

  const priceChangeHandler = ({ target: { name, value } }) => {
    const val = typeof value === "string" ? JSON.parse(value) : value;
    setFilter({ ...filter, [name]: val });
  };

  const changeHandler = ({ target: { name, value } }) => {
    setFilter({ ...filter, [name]: value });
  };

  const priceFIlter = (price) => {
    if (filter.price === "") {
      return true;
    } else if (filter.price.max && filter.price.min) {
      return price <= filter.price.max && price >= filter.price.min;
    } else if (filter.price.min) {
      return price >= filter.price.min;
    } else {
      return false;
    }
  };

  const addToCartProduct = (product) => {
    addToCart(product, 1, filter.color, filter.size);
  };

  const addToWishListProduct = (products) => {
    addToWishList(products);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setProductsArray(
      products
        .filter((el) => priceFIlter(el.price))
        .filter((el) => (filter.brand ? el.roastType === filter.brand : true))
    );
  }, [filter]);

  return (
    <Fragment>
      <Navbar hClass={"header-style-2"} />
      <PageTitle pageTitle={"Shop"} pagesub={"Shop"} />
      <div className="shop-section">
        <div className="container">
          <div className="filters-accordian pb-3">
            <Accordion>
              <AccordionSummary
                expandIcon={<MdKeyboardArrowDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Product Search Filter</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="row">
                    <FilterSidebar
                      filter={filter}
                      priceChangeHandler={priceChangeHandler}
                      changeHandler={changeHandler}
                    />
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="row">
            {/* <FilterSidebar
              filter={filter}
              priceChangeHandler={priceChangeHandler}
              changeHandler={changeHandler}
            /> */}
            <FilterAllProduct
              addToCartProduct={addToCartProduct}
              addToWishListProduct={addToWishListProduct}
              products={productsArray}
            />
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default connect(null, { addToCart, addToWishList })(ShopPage);
