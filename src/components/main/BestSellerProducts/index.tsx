import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import useGet from "../../../hooks/useGet";
import MainContainer from "../../UI/MainContainer/index";
import ShowProducts from "../../UI/Products/ShowProducts";
import { ItemsSlider } from "../../UI/Sliders";
import Loader from "./../Loader/index";

const BestSellerProducts: React.FC = () => {
  const { isDataReady, data } = useGet("products/best_sellers");

  return (
    <MainContainer>
      <SectionTitle
        title="Best Seller Products"
        content="Some Of Best Seller Products, You May Like"
      />
      {isDataReady ? (
        <ItemsSlider items={data} />
      ) : (
        <Loader many={4} type="items" />
      )}
    </MainContainer>
  );
};

export default BestSellerProducts;
