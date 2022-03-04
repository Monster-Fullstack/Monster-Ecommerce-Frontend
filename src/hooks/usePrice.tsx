import { useEffect, useState } from "react";

const usePrice = (price: number) => {
  const [finalPrice, setFinalPrice] = useState("");
  let priceNumbers = price.toString().split("");
  useEffect(() => {
    for (let i = 0; i < priceNumbers.length; i++) {
      // if the price is thousand
      if (priceNumbers.length > 3) {
        // if the price ten thousand
        if (priceNumbers.length > 4) {
          if (priceNumbers.length > 5) {
            if (i === 0) {
              setFinalPrice((prevState) => `${prevState}${priceNumbers[i]}`);
            } else if (i === 1) {
              setFinalPrice((prevState) => `${prevState}${priceNumbers[i]}`);
            } else if (i === 2) {
              setFinalPrice((prevState) => `${prevState}${priceNumbers[i]},`);
            } else {
              setFinalPrice((prevState) => `${prevState}${priceNumbers[i]}`);
            }
          } else {
            if (i === 0) {
              setFinalPrice((prevState) => `${prevState}${priceNumbers[i]}`);
            } else if (i === 1) {
              setFinalPrice((prevState) => `${prevState}${priceNumbers[i]},`);
            } else {
              setFinalPrice((prevState) => `${prevState}${priceNumbers[i]}`);
            }
          }
        } else {
          if (i === 0) {
            setFinalPrice((prevState) => `${prevState}${priceNumbers[i]},`);
          } else {
            setFinalPrice((prevState) => `${prevState}${priceNumbers[i]}`);
          }
        }
      } else {
        setFinalPrice((prevState) => `${prevState}${priceNumbers[i]}`);
      }
    }
  }, []);

  return finalPrice;
};

export default usePrice;
