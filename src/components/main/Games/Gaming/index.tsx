import React from "react";
import useGet from "../../../../hooks/useGet";
import MainContainer from "../../../UI/MainContainer";
import ShowCategories from "../../Category/ShowCategories";
import Loader from "../../Loader";
import SectionTitle from "../../../UI/SectionTitle/index";

const Gaming: React.FC = () => {
  const { isDataReady, data } = useGet(`magic_words/get_cats/gamer`);
  return (
    <MainContainer fluid={false}>
      <SectionTitle
        title="For Gamers &#10084;&#65039;"
        content="Best Products For You, Gamer &#127918;"
      />
      {isDataReady ? (
        <ShowCategories
          isDataReady={isDataReady}
          showInslider={false}
          categories={data}
        />
      ) : (
        <Loader type="items" many={6} />
      )}
    </MainContainer>
  );
};

export default Gaming;
