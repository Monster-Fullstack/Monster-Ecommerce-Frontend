import React from "react";
import cl from "./index.module.scss";
import {BsFillCartFill} from "react-icons/bs";
import {motion} from "framer-motion";

const cartAni = {
    hidden: {
        scale: 1
    },
    hover: {
        scale: 1.2,
        transition: {
            yoyo: Infinity,
            duration: 0.5,
        }
    }
};

const Cart: React.FC<{ cart?: "desktop" | "mobile" }> = ({cart = "desktop"}) => {
    return (
        <motion.button
            className={`${cart === "desktop" ? cl.cartBtn : cl.cartMob} none`}
            variants={cartAni}
            whileHover="hover"
        >
            <BsFillCartFill/> 3 Items
        </motion.button>
    );
};

export default Cart;