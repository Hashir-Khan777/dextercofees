import * as types from "./type";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  REMOVE_FROM_COMPARE_LIST,
  ADD_TO_COMPARE,
} from "./type";
import axios from "axios";
import Cookies from "universal-cookie";

const date = new Date();
const cookies = new Cookies();

export const fetchProductsBegin = () => ({
  type: types.FETCH_PRODUCTS_BEGIN,
});

export const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const addToCart = (product, qty, color, size) => (dispatch) => {
  toast.success("Item Added to Cart");
  dispatch({
    type: types.ADD_TO_CART,
    product,
    qty,
    color,
    size,
  });
};

export const removeFromCart = (product_id) => (dispatch) => {
  toast.success("Item Removed from Cart");
  dispatch({
    type: types.REMOVE_FROM_CART,
    product_id,
  });
};

export const incrementQuantity = (product_id) => (dispatch) => {
  dispatch({
    type: types.INCREMENT_QUANTITY,
    product_id,
  });
};

export const decrementQuantity = (product_id) => (dispatch) => {
  dispatch({
    type: types.DECREMENT_QUANTITY,
    product_id,
  });
};

export const addToWishList = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_WISHLIST,
    product,
  });
};

export const removeFromWishList = (id) => (dispatch) => {
  toast.error("Item removed from WishList");
  dispatch({
    type: REMOVE_FROM_WISHLIST,
    id,
  });
};

export const addToCompareList = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_COMPARE,
    product,
  });
};

export const removeFromCompareList = (product) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_COMPARE_LIST,
    product,
  });
};

export const login = (userCredentials) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/login`,
      userCredentials
    );
    const expires = new Date(date.setDate(date.getDate() + 15));
    cookies.set("_user", data.token, {
      path: "/",
      secure: true,
      expires,
    });
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: data,
    });
    toast.success("Login Successfully");
  } catch (err) {
    dispatch({
      type: types.LOGIN_FAIL,
    });
    toast.error(
      err.response.data.message ? err.response.data.message : err.message
    );
  }
};

export const register = (userCredentials) => async (dispatch) => {
  dispatch({
    type: types.REGISTER_REQUEST,
  });
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/register`,
      userCredentials
    );
    const expires = new Date(date.setHours(date.getHours() + 1));
    cookies.set("_token", data.token, {
      path: "/",
      secure: true,
      expires,
    });
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: data.token,
    });
    toast.success("Verification code has been sent to your email");
  } catch (err) {
    dispatch({
      type: types.REGISTER_FAIL,
    });
    toast.error(
      err.response.data.message ? err.response.data.message : err.message
    );
  }
};

export const verifyEmail = (userCredentials) => async (dispatch) => {
  dispatch({
    type: types.VERIFY_EMAIL_REQUEST,
  });
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/verify/email`,
      userCredentials,
      { headers: { Authorization: `Bearer ${cookies.get("_token")}` } }
    );
    cookies.remove("_token");
    const expires = new Date(date.setDate(date.getDate() + 15));
    cookies.set("_user", data.token, {
      path: "/",
      secure: true,
      expires,
    });
    dispatch({
      type: types.VERIFY_EMAIL_SUCCESS,
      payload: data,
    });
    toast.success("Email has been verified");
  } catch (err) {
    dispatch({
      type: types.VERIFY_EMAIL_FAIL,
    });
    toast.error(
      err.response.data.message ? err.response.data.message : err.message
    );
  }
};

export const forgotPassword = (forgotPasswordForm) => async (dispatch) => {
  dispatch({
    type: types.FORGOT_PASSWORD_REQUEST,
  });
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/forgot/password`,
      forgotPasswordForm
    );
    const expires = new Date(date.setHours(date.getHours() + 1));
    cookies.set("_resettoken", data.token, {
      path: "/",
      secure: true,
      expires,
    });
    dispatch({
      type: types.FORGOT_PASSWORD_SUCCESS,
      payload: data.token,
    });
  } catch (err) {
    dispatch({
      type: types.FORGOT_PASSWORD_FAIL,
    });
    toast.error(
      err.response.data.message ? err.response.data.message : err.message
    );
  }
};

export const resetPassword = (resetPasswordForm) => async (dispatch) => {
  dispatch({
    type: types.RESET_PASSWORD_REQUEST,
  });
  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/reset/password`,
      resetPasswordForm,
      { headers: { Authorization: `Bearer ${cookies.get("_resettoken")}` } }
    );
    cookies.remove("_resettoken");
    toast.success("Password has been reset");
    dispatch({
      type: types.RESET_PASSWORD_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: types.RESET_PASSWORD_FAIL,
    });
    toast.error(
      err.response.data.message ? err.response.data.message : err.message
    );
  }
};

export const logout = () => {
  cookies.remove("_user", {
    path: "/",
    secure: true,
  });

  toast.success("Logout successfully");
};

export const sendMessage = (contactForm) => async (dispatch) => {
  dispatch({
    type: types.CONTACT_REQUEST,
  });
  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/api/contact`,
      contactForm
    );
    toast.success("Thanks for your message");
    dispatch({
      type: types.CONTACT_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: types.CONTACT_FAIL,
    });
    toast.error(
      err.response.data.message ? err.response.data.message : err.message
    );
  }
};
