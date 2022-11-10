import React, { useState } from "react";
import styles from "../Styles/ProductCard.module.css";

const ProductCard = ({ title, image, price, discount,per, off }) => {
  const heartIcon1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6HeC2Y4ch1beUcQ68_zGrVfqlERPYJl4klmG3-XJQoEwQVVjV60rQDoxSRHQHpjNOHU&usqp=CAU";
  const heartIcon2 = "https://stceciliasinfants.org.uk/wp-content/uploads/2021/05/yellow-heart.png"

  const [icon, setIcon] = useState(heartIcon1)

  const handleIcon=()=>{
    setIcon(icon => heartIcon2)
  }

  return (
    <div className={styles.productcard}>
      <img className={styles.imagecard} src={image} alt={title} />
      <h3 className={styles.titlecard}>{title}</h3>
      <h2 style={{color:" #f30240",fontSize:"larger",fontWeight:"500"}}>{price}</h2>
      <div>
        <h4 className={styles.discountcard}>
          {per}{discount}  <br />
          {off}
        </h4>
        <button onClick={()=>handleIcon()}>

        <img className={styles.heartcard} style={{width:"27px"}} src={icon} alt="heart icon" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
