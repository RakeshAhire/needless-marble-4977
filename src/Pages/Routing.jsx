import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { ProductDetail } from "../UI/ProductDetail";
import {Cart } from "./Cart";
import NewArrival from './NewArrival';
import AdminPage from './AdminPage';
import EditData from './EditData';

const Routing = () => {
    return (
        <Routes>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
            <Route path="/productDetails/cart/:id" element={<Cart/>}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/new-arrival' element={<NewArrival/>}></Route>
            <Route path='/admin-page' element={<AdminPage/>}></Route>
            <Route path="/new-arrival/:id/edit" element={<AdminPage />} />
            </Routes> 
    )
}

export default Routing
