import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "../pages/Contact";
import Favourite from "../pages/Favourite";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Notification from "../pages/Notification";
import Privacy from "../pages/Privacy";
import Product from "../pages/Product";
import Purchase from "../pages/Purchase";
import Refund from "../pages/Refund";

const AllRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;
