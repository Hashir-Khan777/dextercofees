import {
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  VERIFY_EMAIL_FAIL,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
} from "../actions/type";

const initState = {
  loading: false,
  data: {},
  token: null,
  resettoken: null,
};

export const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
      };

    case REGISTER_REQUEST:
      return {
        loading: true,
      };

    case FORGOT_PASSWORD_REQUEST:
      return {
        loading: true,
      };

    case RESET_PASSWORD_REQUEST:
      return {
        loading: true,
      };

    case VERIFY_EMAIL_REQUEST:
      return {
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        token: null,
      };

    case VERIFY_EMAIL_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        token: null,
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        loading: false,
        resettoken: action.payload,
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        loading: false,
        resettoken: null,
      };

    case REGISTER_SUCCESS:
      return {
        loading: false,
        token: action.payload,
      };

    case LOGIN_FAIL:
      return {
        loading: false,
      };

    case REGISTER_FAIL:
      return {
        loading: false,
      };

    case FORGOT_PASSWORD_FAIL:
      return {
        loading: false,
      };

    case RESET_PASSWORD_FAIL:
      return {
        loading: false,
      };

    case VERIFY_EMAIL_FAIL:
      return {
        loading: false,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        data: {},
        token: null,
      };

    default:
      return state;
  }
};
