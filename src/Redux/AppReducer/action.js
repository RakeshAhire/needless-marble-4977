import axios from "axios";
import { url } from "../../Api/api";
import * as types from "./actionTypes"


const getProductRequest =()=>{
    return{

        type: types.GET_PRODUCTS_REQUEST,
    }
}

const addProductRequest = () => {
    return {
      type: types.ADD_PRODUCT_REQUEST,
    };
  };

  const addCartSuccess=(payload)=>{
    console.log(payload);
    return{
      type:types.ADD_CART_SUCCESS,
      payload
    }
  }


const getProduct = (queryParams) =>(dispatch) =>{
    dispatch(getProductRequest());
    return axios.get(`http://localhost:8080/products`,queryParams)
    .then((res)=>{
        dispatch({
            type: types.GET_PRODUCTS_SUCCESS,
            payload: res.data,
        });
        console.log(res.data)
    })
    .catch((err)=>{
        dispatch({
            type: types.GET_PRODUCTS_FAILURE,
        })
        console.log(err)
    })
}


const addProduct = (product) => (dispatch) => {
    dispatch(addProductRequest());
    return axios
      .post(`http://localhost:8080/products`,product)
      .then((res) => {
        dispatch({
          type: types.ADD_PRODUCT_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: types.ADD_PRODUCT_FAILURE,
        });
      });
  };

export {getProduct, getProductRequest, addProduct, addProductRequest,addCartSuccess}