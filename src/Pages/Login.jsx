<<<<<<< HEAD
// // import { useState } from "react";
// // import axios from "axios";
// // import { useDispatch, useSelector } from "react-redux";
// // import { isAuth } from "../src/isAuth/action";
// // // import { useNavigate } from "react-router-dom";
// // import "./auth.css"

// // export const Login = () => {
// //   // const navigate=useNavigate()
// //   const dispatch = useDispatch();
// //   const [login, setlogin] = useState({
// //     email: "",
// //     //  password: "",
// //   });

// //   const loginData = (e) => {
// //     const { id, value } = e.target;
// //     setlogin({
// //       ...login,
// //       [id]: value,
// //     });
// //   };
// //   const checklogin = (e) => {
// //     e.preventDefault();
// //     dispatch(isAuth(true));
// //     // navigate("")
// =======
// import { useState } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { isAuth } from "../Redux/AuthReducer/action";
// import { useNavigate } from "react-router-dom";
// import "../Styles/auth.css"

// export const Login = () => {
//   const navigate=useNavigate()
//   const dispatch = useDispatch();
//   const [login, setlogin] = useState({
//     email: "",
//      password: "",
//   });

//   const loginData = (e) => {
//     const { id, value } = e.target;
//     setlogin({
//       ...login,
//       [id]: value,
//     });
//   };
//   const checklogin = (e) => {
//     e.preventDefault();
//     dispatch(isAuth(true));
//     navigate("")
// >>>>>>> f884e50e9f2079a22b9ad3ecbb9eb776455a6cb4

// //     axios
    
// <<<<<<< HEAD
// //       .post("https://morning-scrubland-78864.herokuapp.com/login", login)
// //       .then((res) => {
// //         console.log(res);
// //         if (res.status === 200) {
// //           alert("login sucesfully");
// //           // navigate("/")
// //         } else if (res.status === 500) {
// //           alert("Email or password is wrong");
// //           return;
// //         }
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //         alert("Sign in Successful");
// //       });
// //   };
// //   return (
// //     <div>
// //       <form
// //         className="loginform"
// //         onSubmit={(e) => {
// //           checklogin(e);
// //         }}
// //       >
// //         <input
// //           id="email"
// //           name="username"
// //           onChange={(event) => {
// //             loginData(event);
// //           }}
// //           required
// //           type="text"
// //           placeholder="    Email"
// //           className="login_username"
// //         />
// //         <br />
// //         <input
// //           name="password"
// //           /* onChange={(event) => {   loginData(event); }} required */ type="password"
// //           placeholder="   Password"
// //           className="login_password"
// //         />
// //         <br />
// //         <span id="span3">
// //           <input className="checkbox" type="checkbox" />
// //           <p>Keep me signed in</p>
// //           <p id="ptag">Forgot your password?</p>
// //         </span>
// //         <br />

// //         <input type="submit" value="Sign In" className="login_submit" />
// //       </form>
// //       <div id="goog2">
// //         <p>or Connect via</p>
// //         <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;



import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../Redux/context/AuthContext";
import "../Styles/Login.css"

import axios from '../Api/axios';
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
=======
      .post("https://morning-scrubland-78864.herokuapp.com/login", login)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("login sucesfully");
          navigate("/")
        } else if (res.status === 500) {
          alert("Email or password is wrong");
          return;
>>>>>>> f884e50e9f2079a22b9ad3ecbb9eb776455a6cb4
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login