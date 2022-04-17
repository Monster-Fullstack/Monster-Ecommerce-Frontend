import React from "react";
import { Card } from "react-bootstrap";
import cl from "./index.module.scss";
import { ProductImages } from "../../Images";
import { Link } from "react-router-dom";

const GameCard: React.FC<{
  id: number;
  src: string;
  alt: string;
  name: string;
  price: number;
}> = ({ id, src, alt, name, price }) => {
  return (
    <div className={cl.card}>
      <Link to={`/game/${id}`}>
        <ProductImages src={src} alt={alt} />
        <div className={cl.body}>
          <p className={cl.name}>
            {name.slice(0, 23)}
            {name.length > 23 && "..."}
          </p>
          <p className={cl.price}>
            <span className={cl.dollar}>$</span>
            {price - 1}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default GameCard;
