import { GET_PRODUCTS_LIST } from "../actions/products";

const INITIAL_STATE = {
  list: [],
  details: {},
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PRODUCTS_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
