import axios from "axios";
import axionInstance from "../../network/axiosInstance";

export const GET_PRODUCTS_LIST = "GET_PRODUCTS_LIST";

export const getProductsList = () => (dispatch) => {
  return axionInstance
    .get("/products")
    .then((res) => {
      console.log("Entered getProductsList Dispatch");
      dispatch({
        type: GET_PRODUCTS_LIST,
        payload: res.data,
      });
    })
    .catch((err) => console.log("error: ", err));
};
