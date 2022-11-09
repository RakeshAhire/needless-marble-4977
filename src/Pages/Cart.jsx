import { CartItem } from "../Cart/CartItem";
import styles from "./Cart.module.css";
import axios from "axios"
import {useState,useEffect} from "react"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "@mui/material";
import { Product } from "../UI/Product";


export const Cart = () => {
  const setOrder=()=>{
    fetch(`http://localhost:7005/placeorder`,{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(Product)
  })
   localStorage.setItem('placeorder',JSON.stringify(Product))

  }

  const cartData = useSelector((store)=>{
    return  store.cartItems.cartItems
   })
   console.log("cartData",cartData)
   

   let total = 0;
 cartData.map((item)=>{
   total+=item.totalprice
 })
 console.log(total)
  return (
    
    <div>
      <Card>
        <div className={`${styles.headingContainer} ${styles.InsideDivText}`}>
          <div className={styles.SelectedItemDiv}>
            <span>Selected Item</span>
          </div>
          <div className={styles.remaining}>
            {" "}
            <span>Unit Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
            <span>Operation</span>
          </div>
        </div>
      </Card>
      <CartItem></CartItem>
      <Card>
        <div className={styles.boxShadowContainer}>
        <div className={styles.assurance}>
          <div className={styles.Guarantee}>
            <span className={styles.fourtyfivedays}>
              <div>
                <img
                  src="https://css.gbtcdn.com/imagecache/gbw/img/site/money_back@.png"
                  alt=""
                  srcset=""
                  className={styles.logoImageContainer}
                />
              </div>
              <div>
                <div> 45 Days</div>
                <div>Money Back Guarantee</div>
              </div>
            </span>
            <span className={styles.fourtyfivedays}>
              <div>
                <img
                  src="https://css.gbtcdn.com/imagecache/gbw/img/site/repair@.png"
                  alt=""
                  srcset=""
                  className={styles.logoImageContainer}
                />
              </div>
              <div>
                <div> 360 Days</div>
                <div>Free Repair Warranty</div>
              </div>
            </span>
          </div>

          <div className={styles.alignLeft}>
            <table>
              <tbody>
                <tr>
                  <td>Your subtotal </td>
                  <td>{`$${total}`}</td>
                </tr>
                <tr>
                  <td>Promotion</td>
                  <td>:-$0.00</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>
                    <h2 className={styles.TotalText}>{`$${total}`}</h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div className={styles.paymentoptioncontainer}>
          <div>
            <Link to={"/"}>Continue Shopping </Link>
          </div>
          <div className={styles.checkout}>
            <img
              src="https://css.gbtcdn.com/imagecache/gbw/img/buynow_en.93a4b6e.png"
              alt=""
            />
            <span>Or</span>
            <img
              src="https://css.gbtcdn.com/imagecache/gbw/img/paypal_credit_en.10b3871.png"
              alt=""
            />
            <span>Or</span>
            <Link to={"/shipping"} ><button className={styles.checkoutButton} onClick={setOrder}>Checkout</button></Link>
          </div>
        </div>
        </div>
        
       
      </Card>
      <Card>
      <div className={styles.AcceptedPaymentMethod}>
           <p>We Accept:</p>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3Ocn9J1bc4KS6eZSI99m-60nlAAVuPzOeA&usqp=CAU" alt="" /><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKmBen6LXOcj2RS4j8kVxuNwVXdlZlH9ssw&usqp=CAU" alt="" /><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1kOqlF34uhfybYDzd0nQcgubhC9bvIvI_w&usqp=CAU" alt="" />
        </div>
      </Card>
     
    </div>
  );
};
