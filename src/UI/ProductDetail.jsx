
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import '../Styles/ProductDetail.css'
// import {Counter} from './Counter'
import { Icons } from './Icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AddCartData, addCartSuccess } from "../Redux/AppReducer/action"
import { StarIcon } from "@chakra-ui/icons"

export const ProductDetail = () => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  //const [product,setProduct] = useState(null)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(e => console.log(e))
  }, [])


  const setData = () => {
    alert("Add to cart successful")
    dispatch(AddCartData(product))
  }

  const setOrder = () => {

  }
  return (
    <div className="product_details">
      <div className="flex_container">
        <div className="flex_image">
          <img className="product_image" src={product?.image} />
        </div>
        <div className="about_product">
          <div className="product_name">
            <h3>{product?.title}</h3>
            <h3>Rating: {"     "} 
            {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < product.rating ? 'red.500' : 'gray.300'}
              />
            ))}
            
            </h3>
          </div>
          <div className="flash_sale">
            <h1>{product?.priceTag}</h1>
            <p>10 sold</p>
          </div>
          <div>
            <p className="product">Price  : </p>
            <h2 className="product_price"> ${product?.price}</h2>
            <del> $ {(product?.price * 1.2).toFixed(2)} </del>
            <span>{product.off}</span>
          </div>
          <div className="shipping">
            <p className="product">Shipping : </p>
            <p>FREE SHIPPING to United States Via Priority Line
              Ship between: May 09 - May 13, Estimated Shipping Time: 7-30 business days
            </p>
          </div>

          <div className="color">
            <p className="product"> Color : </p>
            <div>Blue</div>
            <div>Grey</div>
            <div>Black</div>
          </div>
          <div className="qty">
            <p className="product">QTY : </p>
            <button disabled={quantity===10} onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            <p>{quantity}</p>
            <button disabled={quantity===0} onClick={() => setQuantity((prev) => prev - 1)}>-</button>
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