import React from "react";
import ProductCard from "../../../UI/AllCards/ProductCard";
import MainContainer from "../../../UI/MainContainer/index";

const ShowSubCateogories: React.FC<{ SubName: string; products: any[] }> = ({
  SubName,
  products,
}) => {
  const allProducts = products.map((p) => (
    <ProductCard
      name={p.name}
      description={p.description}
      price={p.price}
      id={p.id}
      src={p.main_image}
    />
  ));
  return (
    <>
      <h3 className={`mt-3 mb-2 appTitle`}>{SubName}</h3>
      <MainContainer>{allProducts}</MainContainer>
    </>
  );
};

export default ShowSubCateogories;
