import { useState } from "react";
import axios from "axios";
import "../Styles/auth.css"


export const Register = () => {
    const [signup, setSign] = useState({

        email: "",
       // password: "",

    })
   
        const handleChange = (e) => {
        
        const { id, value } = e.target;
        setSign({
          ...signup,
          [id]: value,
        });

    };

    const register = (e) => {
        e.preventDefault();

        axios.post("https://morning-scrubland-78864.herokuapp.com/register", signup).then((res) => {
        //    console.log(res.data);
            if(res.data.message){
               // alert(res.data.message)
                alert("Email or password is Wrong")
                return
            }
           alert("Register sucessfully")
        });
    };
    return (
        <div>
            <form className="loginform" onSubmit={(e) => {
                register(e)
            }}>
                <input id="email" name="username" type="text" onChange={(event) => { handleChange(event); }} required placeholder="    Email" className="login_username"
                /><br />
                <input name="password" type="password" /*onChange={(event) => { handleChange(event); }} required */  placeholder="    Create password" className="login_password"
                /><br />
                <input name="password" type="password"  required placeholder="    Re-type Password" className="login_password"
                /><br />
                <span id="ppk2">
                    <input name="password" type="text" placeholder="    Enter the code" className="login_password1"
                    /><img id="img234" src="https://login.gearbest.com/captcha/default?0.9584008633988392" />
                </span>

                <br />

                <span id="span4">
                    <input className="checkbox" type="checkbox" />
                    <p>I agree to Gearbest <a>Terms and Conditions</a> and <a>Privacy Policies.</a></p>
                </span>
                <p id="tip1">Tip  :  To maximize online security, please do not reuse passwords or choose easy to guess ones on Gearbest.</p>
                <br />
                <input type="submit"  value="Register" className="login_submit" />
            </form>
            <div id="goog2">
                <p>or Connect via</p>
                <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" />
            </div>

        </div>
    )
}