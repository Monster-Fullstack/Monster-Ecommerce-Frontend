import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import MainContainer from "../../UI/MainContainer/index";
import useGet from "../../../hooks/useGet";
import { GroupItemsSlider } from "./../../UI/Sliders/index";
import ShowProducts from "../ShowProducts";

const BestFor: React.FC<{ type: string }> = ({ type }) => {
  const { isDataReady, data } = useGet(`products/bestfor/${type}`);
  return (
    <MainContainer>
      <SectionTitle
        title={`Best For ${type}`}
        content={`Best Products For ${type}`}
      />
      {isDataReady && <ShowProducts products={data} />}
    </MainContainer>
  );
};

export default BestFor;
