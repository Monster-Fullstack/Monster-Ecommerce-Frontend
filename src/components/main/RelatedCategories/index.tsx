import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import useGet from "./../../../hooks/useGet";
import MainContainer from "./../../UI/MainContainer/index";
import ShowCategories from "./../ShowCategories/index";
import Loader from "./../Loader/index";

const RelatedCategories: React.FC = () => {
  const { isDataReady, data } = useGet("new_categories");

  return (
    <MainContainer>
      <SectionTitle
        title="Related Categories"
        content="Some Of Related Categories, You May Like"
      />
      {isDataReady ? (
        <ShowCategories categories={data.main_cat} />
      ) : (
        <Loader many={1} />
      )}
    </MainContainer>
  );
};

export default RelatedCategories;
