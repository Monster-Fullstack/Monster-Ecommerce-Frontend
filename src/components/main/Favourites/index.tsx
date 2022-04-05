import React from "react";
import MainContainer from "../../UI/MainContainer";
import ShowManyInSlider from "../../UI/Products/ShowManyInSlider";
import SectionTitle from "../../UI/SectionTitle";
import useGet from "./../../../hooks/useGet";

const Favourites = () => {
  const { isDataReady, data } = useGet("collection_products");

  return (
    <MainContainer>
      <SectionTitle
        title="my favourite items"
        content="Add Them To Card Now &#128293;"
      />
      <p className="linkStyle">Remove All Favourite</p>
      {isDataReady && <ShowManyInSlider groupSlider={true} items={data} />}
    </MainContainer>
  );
};

export default Favourites;
