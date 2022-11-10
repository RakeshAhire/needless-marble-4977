
import axios from "axios";
    export const ADD_TO_CART = " ADD_TO_CART"
    export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"
    export const DELETE_ITEM = "DELETE_ITEM"

 
  
  
  // Add to Cart
  export const addItemsToCart = (data)=>{
     return{
         type : ADD_TO_CART,
         payload:data
     }
  }
  
   export const deleteItem = (id)=>{
        return {
            type : DELETE_ITEM,
            payload : id
        }
   } 
 
  
  // REMOVE FROM CART
  export const removeItemsFromCart = (data) => {
     return {
         type : REMOVE_CART_ITEM,
         payload:data
     }
  };
  
  