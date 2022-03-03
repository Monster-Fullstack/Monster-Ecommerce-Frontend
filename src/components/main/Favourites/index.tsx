import React from "react";
import MainContainer from "../../UI/MainContainer";
import ShowManyInSlider from "../../UI/Products/ShowManyInSlider";
import SectionTitle from "../../UI/SectionTitle";
import { DUMMY_PRODUCTS } from "../FeaturedProducts";

const Favourites = () => {
  return (
    <MainContainer>
      <SectionTitle
        title="my favourite items"
        content="Add Them To Card Now &#128293;"
      />
      <p className="linkStyle">Remove All Favourite</p>
      <ShowManyInSlider groupSlider={true} items={DUMMY_PRODUCTS} />
    </MainContainer>
  );
};

export default Favourites;
