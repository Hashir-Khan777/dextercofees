import {
  CONTACT_FAIL,
  CONTACT_REQUEST,
  CONTACT_SUCCESS,
} from "../actions/type";

const init = {
  loading: false,
};

export const contactReducer = (state = init, action) => {
  switch (action.type) {
    case CONTACT_REQUEST:
      return {
        loading: true,
      };

    case CONTACT_SUCCESS:
      return {
        loading: false,
      };

    case CONTACT_FAIL:
      return {
        loading: false,
      };

    default:
      return state;
  }
};
