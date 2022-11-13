import axios from "axios";
import * as types from "./actionTypes"


const getProductRequest = () => {
  return {

    type: types.GET_PRODUCTS_REQUEST,
  }
}

const getNewArrivalRequest =()=>{
  return{

      type: types.GET_NEWARRIVAL_REQUEST,
  }
}

const addProductRequest = () => {
  return {
    type: types.ADD_PRODUCT_REQUEST,
  };
};


  const deleteNewArrivalRequest = () => {
    return {
      type: types.DELETE_NEWARRIVAL_REQUEST,
    };
  };


  const editNewArrivalRequest = () => {
    return {
      type: types.EDIT_NEWARRIVAL_REQUEST,
      
    };
  };
  
  const updateNewArrivalRequest = () => {
    return {
      type: types.UPDATE_NEWARRIVAL_REQUEST,
    };
  };

  export const setNewArrivalUpdated = (payload) => {
    return {
      type: types.SET_NEWARRIVAL_UPDATED,
      payload
    };
  };


const addCartSuccess = (payload) => {
  // console.log(payload);
  return {
    type: types.ADD_CART_SUCCESS,
    payload
  }
}



const getProduct = (queryParams) => (dispatch) => {
  dispatch(getProductRequest());
  return axios.get(`http://localhost:8080/products`, queryParams)
    .then((res) => {
      dispatch({
        type: types.GET_PRODUCTS_SUCCESS,
        payload: res.data,
      });
      // console.log(res.data)
    })
    .catch((err) => {
      dispatch({
        type: types.GET_PRODUCTS_FAILURE,
      })
      console.log(err)
    })
}


const addProduct = (product) => (dispatch) => {

    dispatch(addProductRequest());
    return axios
      .post(`http://localhost:8080/newarrival`,product)
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

})
};

const getCartData = () => (dispatch) => {
  // dispatch(getProductRequest());
  return axios.get(`http://localhost:8080/cartData`)
    .then((res) => {
      dispatch(addCartSuccess(res.data))
      // console.log(res.data)
    })
    .catch((err) => { console.log(err) })
}

const AddCartData = (payload) => (dispatch) => {
  axios.post(`http://localhost:8080/cartData`, payload)
    .then((res) => {
      // console.log(res.data)
    })
    .catch((err) => {
      dispatch({
        type: types.ADD_CART_FAILURE,
      })
    })
}

const deleteCartItem = (id) => (dispatch) => {
  axios.delete(`http://localhost:8080/cartData/${id}`)
    .then((res) => {
      dispatch(getCartData());
    })
    .catch((e)=>console.log(e))
}




  const getNewArrival = (queryParams) =>(dispatch) =>{
    dispatch(getNewArrivalRequest());
    return axios.get(`http://localhost:8080/newarrival`,queryParams)
    .then((res)=>{
        dispatch({
            type: types.GET_NEWARRIVAL_SUCCESS,
            payload: res.data,
        });
        console.log(res.data)
    })
    .catch((err)=>{
        dispatch({
            type: types.GET_NEWARRIVAL_FAILURE,
        })
        console.log(err)
    })
}

const deleteNewArrival = (id) => (dispatch) => {
  dispatch(deleteNewArrivalRequest());
  dispatch(getNewArrivalRequest());
  return axios
    .delete(`http://localhost:8080/newarrival/${id}`)
    .then((res) => {
      dispatch({
        type: types.DELETE_NEWARRIVAL_SUCCESS,
        
      });
      
      
      
      console.log(res)
    })
    .catch((err) => {
      dispatch({
        type: types.DELETE_NEWARRIVAL_FAILURE,
      });
    });
};

const editNewArrival = (id) => (dispatch) => {
  dispatch(editNewArrivalRequest());
  return axios
    .get(`http://localhost:8080/newarrival/${id}`)
    .then((res) => {
      
      dispatch({
        type: types.EDIT_NEWARRIVAL_SUCCESS,
        payload: res.data,
      });

    })
    .catch((err) => {
      dispatch({
        type: types.EDIT_NEWARRIVAL_FAILURE,
      });
    });
};

const updateNewArrival = (newarrival, id) => (dispatch) => {
  dispatch(updateNewArrivalRequest());
  return axios
    .patch(`http://localhost:8080/newarrival/${id}`,newarrival)
    .then((res) => {
      dispatch({
        type: types.UPDATE_NEWARRIVAL_SUCCESS,
        
      });
      console.log(res.data)
    })
    .catch((err) => {
      dispatch({
        type: types.UPDATE_NEWARRIVAL_FAILURE,
      });
      console.log(err)
    });
};
export const saveShippingInfo=(data)=>{
  // console.log("data",data)
  return{
   
      type:types.SAVE_SHIPPING_INFO,
      payload:data
  }
}

export {getProduct, getProductRequest, addProduct, addProductRequest, 
  getNewArrival, getNewArrivalRequest, deleteNewArrival, deleteNewArrivalRequest,
  editNewArrival,editNewArrivalRequest,updateNewArrival,updateNewArrivalRequest,addCartSuccess,
  AddCartData,getCartData,deleteCartItem
}



