import React from "react";
import MainContainer from "../../UI/MainContainer";
import SectionTitle from "../../UI/SectionTitle";
import { SectionContent } from "../../../App";
import SlidersModels from "../../../interfaces/SlidersModels";
import ShowManyInSlider from "../../UI/Products/ShowManyInSlider";
import { DUMMY_PRODUCTS } from "../FeaturedProducts";

const NewArrival: React.FC<SlidersModels> = ({ groupSlider = false }) => {
  return (
    <MainContainer>
      <SectionTitle title="New Products" content={SectionContent} />
      <ShowManyInSlider groupSlider={groupSlider} items={DUMMY_PRODUCTS} />
    </MainContainer>
  );
};

export default NewArrival;
