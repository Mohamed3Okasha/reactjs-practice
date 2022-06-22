import { combineReducers } from "redux";
import languageReducer from "./language";
import productReducer from "./products";

export default combineReducers({
  lang: languageReducer,
  products: productReducer,
});
