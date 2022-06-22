import { combineReducers } from "redux";
import languageReducer from "./language";

export default combineReducers({
  lang: languageReducer,
});
