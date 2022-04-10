import React from "react";
import PagesParent from "./PagesParent";
import MainContainer from "./../components/UI/MainContainer/index";
import ShowAllCategories from "../components/main/ShowAllCategories";
import useGet from "./../hooks/useGet";
import { NormalTitle } from "./../components/UI/SectionTitle/index";

const SubCategories: React.FC = () => {
  const { isDataReady, data: cats } = useGet("subcategories_only");
  return (
    <PagesParent>
      <MainContainer>
        <NormalTitle title="Subcategories" content="" />
        <ShowAllCategories
          type="subcategory"
          isDataReady={isDataReady}
          cats={cats}
        />
      </MainContainer>
    </PagesParent>
  );
};

export default SubCategories;
