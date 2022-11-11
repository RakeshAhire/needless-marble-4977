import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../Styles/ProductCard.module.css";

const Filters = ({ filterChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");

  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );

  const handleFilter = (e) => {
    const options = e.target.value;
    filterChange(options);
    // console.log(options)
    let newCategory = [category];
    if (newCategory.includes(options)) {
      newCategory.splice(newCategory.indexOf(options), 1);
    } else {
      newCategory.push(options);
    }

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
    <div style={{display:"flex",flexDirection:"column",margin:"auto",justifyContent:"center",marginLeft:"10.2%"}}>
      <div className={styles.allfilters}>
        <div className={styles.allselect}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
            alt="homeIcon"
          />
          <select onChange={handleFilter}>
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
        <div>
          <h2>Brand :</h2>
          <button>
            <img
              src="https://uidesign.gbtcdn.com/GB/image/brand/20181102_5779/amazfit.jpg?impolicy=hight"
              alt="brand"
            />
          </button>
          <button>
            <img
              src="https://uidesign.gbtcdn.com/GB/image/brand/20190926_12969/150.73.jpg"
              alt="brand"
            />
          </button>
          <button>
            <img
              src="https://uidesign.gbtcdn.com/GB/images/others/top_brands/ACARA.png"
              alt="brand"
            />
          </button>
          <button>
            <img
              src="https://uidesign.gbtcdn.com/GB/image/brand/20190826_12268/LOGO.jpg"
              alt="brand"
            />
          </button>
          <button>
            <img
              src="https://uidesign.gbtcdn.com/GB/image/brand/20191125_14075/LenovoLOGO.jpg"
              alt="brand"
            />
          </button>
          <button>
            <img
              src="https://css.gbtcdn.com/imagecache/GB/images/logolist/oukitel.png"
              alt="brand"
            />
          </button>
          <button>
            <img
              src="https://uidesign.gbtcdn.com/GB/image/6874/150x73.jpg"
              alt="brand"
            />
          </button>
          <button>
            <img
              src="https://css.gbtcdn.com/imagecache/GB/images/logolist/qcy.png"
              alt=""
            />
          </button>
          <button>
            <img
              src="https://uidesign.gbtcdn.com/GB/image/brand/20190712_11282/v6.jpg?imbypass=true"
              alt="brand"
            />
          </button>
        </div>
        <div>
          <h2>Price :</h2>
          <button>$0.01 - $5.00</button>
          <button>$5.00 - $10.00</button>
          <button>$10.00 - $20.00</button>
          <button>$20.00 - $50.00</button>
          <button>$50.00 - $100.00</button>
          <button>$100.00 - $200.00</button>
          <button>$200.00 - $500.00</button>
          <button>$500.00 & over</button>
          <button>Min</button>
          <button>-</button>
          <button>Max</button>
        </div>
        <div>
          <h2>Sort By</h2>
          <button>Recommended</button>
          <button>Newest</button>
          <button>Rating</button>
          <button>Trending</button>
          <button>Price</button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
