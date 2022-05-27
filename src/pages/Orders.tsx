import React from "react";
import OrderParent from "../components/main/OrderParent";
import PagesParent from "./Container/PagesParent";

const Orders = () => {
  return (
    <PagesParent>
      <OrderParent />
    </PagesParent>
  );
};

export default Orders;
