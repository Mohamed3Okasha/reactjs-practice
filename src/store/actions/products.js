import axios from "axios";

export const GET_PRODUCTS_LIST = "GET_PRODUCTS_LIST";

export const getProductsList = () => (dispatch) => {
  return axios
    .get("http://localhost:3000/products/")
    .then((res) => {
      console.log("Entered getProductsList Dispatch");
      dispatch({
        type: GET_PRODUCTS_LIST,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
