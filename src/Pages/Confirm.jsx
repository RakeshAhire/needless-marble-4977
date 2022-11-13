import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "../Styles/Confirm.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const Confirm = () => {
  const shippingInfo = useSelector((store) => store.AppReducer.shippingInfo);
  console.log('shippingInfo: ', shippingInfo);
  const [user, setUser] = useState([]);
  const [placeOrder, setplaceOrder] = useState([]);
  const [text, setText] = useState("");
  const [subTotal, setsubTotal] = useState(0);
  const [grand, setGrand] = useState(0);
  useEffect(() => {
    axios.get(`http://localhost:8080/addAddress`).then((res) => {
      console.log("dbdata", res.data);
      setUser(res.data);
    });
  }, []);
  
  useEffect(() => {
    axios
      .get(`http://localhost:8080/cartData`)
      .then(({ data }) => {
        // console.log("placeorderdata", data);
        setplaceOrder(data);
        const reduceTotal = data.reduce((ac, cu) => {
          return ac + cu.price;
        },0);
        setsubTotal(reduceTotal)
        setGrand(reduceTotal + 11);
      });
  }, []);

  let count = 0;
  
  function handleAdd() {
    if (text == "Masai30" && count == 0) {
      // coupon = Math.ceil(0.3 * grand);
      setGrand(Math.floor(grand*0.7))
      
    } else if (text == "Masai30" && count >= 1) {
      count++;
      alert("Coupon Code can only be applied once");
    } else {
      alert("Coupon Code Invalid");
    }
  }

  const amount = () => {
    
    localStorage.setItem("amount", JSON.stringify(grand));
  };

  return (
    <Fragment>
      <div className="mainConatiner">
        <h2 style={{ marginLeft: "4%" }}>Shipping Information</h2>
        <div className="containeradd">
          <h3 style={{ display: "flex" }}>
            {shippingInfo.firstName} {shippingInfo.lastName}{" "}
            <div className="default">Default</div>
          </h3>
          <p>
            {shippingInfo.phoneNo} / {shippingInfo.email}
          </p>

          <p>{shippingInfo.address}</p>

          <p>
            Country:{shippingInfo.country}, *Pin: {shippingInfo.pinCode}, *State
            :{shippingInfo.state}
          </p>
        </div>

        <div
          style={{
            width: "90%",
            display: "flex",
            margin: "auto",
            backgroundColor: "white",
            border: "1px solid gray",
            padding: "3px",
            paddingLeft: "15px",
            paddingRight: "15px",
            marginBottom: "20px",
          }}
        >
          <p style={{ width: "90%" }}>Selected Item(s)</p>
          <p>Subtotal</p>
        </div>

        <div>
          {placeOrder.map((e) => (
            <div className="mainDivOfOrderItems">
              <div className="divForImg">
                <img src={e.image} alt="" />
              </div>
              <div className="divForTitle">
                <p>{e.title}</p>
              </div>
              <div style={{ width: "15%" }}>
                <p className="ptagforPrice">${e.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mainDivOfOrderTotal">
          <div style={{ width: "80%" }}>
            <input
              className="Coupon"
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            />
            <label for="html">Apply Coupon</label>
            <br></br>
            <input
              className="enterCoupon"
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Enter Coupon Code"
            />
            <button className="Apply" onClick={handleAdd}>
              Apply
            </button>
            <ul type="circle">
              <li>Use G Points?</li>
              <p>
                Every order you place with us is completely safe and secure!
              </p>
              <li>Order Requirement:Dropshipping</li>
            </ul>
          </div>
          <div style={{ width: "20%" }}>
            <div className="itemtotal">
              <p>Item SubTotal </p>
              <p> ${subTotal}</p>
            </div>

            <div className="itemtotal">
              <p>Shipping Cost</p>
              <p>$11.00</p>
            </div>
            <hr />

            <div className="itemtotal">
              <h3>Grand Total</h3>

             
                <h1 style={{ color: "rgb(211,0,129)" }}>${grand.toFixed(2)}</h1>
            
            </div>
          
              <button onClick={amount} className="placeOrder">
                PLACE ORDER
              </button>
            
          </div>
        </div>
      </div>
    </Fragment>
  );
};