import React from "react";
import MainContainer from "./../../UI/MainContainer/index";
import FullProductCard from "./../../UI/AllCards/FullProductCard/index";

// this component is work perfectly
const ShowProductsNoSliders: React.FC<{
  products: any[];
}> = ({ products }) => {
  const AllProducts = products.map((product, idx) => (
    <FullProductCard key={idx} product={product} />
  ));
  return <MainContainer>{AllProducts}</MainContainer>;
};

export default ShowProductsNoSliders;
