import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cl from "./index.module.scss";

const DetailsCard: React.FC<{ photos: string[] }> = ({ photos }) => {
  return (
    <Col md={6} lg={6} sm={12} xs={12}>
      <div style={{ padding: "30px 8.5rem" }}>
        <img
          alt="product images"
          className={`w-100 ${cl.photos}`}
          src={photos[0]}
        />
      </div>
      <Container className="my-3">
        <Row>
          <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
            <img
              alt="product images"
              className={`w-100 ${cl.belowPhotos}`}
              src={photos[0]}
            />
          </Col>
          <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
            <img
              alt="product images"
              className={`w-100 ${cl.belowPhotos}`}
              src={photos[0]}
            />
          </Col>
          <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
            <img
              alt="product images"
              className={`w-100 ${cl.belowPhotos}`}
              src={photos[0]}
            />
          </Col>
          <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
            <img
              alt="product images"
              className={`w-100 ${cl.belowPhotos}`}
              src={photos[0]}
            />
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default DetailsCard;
