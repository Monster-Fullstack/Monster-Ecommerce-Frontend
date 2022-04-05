import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import MainContainer from "../../UI/MainContainer";
import ShowProducts from "../../UI/Products/ShowProducts";
import useGet from "./../../../hooks/useGet";

const RelatedProducts: React.FC = () => {
  const { isDataReady, data } = useGet("new_products");

  return (
    <MainContainer>
      <SectionTitle
        title="Related Products"
        content="Some Of Related Products, You May Like"
      />
      {isDataReady && <ShowProducts products={data} slices={6} />}
    </MainContainer>
  );
};

export default RelatedProducts;
