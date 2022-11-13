import { Country, State } from 'country-state-city';
import React from 'react'
import { Fragment, useState } from 'react'
import "../Styles/Shipping.css"
import { Link, useNavigate } from 'react-router-dom';
//import { useAlert } from "react-alert";
import { useSelector, useDispatch } from 'react-redux'

import { CheckoutSteps } from './CheckoutSteps';


import axios from 'axios';
import { saveShippingInfo } from '../Redux/AppReducer/action';
export const Shipping = () => {



    const dispatch = useDispatch();
    const navigate = useNavigate();


    // const shippingInfo = useSelector((store) => store.AppReducer.shippingInfo);
    // console.log("storeFinal",shippingInfo)

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");



    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [pinCode, setPinCode] = useState("");

    const [phoneNo, setPhoneNo] = useState("");
    const [email, setEmail] = useState("")



    const shippingSubmit = (e) => {

        e.preventDefault();
        //   if(phoneNo<10 || phoneNo>10){
        //     alert("Phone number shoule be 10 digits long");
        //     return;
        //   }


        const payload = {
            First_Name: firstName,
            Last_Name: lastName,
            Address: address,
            City: city,
            State: state,
            Country: country,
            PinCode: pinCode,
            PhoneNo: phoneNo,
            Email: email,
        }

        axios.post('http://localhost:8080/addAddress', payload)
            .then(function (response) {
                // console.log(response);
            })
            .catch(function (error) {
                // console.log(error);
            });

        //  localStorage.setItem("shippingInfo",JSON.stringify({address,city,state,country,pinCode,phoneNo}))
        // console.log({ address, city, state, country, pinCode, phoneNo })

        dispatch(saveShippingInfo({ firstName, lastName, email, address, city, state, country, pinCode, phoneNo })
        );



        navigate("/order", { replace: false });
    }


    return (
        <>         
            <h1 className='shippingHeading'>Add New Address</h1>
            <div className='shippingContainer'>
                <div className='shippingBox'>

                    <form className='shippingForm'
                        encType='multipart/form-data'
                        onSubmit={shippingSubmit}
                    >

                        <div>
                            <h3 >*First Name :</h3>
                            <input type="text"
                                placeholder='First Name'
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}

                            />
                        </div>

                        <div>
                            <h3 >*Last Name :</h3>
                            <input type="text"
                                placeholder='Last Name'
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}

                            />
                        </div>

                        <div>
                            <h3 >*Address :</h3>
                            <input type="text"
                                placeholder='Address'
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}

                            />
                        </div>
                        <div>
                            <h3>*City :</h3>
                            <input type="text"
                                placeholder='City'
                                required
                                value={city}
                                onChange={(e) => setCity(e.target.value)}

                            />
                        </div>
                        <div>
                            <h3>*Pin :</h3>
                            <input type="number"
                                placeholder='Pin Code'
                                required
                                value={pinCode}
                                onChange={(e) => setPinCode(e.target.value)}

                            />
                        </div>
                        <div>
                            <h3>*Phone No :</h3>
                            <input type="number"
                                placeholder='Phone Number'
                                required
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                size="10"
                            />
                        </div>
                        <div>
                            <h3 >*Email :</h3>
                            <input type="text"
                                placeholder="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </div>


                        <div>
                            <h3> *Country :</h3>

                            <select required
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}

                            >
                                <option value="">Country</option>
                                {Country &&
                                    Country.getAllCountries().map((item) => (
                                        <option key={item.isoCode} value={item.isoCode}>
                                            {item.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        {country && (
                            <div>
                                <h3>*State :</h3>
                                <select requiredvalue={state}
                                    onChange={(e) => setState(e.target.value)}>
                                    <option value="">State</option>
                                    {State &&
                                        State.getStatesOfCountry(country).map((item) => (
                                            <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        )}

                        <input type="submit"
                            value="Confirm"
                            className='shippingBtn'
                            disabled={state ? false : true}></input>

                    </form>


                </div>
            </div>
        </>
    )

}