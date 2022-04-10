import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import MainContainer from "./../../UI/MainContainer/index";
import useGet from "./../../../hooks/useGet";
import { ItemsSlider } from "./../../UI/Sliders/index";
import Loader from "./../Loader/index";

const UnderXDollars: React.FC<{ dollars: number; type?: "asc" | "desc" }> = ({
  dollars,
  type = "asc",
}) => {
  const { isDataReady, data } = useGet(`products/under/${dollars}_${type}`);

  return (
    <MainContainer>
      <SectionTitle
        title={`Products Under $${dollars}`}
        content="Some Of Great Price Products &#128293;"
      />
      {isDataReady ? (
        <ItemsSlider items={data} />
      ) : (
        <Loader many={4} type="items" />
      )}
    </MainContainer>
  );
};

export default UnderXDollars;
