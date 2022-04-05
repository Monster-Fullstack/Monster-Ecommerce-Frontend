import React from "react";
import { Col, Row } from "react-bootstrap";
import CartCard from "../../UI/AllCards/CartCard";
import TotalPriceCard from "../../UI/AllCards/TotalPriceCard";
import MainContainer from "../../UI/MainContainer";
import ShowManyInSlider from "../../UI/Products/ShowManyInSlider";
import SectionTitle, { NormalTitle } from "../../UI/SectionTitle";
import useGet from "./../../../hooks/useGet";

const CartParent = () => {
  const { isDataReady, data } = useGet("collection_products");

  const products =
    isDataReady &&
    data.slice(0, 2).map((product, idx) => (
      <Col key={idx} xs={12}>
        <CartCard
          name={product.name}
          id={product.id}
          price={product.price}
          description={product.description}
          src={product.src}
        />
      </Col>
    ));
  return (
    <MainContainer className="text-start" inCenter={false} fluid={false}>
      <NormalTitle title="Shopping Cart" content="" />
      <Row>
        <Col lg={9} md={9} sm={12} xs={12} className="mt-3">
          {products}
        </Col>
        <Col className="mt-3" lg={3} md={3} sm={12} xs={12}>
          <TotalPriceCard amount={3} price={1000} />
        </Col>
      </Row>
      <div className="text-center">
        <SectionTitle
          title="Related Products"
          content="Related Products, You May Like"
        />
        {isDataReady && <ShowManyInSlider groupSlider={true} items={data} />}
      </div>
    </MainContainer>
  );
};

export default CartParent;
