import { ADD_TO_CART, DELETE_TO_CART, GET_PRODUCTS } from "../../helper/Api";

const int = {
  ProductList: [],
  isloader: false,
  product: {},
  CartData: []
};

export const PosReducer = (state = int, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        ProductList: payload
      };
      break;
    case ADD_TO_CART:
      return {
        ...state,
        CartData: [...state.CartData, payload]
      };
    case DELETE_TO_CART:
      return {
        ...state,
        CartData: state.CartData.filter(
          (item) => parseInt(item.id) !== parseInt(payload)
        )
      };

    default:
      return state;
  }
};
