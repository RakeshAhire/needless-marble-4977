import { Register } from "./Register"
import { Login } from "./Login"
import "../Styles/auth.css"
import { useState } from "react"


export const SignInPage = () => {
 const [set,setSet]=useState(true)
    const valueChange=()=>{
        setSet(true)
    }
    const valueChange1=()=>{
        setSet(false)
    }
    return (
        <div id="p32">
            <div id="p33a">
                <div id="imglogo">
                    <img src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png" />
                </div>
                <div className="registerDiv">
                    <div className="bttn23">
                        <button id="btn121" onClick={valueChange} >SIGN IN</button>
                        <button  id="btn121" onClick={valueChange1}>REGISTER</button>
                    </div>
                      {set? <Login /> : <Register />}
                    
                </div>

            </div>
        </div>
    )
}