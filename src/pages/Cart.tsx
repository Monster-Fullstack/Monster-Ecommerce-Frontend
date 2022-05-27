import React from "react";
import CartParent from "../components/main/CartParent";
import PagesParent from "./Container/PagesParent";

const Cart: React.FC<{ type: string }> = ({ type }) => {
  return (
    <PagesParent>
      <CartParent type={type} />
    </PagesParent>
  );
};

export default Cart;
