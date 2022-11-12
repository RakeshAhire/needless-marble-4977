// import React from 'react'
// import { Flex, Box , Image, Text, Input, Button} from '@chakra-ui/react'
// import logo from "../Images/Mega Kart Logo.jpg"


// const Footer = () => {
//   return (
//     <div>
//        <Box w={"70%"} margin={"auto"}>
//         <Flex 
//         // border={"1px solid red"} 
//         gap="20px">

//           {/* 1 */}
//           <Box 
//           // border={"1px"} 
//           // marginLeft={"120px"}
//            padding={"10px"}>
//           <Box>
//             <Image w="120px" h="60px" margin={"auto"}  src={logo} alt='logo' />
//           </Box>
//             <Box>
//             <Text fontSize={"14px"} as={"b"} padding={"10px"}>
//              AFFORDABLE QUALITY
//              </Text>
//              <br/>
//              <Text fontSize={"13px"} as={"b"} >
//              FUN SHOPPING
//              </Text>

//            </Box>
//            </Box>

//             {/* 2  */}
//            <Box 
//           //  border={"1px"} 
//            padding={"10px"}>
//             <Box>
//               <Image w="80px" h="60px" margin={"auto"} src={"https://banner2.cleanpng.com/20180420/vlq/kisspng-font-awesome-computer-icons-font-housing-logo-5ada418c752ba8.1327093815242530684799.jpg"} alt='logo' />
//             </Box>
//             <Box>
//             <Text fontSize='md' as={"b"}>
//              High Quality Selection
//              </Text>
//              <Text fontSize='sm' >
//              Total product quality control for peace of mind
//              </Text>

//            </Box>
//            </Box>

//            {/* 3  */}
//            <Box 
//           //  border={"1px"} 
//            padding={"10px"}>
//           <Box>
//             <Image w="100px" h="60px" margin={"auto"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD50awLbR6VSN5qTId469qIj7tZQINmX2gCA&usqp=CAU"} alt='logo' />
//           </Box>
//             <Box>
//             <Text fontSize='md' as={"b"}>
//              Affordable Prices
//              </Text>
//              <Text fontSize='sm'>
//              Factory direct prices for maximum savings
//              </Text>

//            </Box>
//            </Box>

//             {/* 4  */}
//            <Box 
//           //  border={"1px"} 
//            padding={"10px"}>
//           <Box>
//             <Image w="130px" h="70px" margin={"auto"} src={"https://media.istockphoto.com/vectors/delivery-service-icon-shopping-cart-sign-vector-vector-id1253034973"} alt='logo' />
//           </Box>
//             <Box>
//             <Text fontSize='md'as={"b"}>
//              Express Shipping
//              </Text>
//              <Text fontSize='sm' >
//              Fast, reliable delivery from global warehouses
//              </Text>

//            </Box>
//            </Box>

//             {/* 5  */}
//            <Box 
//           //  border={"1px"} 
//            padding={"10px"} 
//           //  marginRight={"120px"}
//            >
//           <Box>
//             <Image w="110px" h="70px" margin={"auto"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lJqyI2uH_GFo8cFjOdzEq3EEmsiczFIMAA&usqp=CAU"} alt='logo' />
//           </Box>
//             <Box>
//             <Text fontSize='md' as={"b"} >
//              Worry-free After-sales
//              </Text>
//              <Text fontSize='sm' >
//              Instant access to professional support
//              </Text>

//            </Box>
//            </Box>

//           </Flex>

// {/* 2nd part */}
//           <Flex marginTop={"50px"}>
//           <Box  >
//            <Text fontSize='md' as={"b"} opacity={"0.6"}  padding={"10px"} display={"flex"}>
//              Newsletter
//              </Text>
//            </Box>
//            <Box  display={"flex"}>
//             <Input placeholder='Enter Email to get 50 points' width={"340px"} size='lg' margin={"auto"} />
//             <Button colorScheme='White' backgroundColor={"black"} size='lg' margin={"auto"} > Subscribe </Button>
//            </Box>

