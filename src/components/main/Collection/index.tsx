import React from "react";
import MainContainer from "../../UI/MainContainer";
import { Col, Row } from "react-bootstrap";
import SectionTitle from "../../UI/SectionTitle";
import { SectionContent } from "../../../App";
import ProductCard from "../../UI/AllCards/ProductCard";
import useGet from "./../../../hooks/useGet";
import Loader from "./../Loader/index";

const Collection: React.FC = () => {
  const { isDataReady, data } = useGet("collection_products");

  const products =
    isDataReady &&
    data.map((product, idx) => (
      <Col key={idx} xl={3} lg={3} md={3} sm={6} xs={10}>
        <ProductCard
          alt={product.alt}
          id={product.id}
          src={product.main_image.name}
          description={product.description}
          name={product.name}
          price={product.price}
        />
      </Col>
    ));
  return (
    <MainContainer>
      <SectionTitle title="Product Collection" content={SectionContent} />
      <Row>{isDataReady ? products : <Loader many={12} type="items" />}</Row>
    </MainContainer>
  );
};

export default Collection;
