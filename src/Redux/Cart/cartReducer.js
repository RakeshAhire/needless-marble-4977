


import {ADD_TO_CART,REMOVE_CART_ITEM,DELETE_ITEM} from "./cartaction"
const init = {
    cartItems: [],
    totalQuantity : 0
}

export const cartReducer = (
    
    store =init,
    {type,payload}
  ) => {
    switch (type) {
    
      case ADD_TO_CART:
       
        const item = payload;
  
        const isItemExist = store.cartItems.find(
          (i) => i._id === item._id
        );
  
        if (isItemExist) {
            isItemExist.quantity++
            isItemExist.totalprice+= payload.price
           
        } else {
           return {
            ...store,
            cartItems: [...store.cartItems,{...payload,quantity:1,totalprice:payload.price}],
          };
        }
  
      // case REMOVE_CART_ITEM:

      //   const items = payload;

      //   const isItemExists = store.cartItems.find(
      //     (i) => i._id === items._id
      //   );
      //   //console.log(isItemExists)
      //   isItemExists.quantity--
      //   isItemExists.totalprice -= payload.price
        
  
      case DELETE_ITEM :return{  ...store,
        cartItems: store.cartItems.filter((i) => i._id != payload),}
  
      default:
        return store;
    }
    
  };