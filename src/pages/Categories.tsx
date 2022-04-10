import React from "react";
import ShowAllCategories from "../components/main/ShowAllCategories";
import MainContainer from "../components/UI/MainContainer";
import { NormalTitle } from "../components/UI/SectionTitle";
import PagesParent from "./PagesParent";
import useGet from "./../hooks/useGet";

const Categories: React.FC = () => {
  const { isDataReady, data: cats } = useGet("categories_only");
  return (
    <PagesParent>
      <MainContainer>
        <NormalTitle title="Categories" content="" />
        <ShowAllCategories isDataReady={isDataReady} cats={cats} />
      </MainContainer>
    </PagesParent>
  );
};

export default Categories;
