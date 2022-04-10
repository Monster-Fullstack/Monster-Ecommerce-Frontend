import React from "react";
import SectionTitle from "../../../UI/SectionTitle";
import MainContainer from "../../../UI/MainContainer/index";
import useGet from "../../../../hooks/useGet";
import ShowProducts from "../ShowProducts";
import Loader from "../../Loader/index";

const BestFor: React.FC<{ type: string }> = ({ type }) => {
  const { isDataReady, data } = useGet(`products/bestfor/${type}`);
  return (
    <MainContainer>
      <SectionTitle
        title={`Best For ${type}`}
        content={`Best Products For ${type}`}
      />
      {isDataReady ? (
        <ShowProducts products={data} />
      ) : (
        <Loader many={4} type="items" />
      )}
    </MainContainer>
  );
};

export default BestFor;
