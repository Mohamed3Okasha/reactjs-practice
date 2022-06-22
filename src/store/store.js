import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/combineReducers";

export const store = createStore(reducers, composeWithDevTools());
