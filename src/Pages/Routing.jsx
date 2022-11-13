import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { ProductDetail } from "../UI/ProductDetail";
import { Cart } from "./Cart";
import NewArrival from "./NewArrival";
import AdminPage from "./AdminPage";
import EditData from "./EditData";
import { Payment } from "../UI/Payment";
import Login from "./Login";
import Register from "./Register";
import MensFasion from "./MensFashion";
import { Shipping } from "./Shiiping";
import { Confirm } from "./Confirm";

const Routing = () => {
  return (
    <Routes>
      <Route path="/product/:id" element={<ProductDetail />}></Route>
      {/* <Route path="/productDetails/cart/:id" element={<Cart />}></Route> */}
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/new-arrival" element={<NewArrival />}></Route>
      <Route path="/admin-page" element={<AdminPage />}></Route>
      <Route path="/new-arrival/:id/edit" element={<AdminPage />} />
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/product-page" element={<MensFasion />}></Route>
      <Route path="/edit" element={<EditData />}></Route>
      <Route path="*"></Route>
    <Route path="/shipping" element={<Shipping/>}></Route>
    <Route path="/order" element={<Confirm/>}></Route>
    </Routes>
  );
};

export default Routing;
