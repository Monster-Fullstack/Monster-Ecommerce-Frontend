import React from "react";
import { AiFillStar } from "react-icons/ai";

const RateCard: React.FC<{ rate: number; className?: string }> = ({
  rate,
  className,
}) => {
  let rates = [];
  for (let i = 0; i < rate; i++) {
    rates.push(<AiFillStar key={i} className={className} />);
  }

  //   const allRates = rates.map((el) => el);
  return <span className="text-success">{rate} {rates}</span>;
};

export default RateCard;
