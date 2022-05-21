import React from "react";
import usePrice from "../../../../hooks/usePrice";
import { ButtonBig } from "../../Buttons";
import cl from "./index.module.scss";

interface Total {
  price: number;
}

const TotalPriceCard: React.FC<Total> = ({ price }) => {
  const total = usePrice(price);
  return (
    <div className={`${cl.parent}`}>
      <h5>Total:</h5>
      <h1>${total}</h1>
      <ButtonBig secondText="Pay Now">Checkout</ButtonBig>
    </div>
  );
};

export default TotalPriceCard;
