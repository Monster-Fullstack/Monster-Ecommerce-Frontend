import React from "react";
import MainContainer from "../../../UI/MainContainer";
import SectionTitle from "../../../UI/SectionTitle";
import { SectionContent } from "../../../../App";
import SlidersModels from "../../../../interfaces/SlidersModels";
import ShowManyInSlider from "../../../UI/Products/ShowManyInSlider";
import useGet from "../../../../hooks/useGet";
import Loader from "../../Loader/index";

const NewArrival: React.FC<SlidersModels> = ({ groupSlider = false }) => {
  const { isDataReady, data } = useGet("new_products");
  return (
    <MainContainer>
      <SectionTitle title="New Products" content={SectionContent} />
      {isDataReady ? (
        <ShowManyInSlider groupSlider={groupSlider} items={data} />
      ) : (
        <Loader many={4} type="items" />
      )}
    </MainContainer>
  );
};

export default NewArrival;
