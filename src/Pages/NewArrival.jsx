import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import styles from "../Styles/ProductCard.module.css";

import { getNewArrival } from "../Redux/AppReducer/action";
import Filters from "../Components/Filters";
import Pagination from "../Components/Pagination";

const NewArrival = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const newarrival = useSelector((store) => store.AppReducer.newarrival);

  const location = useLocation();
//  console.log("totals",Math.ceil(newarrival.length/12))

//  const total = newarrival.length/12
 
  useEffect(() => {
    if (location || newarrival.length === 0) {
      const category = searchParams.getAll("category");
      const brand = searchParams.getAll("brand")
      //  const page = searchParams.getAll("page")
      const queryParams = {
        params: {
          category: category,
          brand:brand,
          _sort: searchParams.get("sortBy") && "price",
          _order: searchParams.get("sortBy"),
          _page : page,
          _limit : 12,
        },
      };
    dispatch(getNewArrival(queryParams));
    }
  }, [location,page]);

  return (
    <div style={{width:"90%",display:"flex",flexDirection:"column",margin:"auto",justifyContent:"center"}}>
      <div className={styles.topcard}>
        <div className={styles.sidebar}>
          <div style={{ marginLeft: "30px" }}>
            <h1 style={{ fontWeight: "bolder", marginBottom: "20px" }}>
              Men's Fashion
            </h1>
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
          <div
            style={{
              border: "0.5px solid lightgrey",
              marginBottom: "20px",
              marginTop: "20px",
              marginLeft: "26px",
            }}
          ></div>
          <div style={{ marginLeft: "30px" }}>
            <h1 style={{ fontWeight: "bolder", marginBottom: "20px" }}>
              NARROW SEARCH RESULTS
            </h1>
            <p>ON SALE</p>
            <p>IN STOCK</p>
            <p>CLEARANCE</p>
            <h4 style={{ marginTop: "20px" }}>New Arrivals</h4>
          </div>
        </div>
        <div className={styles.allfilterandproduct}>
          <div>
            <Filters   />
          </div>
          <div className={styles.maincard}>
            {newarrival.length > 0 &&
              newarrival.map((el) => (
                <div key={el.id} className={styles.mainsmallcard}>
                  <Link to={`/productDetails/cart/${el.id}`}> 
                  <ProductCard {...el} />
                  </Link>
                </div>
              ))}
          </div>
        </div>
        
      </div>
      
      <Pagination  total={10} current={page} onChange={(value)=> setPage(value)} />
    </div>
  );
};

export default NewArrival;
