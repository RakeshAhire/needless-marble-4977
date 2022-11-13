import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_NEWARRIVAL_FAILURE,
  DELETE_NEWARRIVAL_REQUEST,
  DELETE_NEWARRIVAL_SUCCESS,
  EDIT_NEWARRIVAL_FAILURE,
  EDIT_NEWARRIVAL_REQUEST,
  EDIT_NEWARRIVAL_SUCCESS,
  GET_NEWARRIVAL_FAILURE,
  GET_NEWARRIVAL_REQUEST,
  GET_NEWARRIVAL_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  SET_NEWARRIVAL_UPDATED,
  UPDATE_NEWARRIVAL_FAILURE,
  UPDATE_NEWARRIVAL_REQUEST,
  UPDATE_NEWARRIVAL_SUCCESS,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "./actionTypes";

const initialState = {
  products: [],
  newarrival: [],
  cartData: [],
  isLoading: false,
  isError: false,
  newarrivalUpdated: false,
  shippingInfo:{},
};

export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        products: payload,
      };

    case GET_PRODUCTS_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    case DELETE_NEWARRIVAL_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case DELETE_NEWARRIVAL_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        newarrival: payload,
      };

    case DELETE_NEWARRIVAL_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    case GET_NEWARRIVAL_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case GET_NEWARRIVAL_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        newarrival: payload,
      };

    case GET_NEWARRIVAL_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    case ADD_PRODUCT_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        products: payload,
      };

    case ADD_PRODUCT_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    case EDIT_NEWARRIVAL_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case EDIT_NEWARRIVAL_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        newarrival: payload,
      };

    case EDIT_NEWARRIVAL_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        
      };

    case UPDATE_NEWARRIVAL_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        newarrivalUpdated: false,
      };

    case UPDATE_NEWARRIVAL_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        newarrivalUpdated: true,
      };

    case UPDATE_NEWARRIVAL_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        newarrivalUpdated: false,
      };

    case SET_NEWARRIVAL_UPDATED:
      return {
        ...oldState,

        newarrivalUpdated: payload,
      };

    case ADD_CART_SUCCESS:
      return {
        ...oldState,
        cartData: payload,
      };
    case REMOVE_CART_ITEM: {
      return {
        ...oldState,
        cartData: payload,
      };
    }

    case SAVE_SHIPPING_INFO:
      return {
        ...oldState,
        shippingInfo: payload,
      };
    default:
      return oldState;
  }
};
