import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { ProductDetail } from "../UI/ProductDetail";
import {Cart } from "./Cart";

const Routing = () => {
    return (
        <Routes>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
            <Route path="/productDetails/cart/:id" element={<Cart/>}></Route>
            <Route path='/' element={<Home />}></Route>
            
        </Routes>
    )
}

export default Routing
