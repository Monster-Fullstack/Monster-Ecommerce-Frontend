import React from "react";
import usePrice from "../../../hooks/usePrice";
import cl from "./index.module.scss";

const Price: React.FC<{ price: number }> = ({ price }) => {
  const finalPrice = usePrice(price);
  return <p className={cl.price}>${finalPrice}</p>;
};

export default Price;
