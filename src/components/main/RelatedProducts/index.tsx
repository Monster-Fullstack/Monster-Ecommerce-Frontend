import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import MainContainer from "../../UI/MainContainer";
import SlicesProducts from "../../UI/SlicesProducts";
import { DUMMY_PRODUCTS } from "../FeaturedProducts";

const FeaturedProducts: React.FC = () => {
  return (
    <MainContainer>
      <SectionTitle
        title="Related Products"
        content="Some Of Related Products, You May Like"
      />
      <SlicesProducts products={DUMMY_PRODUCTS} />
    </MainContainer>
  );
};

export default FeaturedProducts;
