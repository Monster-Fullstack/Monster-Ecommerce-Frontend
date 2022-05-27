import React from "react";
import cl from "./index.module.scss";
import { ProductImages } from "../../Images";
import { Link } from "react-router-dom";

const GameCard: React.FC<{
  id: number;
  src: string;
  alt: string;
  name: string;
  GameNameClass?: string;
  price: number;
}> = ({ id, src, alt, name, price, GameNameClass }) => {
  return (
    <div className={cl.card}>
      <Link to={`/game/${id}`}>
        <ProductImages src={src} alt={alt} />
        <div className={cl.body}>
          <p className={`${GameNameClass} ${cl.name}`}>
            {name.slice(0, 23)}
            {name.length > 23 && "..."}
          </p>
          <p className={`${GameNameClass} ${cl.price}`}>
            {price > 0 && <span className={cl.dollar}>$</span>}
            {price > 0 ? price - 0.1 + "9" : "Free To Play"}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default GameCard;
