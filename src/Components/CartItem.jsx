import { useDispatch } from "react-redux";

import styles from "../Styles/CartItem.module.css";

const CartItem = ({ brand,title, image, price, discount,per, off,id,dollar,removeCartItem }) => {

  const removeCart=()=>{
    // console.log(id)
    removeCartItem(id)
    
  }
     
     return ( <>
     <div className={`${styles.Container}`}>
       <div className={styles.brandName}>
         <h4>{brand}</h4>
       </div>
       <hr />
       <div className={`${styles.cartItem}`}>
         <div className={styles.ImageDiv}>
           <img src={image} alt={title} />
           <div className={styles.ContentDiv}>
             <p>{title}</p>
             {/* <p>Color:Gold</p>
             <p>Size:8G 512GB</p>
             <p>In Stock:P-1000</p> */}
           </div>
         </div>

         <div>
           <p className={styles.boldText}>{`$ ${price}`}</p>
         </div> 
         <div className={styles.increDecreButton}>
           <button className={styles.buttonIncrement}>
             -
           </button>
           <span className={styles.buttonIncrement}>Quanitty</span>
           <button className={styles.buttonIncrement}
           >
             +
           </button>
         </div>
         <div>
           <p className={styles.subtotal}>Total Price</p> 
           {/* {`$ ${totalprice}`} */}
         </div>
         <div>
           <div>
             <a href="">Edit</a>
           </div>

           <div>
             <a href="">Favourite</a>
           </div>
           <div>
             <button className={styles.deleteButton} onClick={removeCart}>Delete</button>
           </div>
         </div>
       </div>
     </div>
   </>    
  );
};

export default CartItem;
