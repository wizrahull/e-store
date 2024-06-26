import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Views/Homepage";
import ProductList from "./Views/ProductList";
import ProductCard from "./Views/ProductCard";
import Categories from "./Views/Categories";
import Login from "./Views/Login";
import Cart from "./Views/Cart";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductCard />} />
      <Route path="/categories/:categoryId" element={<Categories />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
}
