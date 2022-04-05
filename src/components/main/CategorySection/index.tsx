import React from "react";
import { Row } from "react-bootstrap";
import MainContainer from "../../UI/MainContainer";
import SectionTitle from "../../UI/SectionTitle";
import useGet from "./../../../hooks/useGet";
import { GroupItemsSliderCategory } from "./../../UI/Sliders/index";

const CategorySection: React.FC = () => {
  const { isDataReady, data, loading } = useGet("category");

  return (
    <MainContainer fluid={false}>
      <SectionTitle
        title="Categories"
        content="Some Of Our Exclusive Collection, You May Like"
      />
      <Row>
        {isDataReady && !loading && <GroupItemsSliderCategory items={data} />}
      </Row>
    </MainContainer>
  );
};

export default CategorySection;
