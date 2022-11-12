import {
  ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS,
  ADD_CART_REQUEST, ADD_CART_SUCCESS, ADD_CART_FAILURE
} from "./actionTypes";


const initialState = {
  products: [],
  cartData: [],
  isLoading: false,
  isError: false,
};



export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {

    case GET_PRODUCTS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      }

    case GET_PRODUCTS_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        products: payload,
      }

    case GET_PRODUCTS_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      }

    // case DELETE_PRODUCT_REQUEST:
    // return {
    //   ...oldState,
    //   isLoading: true,
    // }

    // case DELETE_PRODUCT_SUCCESS:
    // return {
    //   ...oldState,
    //   isLoading: false,
    //   products: payload,
    // }

    // case DELETE_PRODUCT_FAILURE:
    // return {
    //   ...oldState,
    //   isLoading: false,
    //   isError: true,
    // }


    case ADD_PRODUCT_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      }

    case ADD_PRODUCT_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        products: payload,
      }

    case ADD_PRODUCT_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      }

    case ADD_CART_SUCCESS:
      return {
        ...oldState,
        cartData:[...initialState.cartData,payload]
      } 
    
    
      default:
      return oldState
  }


};