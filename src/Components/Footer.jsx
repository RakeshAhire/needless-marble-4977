import React from 'react'

const Footer = () => {
  return (
    <div>
       
    </div>
  )
}

export default Footer



// import React from 'react'
// import styles from './footer.css'
// import { Image } from '@chakra-ui/react'


// const Footer = () => {
//   return (
//     /*<div>
//         <div className="bottom_box1">
//         <div className="bottom_box1_logo">
//             <div>
//                 <img src="https://css.gbtcdn.com/imagecache/gbw/img/site/new-logo.png" alt="GearBest"/>
//                 <h3 className="footerLogo_text">AFFORDABLE QUALITY<br/> FUN SHOPPING</h3> 
//             </div>

//         </div>
//         <div className="bottom_box1_1">
//             <div className="bottom_box1_icon"> <i className="fa-solid fa-store"></i>  </div>
//             <div className="bottom_box1_text">
//                 <h1>High Quality Selection</h1>
//             </div>
//             <div className="bottom_box1_text1">
//                 <p>Total product quality <br /> control for peace of mind</p>
//             </div>
//         </div>
//         <div className="bottom_box1_1">
//             <div className="bottom_box1_icon"> <i className="fa-solid fa-hand-holding-dollar"></i> </div>
//             <div className="bottom_box1_text">
//                 <h1>Affordable Prices</h1>
//             </div>
//             <div className="bottom_box1_text1">
//                 <p>Factory direct prices for <br /> maximum savings</p>
//             </div>
//         </div>
//         <div className="bottom_box1_1">
//             <div className="bottom_box1_icon"> <i className="fa-solid fa-truck-fast"></i>  </div>
//             <div className="bottom_box1_text">
//                 <h1>Express Shipping</h1>
//             </div>
//             <div className="bottom_box1_text1">
//                 <p>Fast, reliable delivery from <br /> global warehouses</p>
//             </div>
//         </div>
//         <div className="bottom_box1_1">
//             <div className="bottom_box1_icon"> <i className="fa-solid fa-star"></i>  </div>
//             <div className="bottom_box1_text">
//                 <h1>Worry-free After-sales</h1>
//             </div>
//             <div className="bottom_box1_text1">
//                 <p>Instant access to <br /> professional support</p>
//             </div>
//         </div>
//     </div>

