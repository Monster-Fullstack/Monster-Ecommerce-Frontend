import React from "react";
import { Row } from "react-bootstrap";
import MainContainer from "../../../UI/MainContainer";
import SectionTitle from "../../../UI/SectionTitle";
import Loader from "../../Loader";
import ShowCategories from "../ShowCategories";
import useGet from "./../../../../hooks/useGet";

const CategorySection: React.FC = () => {
  const { isDataReady, data, loading } = useGet("category");
  const cats = isDataReady && data.map((p) => p.main_cat);
  return (
    <MainContainer fluid={false}>
      <SectionTitle
        title="Categories"
        content="Some Of Our Exclusive Collection, You May Like"
      />
      <Row>
        {isDataReady ? (
          <ShowCategories categories={cats} />
        ) : (
          <Loader many={6} type="items" />
        )}
      </Row>
    </MainContainer>
  );
};

export default CategorySection;
