import React from "react";
import { Row, Col } from "react-bootstrap";
import { NormalTitle } from "./../../../UI/SectionTitle/index";

const GameTitle = ({ game_name }) => {
  return (
    <Row>
      <Col md={1}></Col>
      <Col>
        <NormalTitle className="text-start mt-0" content="" title={game_name} />
      </Col>
    </Row>
  );
};

export default GameTitle;
