import React, { useContext } from "react";
import cl from "./index.module.scss";
import { BsFillCartFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Loader from "./../../main/Loader/index";
import CartContext from "../../../store/Cart";

const cartAni = {
  hidden: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    transition: {
      yoyo: Infinity,
      duration: 0.5,
    },
  },
};

const Cart: React.FC<{ cart?: "desktop" | "mobile" }> = ({
  cart = "desktop",
}) => {
  const { isCountReady, count } = useContext(CartContext);
  return (
    <motion.button
      className={`${cart === "desktop" ? cl.cartBtn : cl.cartMob} none`}
      variants={cartAni}
      whileHover="hover"
    >
      {isCountReady ? (
        <>
          <BsFillCartFill /> {count} Items
        </>
      ) : (
        <img
          className="img_cart_load"
          src="https://thumbs.gfycat.com/ConventionalOblongFairybluebird-size_restricted.gif"
        />
      )}
    </motion.button>
  );
};

export default Cart;
