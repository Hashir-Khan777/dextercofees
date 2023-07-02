import { FETCH_SINGLE_PRODUCT, RECEIVE_PRODUCTS } from "../actions/type";

const initialState = {
  products: [],
  product: {},
  symbol: "$",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_SINGLE_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
