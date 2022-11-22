import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "../Redux/AppReducer/action";
import styles from "../Styles/ProductCard.module.css";
import AdminGetProduct from "./AdminGetProduct";
import EditData from "./EditData";

const AdminPage = () => {
  const [state, setState] = useState({
    discount: "%",
    rating: "",
    brand: "",
    category: "",

    per: "",
    off: "OFF",
    thumbhref:
      "https://www.gearbest.com/ip-cameras/pp_3003858400553519.html?wid=2000001",
    image: "",
    title: "",
    price: "",
    priceTag: "Flash Sale",
    dollar: "$",
  });

  const [error, setError] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const {
    discount,
    rating,
    brand,
    category,
    per,
    off,
    thumbhref,
    image,
    title,
    price,
    priceTag,
    dollar,
  } = state;

  const handleinputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !discount ||
      !rating ||
      !brand ||
      !category ||
      !per ||
      !off ||
      !thumbhref ||
      !image ||
      !title ||
      !price ||
      !priceTag ||
      !dollar
    ) {
      setError("Please write in every input fiels");
    } else {
      dispatch(addProduct(state));
      navigate("/admin-page");
      setError("");
    }
  };

  

  return (
    <div>
      <Link to="/">
      <button className={styles.button}>HOME</button>
      </Link>
      <div className={styles.formmaindiv} style={{display:"flex",gap:"30px"}}>

      
      <div className={styles.formdiv}>
        <h1
          style={{ textAlign: "center", fontSize: "19px", fontWeight: "600" }}
        >
          Add Products
        </h1>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="">Add Title</label>

          <input
            className={styles.input}
            type="text"
            placeholder="Title"
            value={title}
            name="title"
            onChange={handleinputChange}
          />

          <label htmlFor="">Add Rating</label>

          <input
            className={styles.input}
            type="text"
            placeholder="Rating"
            value={rating}
            name="rating"
            onChange={handleinputChange}
          />

          <label htmlFor="">Add Brand</label>

          <input
            className={styles.input}
            type="text"
            placeholder="Brand Name"
            value={brand}
            name="brand"
            onChange={handleinputChange}
          />

          <label htmlFor="">Add Category</label>

          <input
            className={styles.input}
            type="text"
            placeholder="Category"
            value={category}
            name="category"
            onChange={handleinputChange}
          />

          <label htmlFor="">Add Discount</label>

          <input
            className={styles.input}
            type="text"
            placeholder="Discount"
            value={per}
            name="per"
            onChange={handleinputChange}
          />

          <label htmlFor="">Add Image Url</label>

          <input
            className={styles.input}
            type="text"
            placeholder="Image Url"
            value={image}
            name="image"
            onChange={handleinputChange}
          />

          <label htmlFor="">Add Price</label>

          <input
            className={styles.input}
            type="text"
            placeholder="Price"
            value={price}
            name="price"
            onChange={handleinputChange}
          />
        <Link to="/new-arrival">

          <button className={styles.button} type="submit">
            Add Products
          </button>
        </Link>
        
        </form>
      </div>
      
      <div>
        <AdminGetProduct />
      </div>
      </div>
      <div>
        <EditData/>
      </div>
    </div>
  );
};

export default AdminPage;
