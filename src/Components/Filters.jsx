import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../Styles/ProductCard.module.css";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");

  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );

  const handleFilter = (e) => {
    const options = e.target.value;
    // filterChange(options);
    // console.log(options)
    let newCategory = [];
    // if (newCategory.includes(options)) {
    //   newCategory.splice(newCategory.indexOf(options), 1);
    // } else {
    //   newCategory.push(options);
    // }
    newCategory.push(options);

    setCategory(newCategory);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    const params = {};
    category && (params.category = category);
    sortBy && (params.sortBy = sortBy);
    setSearchParams(params);
  }, [category, setSearchParams, sortBy]);

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
        <div className={styles.allbrand}>
          <h2 style={{marginRight:"10px",width:"80px"}}>Brand :</h2>
          <button className={styles.allbrandbutton}>
            <img className={styles.allbrandimg}
              src="https://uidesign.gbtcdn.com/GB/image/brand/20181102_5779/amazfit.jpg?impolicy=hight"
              alt="brand"
            />
          </button>
          <button className={styles.allbrandbutton}>
            <img className={styles.allbrandimg}
              src="https://uidesign.gbtcdn.com/GB/image/brand/20190926_12969/150.73.jpg"
              alt="brand"
            />
          </button>
          <button className={styles.allbrandbutton}>
            <img className={styles.allbrandimg}
              src="https://uidesign.gbtcdn.com/GB/images/others/top_brands/ACARA.png"
              alt="brand"
            />
          </button>
          <button className={styles.allbrandbutton}>
            <img className={styles.allbrandimg}
              src="https://uidesign.gbtcdn.com/GB/image/brand/20190826_12268/LOGO.jpg"
              alt="brand"
            />
          </button>
          <button className={styles.allbrandbutton}>
            <img className={styles.allbrandimg}
              src="https://uidesign.gbtcdn.com/GB/image/brand/20191125_14075/LenovoLOGO.jpg"
              alt="brand"
            />
          </button>
          <button className={styles.allbrandbutton}>
            <img className={styles.allbrandimg}
              src="https://css.gbtcdn.com/imagecache/GB/images/logolist/oukitel.png"
              alt="brand"
            />
          </button>
          <button className={styles.allbrandbutton}>
            <img className={styles.allbrandimg}
              src="https://uidesign.gbtcdn.com/GB/image/6874/150x73.jpg"
              alt="brand"
            />
          </button>
          <button className={styles.allbrandbutton}>
            <img className={styles.allbrandimg}
              src="https://css.gbtcdn.com/imagecache/GB/images/logolist/qcy.png"
              alt=""
            />
          </button>
          <button className={styles.allbrandbutton}>
            <img className={styles.allbrandimg}
              src="https://uidesign.gbtcdn.com/GB/image/brand/20190712_11282/v6.jpg?imbypass=true"
              alt="brand"
            />
          </button>
        </div>
        <div className={styles.allpricetop}>
          <h2 style={{marginRight:"10px",width:"80px"}}>Price :</h2>
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
          <button className={styles.allbrandsort}>Price</button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
