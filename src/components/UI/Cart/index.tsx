import React from "react";
import cl from "./index.module.scss";
import {BsFillCartFill} from "react-icons/bs";

const Cart: React.FC = () => {
    return (
        <button className={`${cl.cartBtn} none`}>
            <BsFillCartFill/> 3 Items
        </button>
    );
};

export default Cart;