//     <div className="bottom_box2">
//         <div className="bottom_box2_subs">
//             <span className="bottom_box2_text">Newsletter</span> 
//             <span><input type="email" className="bottom_box2_email"placeholder="Enter Email to get 50 Points"/> </span> 
//             <button type="submit" className="bottom_box2_btn"> Subscribe </button> 
//         </div>
//         <div className="bottom_box2_Soical_id">
//                 <div className="icon-fb"><a  href="https://www.facebook.com/Gearbestshopping">  <i className="fa-brands fa-facebook-f"></i> </a> </div>
//                 <div className="icon-mess"><a  href="https://goo.gl/qXtLAh"> <i className="fa-brands fa-facebook-messenger"></i> </a></div> 
//                 <div  className="icon-y"><a  href="https://www.youtube.com/user/TheGearBest"> <i className="fa-brands fa-youtube"></i> </a></div> 
//                 <div  className="icon-p"><a  href="https://www.pinterest.com/gearbestlife/"> <i className="fa-brands fa-pinterest"></i> </a></div> 
//                 <div  className="icon-vk"><a  href="https://vk.com/gearbest"> <i className="fa-brands fa-vk"></i> </a></div> 
//                 <div  className="icon-insta"><a  href="https://www.instagram.com/gearbest/"> <i className="fa-brands fa-instagram"></i> </a></div> 
//                 <div  className="icon-twi"><a  href="https://twitter.com/TheGearbest/"> <i className="fa-brands fa-twitter"></i> </a></div> 
//                 <div  className="icon-blo"><a  href="https://www.gearbest.com/blog/"> <i className="fa-brands fa-blogger"></i> </a></div> 
//                 <div  className="icon-tu"><a  href="http://bit.ly/2LadoyE"> <i className="fa-brands fa-tumblr"></i> </a></div> 
//         </div>
//     </div>
//     <div className="bottom_box3">
//         <div className="bottom_box3_1">
//             <h4>Company Information</h4> 
//             <p> <a  href="https://www.gearbest.com/about/about-us.html"> About Us </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/top-searches/"> Top Searches </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/privacy-policy.html"> Privacy Policy </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/terms-and-conditions.html"> Terms and Conditions </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/Intellectual-Property-Policy.html"> Intellectual Property Policy </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/testimonials.html"> Testimonials </a> </p>
//             <p> <a  href="https://www.gearbest.com/about/contactus.html"> Contact Us </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/report-security-issue.html"> Report Security Issu </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/suppliers"> Sell on Gearbest</a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/cookie-policy.html"> Cookies Policy </a> </p> 
//             <p> <a  href="https://www.gearbest.com/top-brands.html"> Top Brand </a> </p> 
//             <p> <a  href="https://www.gearbest.com/blog/"> Gearbest Official Blog </a> </p> 
//         </div>
//         <div  className="bottom_box3_1">
//             <h4>Customer Service</h4> 
//             <p> <a  href="https://www.gearbest.com/about/shipping-methods.html"> Shipping Information </a> </p> 
//             <p> <a  href="https://user.gearbest.com/index#/favor/goods"> My Favorites </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/faq-for-newsletter-subscription.html"> FAQ For Newsletter Subscription </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/about-points.html"> My Points </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/warranty-and-return.html"> Warranty and Return </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/payment-methods.html"> Payment Methods </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/deposit.html"> Deposit Expansion </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/faq.html"> FAQ &amp; Support </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/sitemap.html"> Sitemap </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/gb-wallet.html"> Gearbest Wallet Instruction </a> </p> 
//             <p> <a  href="https://www.gearbest.com/about/faqs-about-covid-19.html"> FAQs about COVID-19 </a> </p> 
//         </div>
//         <div  className="bottom_box3_1">
//             <h4>Other Business</h4> 
//             <p> <a  href="https://www.gearbest.com/about/make-money.html"> Partnership Programs </a> </p> 
//             <p> <a  href="https://affiliate.gearbest.com/"> Associate Program </a> </p> 
//         </div>
//         <div>
//             <div  className="bottom_box3_1">
//                 <div className="bottom_box3_1a">
//                     <h4>Download App! </h4> 
//                     <p>Save $3 with App & New User Only</p> 
//                 </div> 
                
//                <div className="bottom_box3_2">
//                    <div>
//                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStxY7UlAzg46TshUmYfmtIHGMNWcUbKZRk4WOfBfjVNqZZgCpB" alt="">
//                    </div>
//                    <div className="bottom_box3_2a">
//                        <img className="bottom_box3_2img" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRydcgqVJDE-R141giWLw0mVnIW8x7-ZJy2_UIUe4UmtmMh4QX6" alt=""> 
//                        <img className="bottom_box3_2img" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWOrVNSgVtjivIC-fXrjwVexAML-wYdoZC7TfrSUT7GNgtm5rz" alt="">
//                    </div>
//                </div>
//             </div> 
//         </div> 
//     </div>
//     <div className="bottom_box4">
//     <Box boxSize='sm'>
//   <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/money.png' alt='Dan Abramov' />
//    </Box>
//         {/* <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/money.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/m.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/rese.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/a.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ww.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/jcb.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/dic.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ya.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/d.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/qiwi.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/oxxo.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/webmoney.png"> </a> <br />
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/bo.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/postepay.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/giropay.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/sofort.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/eps.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/p.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/pago.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/Visa-Logo.png"> </a> 
//         <a> <img src="https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/m-Logo.png"> </a>  }
//     </div>
//     <footer><p className="footer_text"> Copyright © 2014-2021 Gearbest.com. All Rights Reserved. </p> </footer>
//     </div> */

//     <Box boxSize='sm'>
//     <Image src='https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/money.png' alt='Dan Abramov' />
//     </Box>
//   )
// };

// export default Footer