import React from "react";
import SectionTitle from "../../../UI/SectionTitle";
import MainContainer from "../../../UI/MainContainer";
import ShowProducts from "../../../UI/Products/ShowProducts";
import useGet from "../../../../hooks/useGet";
import Loader from "../../Loader";

const RelatedProducts = ({ subcatid }) => {
  const { isDataReady, data } = useGet(`products/related/${subcatid}`);

  return (
    <MainContainer>
      <SectionTitle
        title="Related Products"
        content="Some Of Related Products, You May Like"
      />
      {isDataReady ? (
        <ShowProducts products={data} slices={8} />
      ) : (
        <Loader many={6} type="items" />
      )}
    </MainContainer>
  );
};

export default RelatedProducts;
