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
import SubCategory from "./../pages/SubCategory";
import Category from "./../pages/Category";
import Categories from "../pages/Categories";
import SubCategories from "./../pages/SubCategories";
import PremiumProducts from "../pages/Premium/Products";
import Gamer from "../pages/Gamer";
import SubCategoryGames from "../pages/SubCategoryGames";

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
        <Route path="/sub-cat/:id" element={<SubCategory />} />
        <Route path="/sub-cat-games/:id" element={<SubCategoryGames />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/category-games/:id" element={<Category />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/subcategories" element={<SubCategories />} />
        <Route path="/premium/products" element={<PremiumProducts />} />
        <Route path="/gamer" element={<Gamer />} />
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
