import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CheckoutSteps } from "./CheckoutSteps";
import "../Styles/CheckoutSteps.css"
export const Payment = () => {

    var shippingInfo =useSelector((store)=>store.shippingInfo.shippingInfo);
    const navigate = useNavigate();

    let number =Math.floor(Math.random() * 100000000000);

    let amount =localStorage.getItem("amount")



    const pay=()=>{
      alert("Your order has successfully placed! Thank you for shopping with us!")
      navigate("/", { replace: false });
    }

    
  return (
    <div style={{width:"100%",backgroundColor:"rgb(247,247,247)",paddingTop:"2%"}}>
         <CheckoutSteps activeStep={2} />
       

       <div style={{display:"flex",width:"90%",margin:"auto",marginTop:"2%",}}>
           <div style={{width:"60%",marginTop:"3%",height:"60%",padding:"2%",border:"1px solid gray"}}>
             <div style={{width:"100%",borderBottom:"1px solid gray",paddingTop:"15px",paddingBottom:"1%"}}>Payment Method(s)</div>
          <div style={{borderBottom:"1px solid gray",paddingTop:"15px"}}>
           <input className="Coupon" type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">
          <img style={{width:"50px",height:"30px"}}src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png" alt="" />  
          <img  style={{width:"50px",height:"30px"}}src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/a.png" alt="" />
          <img  style={{width:"50px",height:"30px"}} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/dic.png" alt="" />
          <img   style={{width:"50px",height:"30px"}} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ww.png" alt="" />
          </label>
             </div>
             <div style={{paddingTop:"15px"}}>
             <input className="Coupon" type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">
          <img   style={{width:"50px",height:"30px"}} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png" alt="" />
          </label>
          <p>The safer,easier way to pay.</p>
             </div>
           

           </div>
           <div style={{width:"30%",marginLeft:"2%",marginTop:"3%",padding:"2%",border:"1px solid gray",marginBottom:"10%"}}>

          <div style={{borderBottom:"1px solid gray"}}>
              Your Bill
          </div>
          <div>
       <h4>Order Number</h4>
       {number}
       <p>Shipping address</p>
        <h4> {shippingInfo.address} / {shippingInfo.country}/{shippingInfo.state}/{shippingInfo.pinCode}</h4> 
          </div>

          <div >
           <div style={{display:"flex",justifyContent:"space-between"}}>

           <h3> Grand Total 
             </h3>
           <h3> ${amount}</h3>
           </div>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <h3>Payable Amount
             </h3>
           <h3> ${amount}</h3>

           </div>

          </div>

          <button onClick={pay}className='placeOrder'>PAY NOW</button>

           </div>
       </div>
    </div>
  )
}
