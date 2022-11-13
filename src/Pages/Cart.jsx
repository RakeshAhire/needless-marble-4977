import CartItem from "../Components/CartItem";
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getCartData, deleteCartItem } from "../Redux/AppReducer/action";

export const Cart = () => {
  const cartData = useSelector((store) => store.AppReducer.cartData);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartData())
  }, [cartData.length]);

  const setOrder = () => {

  }

  const removeCartItem = (id) => {
    dispatch(deleteCartItem(id))
  }
  let total = 0;
  //  cartData.map((item)=>{
  //    total+=item.totalprice
  //  })

  return (

    <div>
      {
        cartData.map((e) => (
          <CartItem key={e.id} {...e} removeCartItem={removeCartItem} />
        ))
      }

    </div>
  );
};
