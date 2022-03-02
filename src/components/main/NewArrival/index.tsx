import React from "react";
import MainContainer from "../../UI/MainContainer";
import SectionTitle from "../../UI/SectionTitle";
import { SectionContent } from "../../../App";
import { Row } from "react-bootstrap";
import { GroupItemsSlider, ProductSlider } from "../../UI/Sliders";
import { DUMMY_PRODUCTS } from "../FeaturedProducts";

const NewArrival: React.FC<{ groupSlider?: boolean }> = ({
  groupSlider = false,
}) => {
  return (
    <MainContainer>
      <SectionTitle title="New Products" content={SectionContent} />
      <Row>
        {!groupSlider ? (
          <ProductSlider />
        ) : (
          <GroupItemsSlider items={DUMMY_PRODUCTS} />
        )}
      </Row>
    </MainContainer>
  );
};

export default NewArrival;
