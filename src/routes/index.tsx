import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
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
import sound from "../assets/sounds/gaming.mp3";
import Game from "./../pages/Game";

const AllRoutes: React.FC = () => {
  const location = useLocation();
  const [gameMode, setGameMode] = useState(false);
  const [audio, setAudio] = useState(new Audio(sound));
  useEffect(() => {
    if (gameMode) {
      audio.play();
      const timer = setInterval(() => {
        setAudio(new Audio(sound));
        audio.play();
      }, 22000);

      return () => clearInterval(timer);
    } else {
      audio.remove();
    }
  }, [audio, gameMode]);

  useEffect(() => {
    if (
      !location.pathname.includes("gamer") &&
      !location.pathname.includes("sub-cat-games") &&
      !location.pathname.includes("category-games")
    ) {
      setGameMode(false);
      audio.pause();
    }
  }, [audio, location.pathname]);

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
        <Route
          path="/sub-cat-games/:id"
          element={<SubCategoryGames setGameMode={setGameMode} />}
        />
        <Route
          path="/category/:id"
          element={<Category setGameMode={setGameMode} />}
        />
        <Route
          path="/category-games/:id"
          element={<Category mode="gaming" setGameMode={setGameMode} />}
        />
        <Route path="/categories" element={<Categories />} />
        <Route path="/subcategories" element={<SubCategories />} />
        <Route path="/premium/products" element={<PremiumProducts />} />
        <Route path="/gamer" element={<Gamer setGameMode={setGameMode} />} />
        <Route path="/game/:id" element={<Game />} />
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
