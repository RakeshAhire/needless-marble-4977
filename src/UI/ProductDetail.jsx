
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import '../Styles/ProductDetail.css'
// import {Counter} from './Counter'
import { Icons } from './Icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItemsToCart } from "../Redux/Cart/cartaction"
import { addCartSuccess } from "../Redux/AppReducer/action"

export const ProductDetail = () => {
  const [product, setProduct] = useState("");
  const [quantity,setQuantity]=useState(1);
  //const [product,setProduct] = useState(null)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    // console.log("Rakesh")
    axios.get(`http://localhost:8080/products/${id}`)
    .then((res) =>setProduct(res.data))
    .catch(e=>console.log(e))
  }, [])
  // console.log(product)
  const setData = () => {
    // fetch(`https://morning-scrubland-78864.herokuapp.com/addtocart`, {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })
    // alert("Add to cart successful")
    // localStorage.setItem('addtocart', JSON.stringify(product))
    // dispatch(addItemsToCart(product))

    dispatch(addCartSuccess(product))
  }

  const setOrder = () => {
    fetch(`https://morning-scrubland-78864.herokuapp.com/placeorder`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    localStorage.setItem('placeorder', JSON.stringify(product));
  }
  return (
    <div className="product_details">
      <div className="flex_container">
        <div className="flex_image">
          <img className="product_image" src={product?.image} />
        </div>
        <div className="about_product">
          <h3 className="product_name">{product?.title}</h3>
          <h3>Rating: {product?.rating}</h3>
          <div className="flash_sale">
            <h1>{product?.priceTag}</h1>
            <p>10 sold</p>
          </div>
          <span>
            <p className="product">Price  : </p>
            <h2 className="product_price"> ${product?.price}</h2>
            <p> $ {(product?.price * 1.2).toFixed(2)} </p>
            <span>{product.off}</span>
          </span>
          <div className="shipping">
            <p className="product">Shipping : </p>
            <p>FREE SHIPPING to United States Via Priority Line </p>
          </div>
          <p>Ship between: May 09 - May 13, Estimated Shipping Time: 7-30 business days
          </p>
          <div className="color">
            <p className="product"> Color : </p>
            <div>Blue</div>
            <div>Grey</div>
            <div>Black</div>
          </div>
          <div className="qty">
            <p className="product">QTY : </p>
            <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
            <p>{quantity}</p>
            <button onClick={()=>setQuantity((prev)=>prev-1)}>-</button>
            <p>in stock</p>
          </div>



        </div>


      </div>
      <div className="cart">
        <div className="socialmedia">
          <Icons />
        </div>
        <div className="cartbtn">

         <Link to="/"><button className="linkbtn" onClick={setData}>Add To Cart</button></Link>

          <Link id="linkbutton" to={`/shipping`}>
            <button className="linkbtn" onClick={setOrder}>Buy Now</button>
          </Link>
          <button>PayPal</button>
        </div>
      </div>
    </div>
  );
};

//   brand
// :
// "mi"
// category
// :
// "Other Consumer Electronics"
// discount
// :
// "%"
// dollar
// :
// "$"
// id
// :
// 1
// off
// :
// "OFF"
// per
// :
// 58
// priceTag
// :
// "Flash Sale"

// thumbhref