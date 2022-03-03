import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import MainContainer from "../../UI/MainContainer";
import { DUMMY_PRODUCTS } from "../FeaturedProducts";
import ShowProducts from "../../UI/Products/ShowProducts";

const FeaturedProducts: React.FC = () => {
  return (
    <MainContainer>
      <SectionTitle
        title="Related Products"
        content="Some Of Related Products, You May Like"
      />
      <ShowProducts products={DUMMY_PRODUCTS} slices={6} />
    </MainContainer>
  );
};

export default FeaturedProducts;
