import React from "react";

const prices = [
  {
    id: 1,
    min: 50,
    max: 100,
  },
  {
    id: 2,
    min: 100,
    max: 200,
  },
  {
    id: 3,
    min: 200,
    max: null,
  },
];

const sizes = ["small", "medium", "large"];
const colors = ["fff", "000", "cf1105"];
const brands = ["flower", "hill", "forest"];

const FilterSidebar = ({ filter, changeHandler, priceChangeHandler }) => {
  return (
    <div className="col-12">
      <div className="shop-filter-wrap">
        {/* <div className="filter-item">
          <div className="shop-filter-item">
            <h2>Search</h2>
            <div className="shop-filter-search">
              <form>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button type="submit">
                    <i className="ti-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
        <div className="row w-100">
          <div className="col-lg-3 col-sm-6 col-12 px-3">
            <div className="filter-item">
              <div className="shop-filter-item">
                <h2>Price</h2>
                <ul>
                  <li>
                    <label className="topcoat-radio-button__label">
                      All prices
                      <input
                        type="radio"
                        value={""}
                        checked={!filter.price}
                        name="price"
                        onChange={changeHandler}
                      />
                      <span className="topcoat-radio-button"></span>
                    </label>
                  </li>
                  {prices.map((price) => (
                    <li>
                      <label className="topcoat-radio-button__label">
                        ${price.min} {price.max ? "- $" : ""}
                        {price.max || " and more"}
                        <input
                          checked={filter.price.id === price.id}
                          type="radio"
                          value={JSON.stringify(price)}
                          onChange={priceChangeHandler}
                          name="price"
                        />
                        <span className="topcoat-radio-button"></span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 px-3">
            <div className="filter-item">
              <div className="shop-filter-item">
                <h2>Size</h2>
                <ul>
                  <li>
                    <label className="topcoat-radio-button__label">
                      All Size
                      <input
                        checked={filter.size === ""}
                        type="radio"
                        value=""
                        onChange={changeHandler}
                        name="size"
                      />
                      <span className="topcoat-radio-button"></span>
                    </label>
                  </li>
                  {sizes.map((size) => (
                    <li>
                      <label className="topcoat-radio-button__label">
                        {size}
                        <input
                          checked={filter.size === size}
                          type="radio"
                          value={size}
                          onChange={changeHandler}
                          name="size"
                        />
                        <span className="topcoat-radio-button"></span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 px-3">
            <div className="filter-item">
              <div className="shop-filter-item">
                <h2>Brand</h2>
                <ul>
                  <li>
                    <label className="topcoat-radio-button__label">
                      All Brand
                      <input
                        checked={filter.brand === ""}
                        type="radio"
                        value=""
                        onChange={changeHandler}
                        name="brand"
                      />
                      <span className="topcoat-radio-button"></span>
                    </label>
                  </li>
                  {brands.map((brand) => (
                    <li>
                      <label className="topcoat-radio-button__label">
                        {brand}
                        <input
                          checked={filter.brand === brand}
                          type="radio"
                          value={brand}
                          onChange={changeHandler}
                          name="brand"
                        />
                        <span className="topcoat-radio-button"></span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 px-3">
            <div className="filter-item">
              <div className="shop-filter-item color">
                <h2> Color</h2>
                <div className="color-name">
                  <ul>
                    {colors.map((color) => (
                      <li>
                        <input
                          id={color}
                          onChange={changeHandler}
                          type="radio"
                          name="color"
                          value={color}
                        />
                        <label
                          style={{ background: `#${color}` }}
                          htmlFor={color}
                        ></label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FilterSidebar;
