import React from "react";
import { Col } from "react-bootstrap";
import LeftPart from "../../../main/Games/LeftPart/index";

const DetailsCard = ({ product, isDataReady }) => {
  return (
    <Col lg={6} md={6} xs={12}>
      <LeftPart isDataReady={isDataReady} item={product} />
    </Col>
  );
};

export default DetailsCard;
