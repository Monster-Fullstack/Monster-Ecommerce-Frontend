import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import useGet from "./../../../hooks/useGet";
import MainContainer from "./../../UI/MainContainer/index";
import ShowCategories from "./../ShowCategories/index";

const RelatedCategories: React.FC = () => {
  const { isDataReady, data } = useGet("new_categories");

  return (
    <MainContainer>
      <SectionTitle
        title="Related Categories"
        content="Some Of Related Categories, You May Like"
      />
      {isDataReady && <ShowCategories categories={data.main_cat} />}
    </MainContainer>
  );
};

export default RelatedCategories;
