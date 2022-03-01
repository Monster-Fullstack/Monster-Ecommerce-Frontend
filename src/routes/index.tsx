import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Privacy from "../pages/Privacy";
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
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;