//            <Box display={"flex"} border={"1px"}>
//              <Image w="25px" h="15px" margin={"auto"} src={"https://cdn-icons-png.flaticon.com/512/20/20673.png"} alt='fb' />
//              <Image w="30px" h="20px" margin={"auto"} src={"https://4.bp.blogspot.com/-HbbdUL3LpX4/XufdAx4OmNI/AAAAAAAAPGI/UbkoFCI2tW4I0ZqqAiTyS_F9ERVw71bpgCLcBGAsYHQ/s1600/image2.png"} alt='msg' />
//              <Image w="25px" h="15px" margin={"auto"} src={""} alt='yt' />
//              <Image w="25px" h="15px" margin={"auto"} src={""} alt='pixel' />
//              <Image w="25px" h="15px" margin={"auto"} src={""} alt='insta' />
//              <Image w="25px" h="15px" margin={"auto"} src={""} alt='twitter' />
//              <Image w="25px" h="15px" margin={"auto"} src={""} alt='blog' />
//              <Image w="25px" h="15px" margin={"auto"} src={""} alt='t' />
//              <Image w="25px" h="15px" margin={"auto"} src={""} alt='t' />
//            </Box>
//           </Flex>

//        </Box>
//     </div>
//   )
// }

// export default Footer



import React from 'react'
import "../Styles/Footer.css"
import {Link} from "react-router-dom"
import logo from "../Images/Mega Kart Logo.jpg"
import {BsFacebook,BsYoutube,BsPinterest,BsMessenger,BsInstagram,BsTwitter,} from "react-icons/bs"
 const Footer = () => {


    const popular=[
        {
            id: 1,
            title: "xiaomi poco m3",
            to: "",
        },
        {
            id: 2,
            title: "ortur master 2 20w ",
            to: "",
        },
        {
            id: 3,
            title: "bed lights ",
            to: "",
        },
        {
            id: 4,
            title: "watch watches",
            to: "",
        },
        {
            id: 5,
            title: "cellphone cam",
            to: "",
        },
        {
            id: 6,
            title: "cam mobile",
            to: "",
        },
        {
            id: 7,
            title: "men's hooded",
            to: "",
        },
        {
            id: 8,
            title: "lighting lamp light",
            to: "",
        },
        {
            id: 9,
            title: "m black",
            to: "",
        },
        {
            id: 10,
            title: "de celular",
            to: "",
        },
        {
            id: 11,
            title: "instruments tools",
            to: "",
        },
        {
            id: 12,
            title: "ddr4 ram n4100",
            to: "",
        },
        {
            id: 13,
            title: "sound wear",
            to: "",
        },
        {
            id: 14,
            title: "men's clothing suits",
            to: "",
        },
       
        
    ]

    const social = [
        {
            id: 1,
            title: <BsFacebook />,
            to: "https://www.facebook.com/Gearbestshopping",
          },

        {
          id: 1,
          title: <BsYoutube />,
          to: "https://youtu.be/OSHtduartHo",
        },
        {
          id: 2,
          title: <BsTwitter />,
          to: "",
        },
        {
          id: 3,
          title: <BsInstagram />,
          to: "",
        },
        {
            id: 4,
            title: <BsMessenger/>,
            to: "",
          },
          {
            id: 4,
            title: <BsTwitter/>,
            to: "",
          },
          {
            id: 4,
            title: <BsPinterest/>,
            to: "",
          },
      ];
  return (
    <>
    <footer className='footer'>
   {/* <div className='firstdiv'>
       <div style={{width:"11%"}}>
       <h3>Popular Searches: </h3>

       </div>
       <div style={{textAlign:"center",paddingTop:"1%"}}>
          {popular.map((e)=>(
              <p id='footertext' key={e.id}>{e.title}</p>
          ))}

       </div>

       
   </div> */}
   <div className='seconddiv'>
      <div className='div1'>
          <img src={logo} >
          </img>
          <p className="font"> AFFORDABLE QUALITY</p>
        <p className="font"> FUN SHOPPING</p>
          
     </div> 

     <div class="divs2">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAyCAMAAADGIxO9AAABAlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg4OAAAAAAAAAAAAAAAAAAAAAAAADg4OAAAAAAAAAAAAAAAAAAAADg4OAAAADg4OAAAAAAAAAAAAAAAAAAAADk5OQAAAAAAADo6Oj///8AAADg4OAlJSUAAADg4OAaGhrg4ODg4ODg4OAAAADg4ODg4OAAAADh4eEAAADh4eHh4eHk5OQAAAAAAAAAAADg4OA4ODgeHh7Nzc0oKCgQEBAJCQnb29vExMSamppLS0sTExO/v7+zs7OoqKigoKB9fX1wcHBaWloYGBg9pae4AAAAQXRSTlMAgECHYZ94/h7swLwEAblL9/Hfx8e0r6eOfGNZVDcsE/TPe3drUkg8KSYZCwXt6+bm39nTu6ecmo2ETEc8MxMLCQmnFe4AAAFdSURBVEjH7ZTXbsIwFIbtAiUkJOxd9i50793/hLaU7vX+r1IzokCx1WukfBeRfXQ++eiPbObhsYRZXJPRvmVqcpBjqJVwCAq6SmcD2NL3bfsFA/EZ2vaPWOzocSCrdCygzg7ocYgR0QPu6AP3VOm1gVhYoWhBBMtXRE+ic+oI+5XyLA4UFI4PSLMTom98zRx6xiclWB0w1AlEehVxzmBEon182PvgjahTFgNoqgR2zTwtc8pSgE/qGABnCYmz3W8CIVORwCY7kjiJ/mRseQKWs87v0ZjDS6eQBVLyBJrutlOrnV+72y7EELIEgmd8QsutmgU+JQbkJAm4ZJxgS0m4xJdSiGGOoOUXV6CRxALlv06RcwPQxRhpzJOZVqqcR5iE9dmfKx1HHaM6afQDASZQO4KbCx7QdStXZIL/nUU8Z8UdP5DkMlLqR1GLQkmLKSgopQxTovm5jEaJeawOv0IPd8P/1V/7AAAAAElFTkSuQmCC" alt="">

           </img>
            <p className="font">High Quality Selection</p>
            <p>Total product quality</p>  
            <p>control for peace of mind</p>
        </div>

        <div class="divs2">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABIFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADi4uIAAAAAAAAAAAAAAAAAAAAAAADg4OAAAAAAAADh4eEAAAAAAADg4ODg4OAAAAAAAAAAAAAAAAAAAADg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADi4uLf39/f399paWkAAADg4OAAAAAAAADg4OAAAAA7OzsAAADg4OCZmZng4OAUFBQAAAAAAADg4ODg4OAAAADa2toAAAAAAAAAAADk5OQAAADg4OBwcHDExMRPT0+lpaWVlZWLi4s4ODgxMTElJSUJCQkHBwfY2NjLy8u+vr6xsbFbW1s8PDwYGBgODg61tbWpqamDg4NtbW1paWlKSkpISEhFRUUimxvjAAAAQ3RSTlMAgPbwl1/8tqJxQC8fGATi0cTAZ1Q7EAr37uvf2dWrqZyGeXRqSjkxJx758O/o383Jx7Csp6SjjYyMeGpTT0Q0KRoTY8WDigAAAZ5JREFUSMft1NdOG0EUgOHj8a4LMe4loYYO6b33f1gTNwgESM/7v0V2BjsGYTPDHUj8N3u00qcj7YxWrrpUTYaVtXOB3FwKKFT9xWqSo5Z8RX4aVJA2bsKTLMN0LpZPYNaT3ISKxDUUfPAjJVi1Qxre+pECRLpcs+uyfkcCPa31rZokIOFF5uCvjisbsugB6gHwTZs2MvS7m/k4XoQK+KpttRL/U+E4sc5Q6HeKQWNONVvIShaKz3S/a8M7NwPFESSFkgQ81oM2jn3FJLw/TQBDNgciYs88bs+bbRkIXST6fcjhny9mvBGbBXjlIh3oQtPOZbul4iLbEHU50HaNyAysuchBPLVaW3a+LnVQ4iK/gM6utj2UFSg5yc4+sP3Zzs/N+5cOYvrRi439ZG8kDVUnabbbe4Bd80mSkHOSLuz0jsg9WYcpcW+BFhDF41MJ4ZGb7HYAfprxtQSw6CC2LZrf+zf6Pkz4EL0/OMjJFKmGmwybz6fhgZxB2psnu/NiduyfVqGkyugWZGRBMpB8kRFNLcsZ1ROnWlppyFUXv3/1lqnU6lgCKQAAAABJRU5ErkJggg==" alt=""/>

          
            <p className="font">Affordable Prices</p>
            <p>Factory direct prices for</p>  
            <p> maximum savings</p>
        </div>

        <div class="divs2">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAA0lBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAAAAAAADf398AAAAAAADg4OAAAAAAAADg4OAAAAAAAADg4ODf39/g4OArKysAAAAdHR0AAAAAAADi4uIAAADf398AAADm5uYAAAAAAADg4OD///9OTk5wcHDX19f+/v5qamr5+fmMjIwkJCQcHBwBAQHa2tpWVlZBQUEWFhbq6urBwcG5ubmnp6eWlpZSUlI4ODgqKiofnaNsAAAALXRSTlMA6vqngF3z8JhyPhMF5bagXtnAhGlEQDco6m78887KvKiioJ2UjFY0LxgYFAh5lWYlAAABTUlEQVRIx+2U126DQBBFFwwu2CbuJb33awhg4pJe/v+XwoiNsoJJBEiRXzgPPNyrsyM0sKKkpCDXtgYWzW7yRrONX2nzTgV/UGEVDRgLljHQZgsAvMFXxZWD3VmC6dFVXPV6Pfvs/DalzBgOqfqme5lFmaoK9GFS4Ygry7KGgz3aUGZFEC0bGGRWRqPRxQ1tqJJVoertHhFaHiUyiDwKYv51Cr1LboXYoLIK3Y/1S0qRGaeEjyDeV4piQmZJRQe8WQCJ+6P0lUwqjSpQbYgu8LBG9HgNF9TfSU7UDNBJqcWfTl0e5TvO3IUknXWVKc19EJ4T4UFFzXZMoTJsAEufan8JHG9FnBqGmhmDiUhQkyc+AzU+k9R1EHqdbkx37jhPn8qvxGWiihhNTCJ5EQS0G0uWXKZOEduQ9IWEz1Q6Gmheh894WqZhmC02KynIF2/ZrSepltS8AAAAAElFTkSuQmCC" alt=""/>

            <p className="font">Express Shipping</p>
            <p>Fast, reliable delivery from</p>  
            <p>global warehouses</p>
        </div>
        <div className="divs2">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABRFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADY2NgAAAAAAAAAAAAAAAAAAADX19cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADY2NgAAAAAAAAAAAAAAAAAAAAAAAAAAADZ2dnj4+M8PDwcHBwAAAAKCgoAAADY2NgAAAAAAAAAAAAAAAAAAAAAAAAAAADb29sTExPY2NjY2Ng8PDzY2NjY2NgAAADCwsK0tLSTk5PY2NgXFxcMDAw0NDRhYWEAAAAAAADX19fa2trb29uOjo7Z2dk5OTkAAAAAAADY2NjV1dWDg4NCQkLJycm2traIiIhkZGRISEi7u7uwsLCqqqqlpaWSkpKOjo5MTEw3NzcxMTEUFBQKCgrLy8uYmJh7e3tubm5eXl5bW1tTU1MWNtRpAAAAUHRSTlMA7/3qKAj38zIFp39jPeLNv7Khi3dzbGktIQ3m19HAqpduUUU2JBsYFgn+++Xdx8WumnxWSzgTB/n49vbr4t7MxLi2tbGwrqWRjEU4LSgoEZKctREAAAHxSURBVEjH7ZRnU+JQFIZvGiR0WBBpIriKfXct6/be63sAKfa2/f9/35M7yAjGK/mmMz4fMinz5Jz7ntyIG64VM5Fszp9xPwYszvhSPoBJ+TFqATC6n9buAUfzQMjH2nVgdxuAObKSAg6JmsDdUY0cF9khagEYH1EpA/PEdIHkaIYJYJuYFle7LdQ4ZnXlzZIONElyAOhL5fCq6XjPOxMq6ejRIsnW6Y1AsZyuDRuWgT7Hf6hH5xh9tO9DSkSOe6HZaexu0hl+7LQ7zQVZreKhpK0x8uLOnOM+zgw3FuOOo2LM0xB2EDDyYohpg511DycxJ8Y1QPOYqslO0D7nJDaE6Rq28EA+McXkgPF0g+vLd3kh6xvTg8oTkSuwceFHYLNTeEHU2KuTy94+0Tc3F9fwRibzmNrAIQ9n8who02uZpIIw8JcaAE4OuicA9uktcOuyHfyL6l30+Fend5ft5wngJ/FiHsDlN5++BOJKZRHY4ll8EtFsNvpl8iHRcyCgMixAr7/6LJj1KT7MfnyUCAI1hWIDxa+CmeIOl9dcaTYOqBJbBZKusAxJvMoX74GIQllxE12LgwlqYEpVEVannAJCJTBaOJ9PS6mYUv/OkpAY6bwMI2NAMqEePgsZq59gpQCoG3NCiFWsgTvZZ0g64oarz3+BhKcJHpw0wgAAAABJRU5ErkJggg==" alt="">
              </img>
            <p className="font">Worry-free After-sales</p>
            <p>Instant access to</p>  
            <p>professional support</p>
        </div>
       
   </div>
   <div className="main_div2">
        <div class="top_div">
            <p class="font1">Newsletter &nbsp;&nbsp;</p>
            <div>
                <input type="text" placeholder="Enter Email to get 50 Points" className="points"/>
            </div>
            <button class="sub_btn">Subscribe</button>
      </div>

      <div className='thirdright'> 
        {social.map((e)=>(
         
            <div className="icons"key={e.id}>{e.title}</div>
        ))}
      </div>

   </div>
   <div className='row'>
       <div className='col'>
           <h4>Company Information</h4>
           <ul className='list-unstyled'>
               <li>About Us</li>
               <li>Top Searches</li>
               <li>Privacy Policy</li>
               <li>Terms & Conditions</li>
               <li>Intellectual Property Policy</li>
               <li>Testimonials</li>
               <li>Contact us</li>
               <li>Report Security Issue</li>
               <li>Sell on Gearbest</li>
               <li>Cookies Policy</li>
               <li>Top Brands</li>
               <li>Gearbest Official blog</li>

           </ul>

       </div>

       <div className='col'>
           <h4>Customer Service</h4>
           <ul className='list-unstyled'>
               <li>Shipping Information</li>
               <li>FAQ For Newsletter Subscription</li>
               <li>My Points</li>
               <li>Warranty and Return</li>
               <li>Payment Methods</li>
               <li>Deposit Expansion</li>
               <li>FAQ & Support</li>
               <li>Sitemap</li>
               <li>Gearbest Wallet Instruction</li>
               <li>FAQs about COVID-19</li>
    
           </ul>

       </div>
       <div className='col'>
           <h4>Other Business</h4>
           <ul className='list-unstyled'>
               <li>Partnership Programs</li>
              <li>Associate Program</li>
           </ul>

       </div>
       
       <div className='col'>
           <h4>Download App!</h4>
           <ul className='list-unstyled'>
               <li>Save $3 with App & New User Only</li>
                <div className='scanner'>
                  <img className="scan"src="data:image/png;base64,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" alt="" />


                </div>
           </ul>

       </div>
       
       


   </div>
     <div className='belowimg'>
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/money.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/m.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/rese.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/a.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ww.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/jcb.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/dic.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ya.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/d.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/qiwi.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/oxxo.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/webmoney.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/bo.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/postepay.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/giropay.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/sofort.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/eps.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/p.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/p.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/Visa-Logo.png" alt="" />
        <img src="https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/m-Logo.png" alt="" />


     </div>
     <div style={{background:"black",width:"100%",height:"4%",marginBottom:"0"}}>
         <p style={{color:"white",textAlign:"center",padding:"20px 0 "}}>Copyright © 2014-2021 Gearbest.com. All Rights Reserved.</p>
     </div>

    </footer>
    
    </>
  )
}

export default Footer

