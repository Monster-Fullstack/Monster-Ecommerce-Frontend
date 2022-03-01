import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NormalTitle } from "../../UI/SectionTitle";
import Text from "../../UI/Text";

const TextPages: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <Container className="pt-4">
      <NormalTitle className="mb-2 mt-5" title={title} content="" />
      <Row>
        <Col>
          <Text>
            {children}
          </Text>
        </Col>
      </Row>
    </Container>
  );
};

export default TextPages;
