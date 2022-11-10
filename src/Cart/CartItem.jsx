import styles from "./CartItem.module.css";
import { Card } from "../UI/Card";
import { useEffect, useState } from "react";
import axios from "axios"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart,deleteItem ,removeItemsFromCart } from "../Redux/Cart/cartaction";
import { useCallback } from "react";

export const CartItem = () => {
  // const [Quantity, setQuantity] = useState(1);
  
  const cartData = useSelector((store)=>{
   return  store.cartItems.cartItems
  })
  console.log("cartData",cartData)
  
  const dispatch = useDispatch();
  // const cartItems = useSelector((store)=>{
  //   return store.cartItem
  // })
  

  
  const [data,setData] = useState([])
  //console.log(data)

  useEffect(() =>{
    axios.get("https://morning-scrubland-78864.herokuapp.com/addtocart").then(({data})=>{
      setData(data)
    })
  },[])

  
  const  addQuantityHandler = (item,e)=>{
   dispatch(addItemsToCart(item))
     
  }
 const decreaseQuantityHandler = (items,e)=>{
   dispatch()
  
 }

  return (
   <div>{cartData.map((e)=>{
     
     return <Card>
     <div className={`${styles.Container} ${styles.border}`}>
       <div className={styles.brandName}>
         <h4>GGSHM Store</h4>
       </div>
       <hr />
       <div className={`${styles.cartItem}`}>
         <div className={styles.ImageDiv}>
           <img
             src={e.imgUrl}
             alt=""
             srcset=""
           />
           <div className={styles.ContentDiv}>
             <p>{e.title}</p>
             <p>Color:Gold</p>
             <p>Size:8G 512GB</p>
             <p>In Stock:P-1000</p>
           </div>
         </div>

         <div>
           <p className={styles.boldText}>{`$${e.price}`}</p>
         </div>
         <div className={styles.increDecreButton}>
           <button
             className={styles.buttonIncrement}
             onClick={decreaseQuantityHandler.bind(e._id,e)}
           >
             -
           </button>
           <span className={styles.buttonIncrement}>{e.quantity}</span>
           <button
             className={styles.buttonIncrement}
             onClick={addQuantityHandler.bind(e._id,e)}
           >
             +
           </button>
         </div>
         <div>
           <p className={styles.subtotal}>{`$${e.totalprice}`}</p>
         </div>
         <div>
           <div>
             <a href="">Edit</a>
           </div>

           <div>
             <a href="">Favourite</a>
           </div>
           <div>
             <button className={styles.deleteButton} onClick={()=>{
               
               dispatch(deleteItem(e._id))
             }}>Delete</button>
           </div>
         </div>
       </div>
     </div>
   </Card>
   })}</div>
    
  );
};
