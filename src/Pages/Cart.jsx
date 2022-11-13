import CartItem from "../Components/CartItem";
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getCartData, deleteCartItem } from "../Redux/AppReducer/action";
import { Link } from "react-router-dom";
import styles from "../Styles/Cart.module.css";
import Footer from '../Components/Footer'

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
  const total = cartData.reduce((acc,item)=>{
    return acc+item.price
   },0)

  return (

    <div>
      {
        cartData.map((e) => (
          <CartItem key={e.id} {...e} removeCartItem={removeCartItem} />
        ))
      }
      {
        <div className={styles.continueShop}>
          <button><Link to="/" >Continue Shopping</Link></button>
          <div>
            <div><h3>Subtotal: {total}</h3></div>
            <div><h3>Discount:  --</h3></div>
            <div><h2>Total: {total}</h2></div>
          </div>
          <button><Link to='/shipping'>Checkout</Link></button>
        </div>
      }
      <Footer />
    </div>
  );
};
