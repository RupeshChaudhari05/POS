import axios from "axios";
import { ADD_TO_CART, DELETE_TO_CART, GET_PRODUCTS } from "../../helper/Api";

export const getAllProduct = () => {
  return async function (dispach, action) {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      const result = await data.data;
      dispach({ type: GET_PRODUCTS, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (id) => {
  return async function (dispach, action) {
    try {
      const data = await axios.get(`https://fakestoreapi.com/products/${id}`);
      const result = await data.data;
      dispach({ type: ADD_TO_CART, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCartItem = (id) => {
  return async function (dispach, action) {
    try {
      //const data = await axios.get(`https://fakestoreapi.com/products/${id}`);
      // const result = await data.data;
      dispach({ type: DELETE_TO_CART, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};
