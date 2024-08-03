import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/src/pages/ProductList" element={<ProductList />} />
        <Route path="/src/pages/Products/:id" element={<Product />} />
        <Route path="/src/pages//Register" element={<Register />} />
        <Route path="/src/pages//Login" element={<Login />} />
        <Route path="/src/pages//Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
