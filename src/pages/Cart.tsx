import React from "react";
import CartParent from "../components/main/CartParent";
import PagesParent from "./PagesParent";

const Cart: React.FC = () => {
  return (
    <PagesParent>
      <CartParent />
    </PagesParent>
  );
};

export default Cart;
