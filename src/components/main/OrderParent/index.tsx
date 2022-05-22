import React from "react";
import Loader from "./../Loader/index";
import { Col, Row } from "react-bootstrap";
import MainContainer from "../../UI/MainContainer";
import { NormalTitle } from "./../../UI/SectionTitle/index";
import useGet from "../../../hooks/useGet";
import CardWithoutLogic from "../../UI/AllCards/CartCard/CardWithoutLogic";

const OrderParent = () => {
  const { isDataReady, data } = useGet("orders");

  const products = isDataReady ? (
    data?.products?.map((product) => (
      <Col key={product.id} xs={12}>
        <CardWithoutLogic
          name={product.name}
          price={product.total}
          quantity={product.quantity}
          src={product.main_image?.name}
          status={product.status}
        />
      </Col>
    ))
  ) : (
    <Loader type="cart_items" many={3} />
  );
  return (
    <MainContainer className="text-start" inCenter={false} fluid={false}>
      <NormalTitle title="your orders" content="" />
      <Row className="mb-5">
        <Col lg={9} md={9} sm={12} xs={12} className="mt-3">
          {isDataReady && data.products.length <= 0 ? (
            <div className="notfound_img">
              <h3>Not found any orders!</h3>
            </div>
          ) : (
            products
          )}
        </Col>
      </Row>
    </MainContainer>
  );
};

export default OrderParent;
