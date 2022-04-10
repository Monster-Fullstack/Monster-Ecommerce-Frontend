import React from "react";
import cl from "./index.module.scss";

const PriceCard: React.FC = ({ children }) => {
  return (
    <div className="input-group">
      <div className={`text-success ${cl.ProductPriceCard} d-inline`}>
        ${children}
      </div>
    </div>
  );
};

export default PriceCard;
