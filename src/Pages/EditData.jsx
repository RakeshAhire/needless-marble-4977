import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editNewArrival,
  setNewArrivalUpdated,
  updateNewArrival,
} from "../Redux/AppReducer/action";
import styles from "../Styles/ProductCard.module.css";
import AdminGetProduct from "./AdminGetProduct";

const EditData = () => {
  const { id } = useParams();
  const newarrival = useSelector((store) => store.AppReducer.newarrival);
  const newarrivalUpdated = useSelector(
    (store) => store.AppReducer.newarrivalUpdated
  );
  const navigate = useNavigate();

  const [title, settitle] = useState("");
  const [catagory, setcategory] = useState("");
  const [image, setimage] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [state, setState] = useState({
    title: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    dispatch(editNewArrival(id));
  }, []);

  useEffect(() => {
    if (newarrival) {
      console.log(newarrival);
      setState({
        name: newarrival.title,
        category: newarrival.category,
        img: newarrival.image,
      });
    }
  }, [newarrival]);

  useEffect(() => {
    if (newarrivalUpdated) {
      navigate("/");
      dispatch(setNewArrivalUpdated(false));
    }
  }, [newarrivalUpdated]);

  const { name, category, img } = state;

  const handleinputChange = (e) => {
    let { name, value } = e.target;

    settitle(e.target.value);
    setcategory(e.target.value);
    setimage(e.target.value);
    console.log(name, value);
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !img) {
      setError("Please write in every input fiels");
    } else {
      dispatch(updateNewArrival(state, id));

      setError("");
    }
  };

  return (
    <div style={{marginBottom:"30px"}}>
      <div className={styles.formmaindiv} style={{ display: "flex", gap: "30px",marginTop:"30px" }}>
        <div className={styles.formdiv}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <label
                style={{
                  textAlign: "center",
                  fontSize: "19px",
                  fontWeight: "600",
                }}
                htmlFor=""
              >
                Edit Products
              </label>
              <input
                className={styles.input}
                placeholder="Title"
                type="text"
                name="name"
                value={state.name}
                onChange={handleinputChange}
              />
              <input
                className={styles.input}
                placeholder="Category"
                type="text"
                name="category"
                value={state.category}
                onChange={handleinputChange}
              />
              <input
                className={styles.input}
                placeholder="Image Url"
                type="text"
                name="img"
                value={state.image}
                onChange={handleinputChange}
              />
            </div>
            <button className={styles.button} type="submit">
              Update
            </button>
          </form>
        </div>
        <div>
          <AdminGetProduct />
        </div>
      </div>
    </div>
  );
};

export default EditData;
