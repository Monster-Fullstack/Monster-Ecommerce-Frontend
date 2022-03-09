import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Favourite from "../pages/Favourite";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Notification from "../pages/Notification";
import Privacy from "../pages/Small/Privacy";
import Product from "../pages/Product";
import Purchase from "../pages/Small/Purchase";
import Refund from "../pages/Small/Refund";
import About from "./../pages/Small/About";

const AllRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/cart" element={<Cart />} />
        {/* Small Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;
