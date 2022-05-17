import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Favourite from "../pages/Favourite";
import Home from "../pages/Home";
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
import Game from "./../pages/Game";
import Search from "./../pages/Search";
import Login from "./../pages/Auth/Login";
import Register from "./../pages/Auth/Register";
import Forget from "../pages/Auth/Forget";
import Reset from "./../pages/Auth/Reset";
import CheckMail from "../pages/Auth/CheckMail";
import useGameMode from "../hooks/useGameMode";
import Profile from "../pages/Profile";
import AuthContext from "../store/Auth";
import NotFound from './../pages/NotFound';

const AllRoutes: React.FC = () => {
  const location = useLocation();
  // for handling game mode
  const setGameMode = useGameMode();
  const { loggedIn } = useContext(AuthContext);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        {!loggedIn ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/reset/:token" element={<Reset />} />
            <Route path="/check_mail" element={<CheckMail />} />
          </>
        ) : (
          <Route path="/profile" element={<Profile />} />
        )}
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
        <Route path="/game/:id" element={<Game setGameMode={setGameMode} />} />
        <Route path="/search/:key" element={<Search />} />
        <Route
          path="/search_games/:key"
          element={<Search setGameMode={setGameMode} isGames={true} />}
        />
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
