import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import MainContainer from "../../UI/MainContainer";
import ShowProducts from "../../UI/Products/ShowProducts";
import useGet from "./../../../hooks/useGet";

const FeaturedProducts: React.FC = () => {
  const { isDataReady, data } = useGet("featured_products");
  return (
    <MainContainer>
      <SectionTitle
        title="featured products"
        content="Some Of Our Exclusive Collection, You May Like"
      />
      {isDataReady && <ShowProducts products={data} slices={6} />}
    </MainContainer>
  );
};

export default FeaturedProducts;
