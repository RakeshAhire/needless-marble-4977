import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import styles from "../Styles/ProductCard.module.css";

import { deleteNewArrival, getNewArrival } from "../Redux/AppReducer/action";
import { useEffect } from "react";

const AdminGetProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newarrival = useSelector((store) => store.AppReducer.newarrival);

  useEffect(() => {
    dispatch(getNewArrival());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are You Sure")) {
      dispatch(deleteNewArrival(id));
      navigate("/new-arrival");
    }
  };

  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        justifyContent: "center",
      }}
    >
      <div className={styles.topcard}>
        <div className={styles.allfilterandproduct}>
          <div className={styles.maincard}>
            {newarrival.length > 0 &&
              newarrival.map((el) => (
                <div key={el.id} className={styles.mainsmallcard}>
                  <Link to={`/productDetails/cart/${el.id}`}>
                    <ProductCard {...el} />
                  </Link>
                  <div
                    style={{ dsiplay: "flex",margin:"auto", justifyContent: "space-between",gap:"20px" }}
                  >
                    <button onClick={() => handleDelete(el.id)}>
                      <img
                        style={{ width: "27px" }}
                        src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
                        alt="Delete"
                      />
                    </button>
                    <Link to={`/new-arrival/${el.id}/edit`}> 
                    <button>
                      <img
                        style={{ width: "27px" }}
                        src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png"
                        alt="Edit"
                        />
                    </button>
                        </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminGetProduct;
