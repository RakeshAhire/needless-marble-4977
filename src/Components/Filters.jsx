import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProduct } from "../Redux/AppReducer/action";
import styles from "../Styles/ProductCard.module.css";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");

  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );

  const [brand, setBrand] = useState(
    searchParams.getAll("brand") || []
  );

  const handleFilter = (e) => {
    const options = e.target.value;
   
    let newCategory = [];
    
    newCategory.push(options);

    setCategory(newCategory);
  };

  const handleBrandFilter = (e) => {
    const brands = e.target.value;
    
    let newBrand = [];
    
    newBrand.push(brands);

    setBrand(newBrand);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    console.log(e.target.value)
  };

  useEffect(() => {
    const params = {};
    category && (params.category = category);
    brand && (params.brand = brand);
    sortBy && (params.sortBy = sortBy);
    setSearchParams(params);
  }, [category,brand, setSearchParams, sortBy]);

  

  return (
    <div >
      <div className={styles.allfilters}>
        <div className={styles.allselect}>
          <img style={{width:"22px",border:"0.5px solid grey"}}
            src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
            alt="homeIcon"
          />
          <select style={{border:"0.5px solid grey"}} onChange={handleFilter}>
            
            <option value="Consumer Electronics">Consumer Electronics</option>
            <option value="Video Game">Video Game</option>
            <option value="Other Consumer Electronics">
              Other Consumer Electronics
            </option>
            <option value="Security And Protection">
              Security And Protection
            </option>
            <option value="Headphones And Earphones">
              Headphones And Earphones
            </option>
            <option value="Camera And Photo">Camera And Photo</option>
            <option value="Portable Audio And Video">
              Portable Audio And Video
            </option>
            <option value="Smart Electronics">Smart Electronics</option>
            <option value="HIFI Devices">HIFI Devices</option>
          </select>
        </div>
        <div onClick={handleBrandFilter} className={styles.allbrand}>
          <h2  style={{marginRight:"10px",width:"80px"}}>Brand :</h2>
          <input type="image"  value="amazefit" src="https://uidesign.gbtcdn.com/GB/image/brand/20181102_5779/amazfit.jpg?impolicy=hight" alt="brand" className={styles.allbrandbutton}/>
            
          <input type="image"  value="kospet" src="https://uidesign.gbtcdn.com/GB/image/brand/20190926_12969/150.73.jpg" alt="brand" className={styles.allbrandbutton}/>
           
          
          <input type="image"  value="aquara" src="https://uidesign.gbtcdn.com/GB/images/others/top_brands/ACARA.png" alt="brand" className={styles.allbrandbutton}/>
            
          
          <input type="image"  value="ticwatch" src="https://uidesign.gbtcdn.com/GB/image/brand/20190826_12268/LOGO.jpg" alt="brand" className={styles.allbrandbutton}/>
           
          
          <input type="image"  value="lenovo" src="https://uidesign.gbtcdn.com/GB/image/brand/20191125_14075/LenovoLOGO.jpg" alt="brand" className={styles.allbrandbutton}/>
            
          
          <input type="image"  value="oukitel" src="https://css.gbtcdn.com/imagecache/GB/images/logolist/oukitel.png" alt="brand" className={styles.allbrandbutton}/>
            
          
          <input type="image"  value="mi" src="https://uidesign.gbtcdn.com/GB/image/6874/150x73.jpg" alt="brand" className={styles.allbrandbutton}/>
            
          
          <input type="image"  value="qcy" src="https://css.gbtcdn.com/imagecache/GB/images/logolist/qcy.png" alt="brand" className={styles.allbrandbutton}/>
            
          
          <input type="image"  value="tamister" src="https://uidesign.gbtcdn.com/GB/image/brand/20190712_11282/v6.jpg?imbypass=true" alt="brand" className={styles.allbrandbutton}/>
            
          
        </div>
        <div className={styles.allpricetop}>
          <div style={{width:"80px",textAlign:"left"}}>

          <h2 style={{width:"80px",textAlign:"left"}}>Price :</h2>
          </div>
          <div className={styles.allprice}>

          <button className={styles.allbrandprice}>$0.01 - $5.00</button>
          <button className={styles.allbrandprice}>$5.00 - $10.00</button>
          <button className={styles.allbrandprice}>$10.00 - $20.00</button>
          <button className={styles.allbrandprice}>$20.00 - $50.00</button>
          <button className={styles.allbrandprice}>$50.00 - $100.00</button>
          <button className={styles.allbrandprice}>$100.00 - $200.00</button>
          <button className={styles.allbrandprice}>$200.00 - $500.00</button>
          <button className={styles.allbrandprice}>$500.00 & over</button>
          <button className={styles.allbrandprice}>Min</button>
          <button className={styles.allbrandprice}>-</button>
          <button className={styles.allbrandprice}>Max</button>
          </div>
        </div>
        <div className={styles.allbrand}>
          <h2 style={{marginRight:"10px",width:"80px"}}>Sort By</h2>
          <button className={styles.allbrandsort}>Recommended</button>
          <button className={styles.allbrandsort}>Newest</button>
          <button className={styles.allbrandsort}>Rating</button>
          <button className={styles.allbrandsort}>Trending</button>
          <div className={styles.allbrandsort}  >Price 
          <div onClick={handleSortBy} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

         < input className={styles.trianglebtn} type="image"  value="asc" name = "sortBy" 
         src="https://w7.pngwing.com/pngs/822/940/png-transparent-sierpinski-triangle-silhouette-triangle-angle-triangle-logo.png" 
         alt="price" />

< input className={styles.trianglebtn} type="image"  value="desc" name = "sortBy" 
         src="https://w7.pngwing.com/pngs/285/159/png-transparent-computer-icons-drop-down-list-arrow-inverted-triangle-angle-rectangle-triangle.png" 
         alt="price" />
            
            
          
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
