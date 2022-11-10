
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import styles from "../Styles/ProductCard.module.css";

import { getProduct } from "../Redux/AppReducer/action";
import { Link } from "react-router-dom";

const MensFasion = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.AppReducer.products);

  // console.log(products)

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div>
      <div className={styles.topcard}>
        <div className={styles.sidebar}>
          <div style={{marginLeft:"30px"}}>
            <h1 style={{fontWeight:"bolder",marginBottom:"20px"}}>Men's Fashion</h1>
            <p>Watches</p>
            <p>Shoes</p>
            <p>Clothing</p>
            <p>Luggage & Travel Bags</p>
            <p>Accessories</p>
            <p>Socks</p>
            <p>Jewelry</p>



            <p>Watches</p>
            <p>Shoes</p>
            <p>Clothing</p>
            <p>Luggage & Travel Bags</p>
            <p>Accessories</p>
            <p>Socks</p>
            <p>Jewelry</p>
            <p>Watches</p>
            <p>Shoes</p>
            <p>Clothing</p>
            <p>Luggage & Travel Bags</p>
            <p>Accessories</p>
            <p>Socks</p>
            <p>Jewelry</p>
            <p>Watches</p>
            <p>Shoes</p>
            <p>Clothing</p>
            <p>Luggage & Travel Bags</p>
            <p>Accessories</p>
            <p>Socks</p>
            <p>Jewelry</p>
            <p>Watches</p>
            <p>Shoes</p>
            <p>Clothing</p>
            <p>Luggage & Travel Bags</p>
            <p>Accessories</p>
            <p>Socks</p>
            <p>Jewelry</p>
            <p>Watches</p>
            <p>Shoes</p>
            <p>Clothing</p>
            <p>Luggage & Travel Bags</p>
            <p>Accessories</p>
            <p>Socks</p>
            <p>Jewelry</p>
          </div>
          <div style={{border:"0.5px solid lightgrey",marginBottom:"20px",marginTop:"20px",marginLeft:"26px"}}></div>
          <div style={{marginLeft:"30px"}}>
            <h1 style={{fontWeight:"bolder",marginBottom:"20px"}}>NARROW SEARCH RESULTS</h1>
            <p>ON SALE</p>
            <p>IN STOCK</p>
            <p>CLEARANCE</p>
            <h4 style={{marginTop:"20px"}}>New Arrivals</h4>
          </div>
        </div>
        <div className={styles.maincard}>
          {products.length > 0 &&
            products.map((el) => (
              <div key={el.id} className={styles.mainsmallcard}>
                <Link to={`/products/${el.id}`}><ProductCard {...el} /></Link>
                
              </div>
            ))}
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default MensFasion;
