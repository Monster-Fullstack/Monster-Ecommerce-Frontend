import React from "react";
import cl from "./index.module.scss";

const PriceCard: React.FC<{ price: number }> = ({ price }) => {
  const p = price > 0 ? `$${price - 0.1}9` : "Free To Play";
  return (
    <div className="input-group">
      <div className={`${cl.ProductPriceCard} d-inline`}>{p}</div>
    </div>
  );
};

export default PriceCard;
