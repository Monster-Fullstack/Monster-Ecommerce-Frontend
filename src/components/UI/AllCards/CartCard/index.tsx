import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import useResponsive from "../../../../hooks/useResponsive";
import Product from "../../../../interfaces/Product";
import { MainImage } from "../../Images";
import Price from "../../Price";
import RateCard from "../RateCard";
import cl from "./index.module.scss";

const CartCard: React.FC<Product> = ({ name, description, price, src }) => {
  const mode = useResponsive();
  return (
    <Card className={cl.card}>
      <Card.Body className="p-1">
        <Row className={mode === "phone" || mode === "tablet" ? "h-75" : ""}>
          <Col
            md={2}
            xs={3}
            className={mode === "phone" || mode === "tablet" ? "h-100" : ""}
          >
            <MainImage src={src} alt={name} />
          </Col>
          <Col md={10} xs={8}>
            <Row className="w-100">
              <Col className="mt-3" lg={7} xs={12}>
                <Card.Title className="m-0">{name}</Card.Title>
                <p className="m-0">{description}</p>
                <RateCard rate={4.5} />
              </Col>
              <Col className="mt-3 text-end" lg={3} xs={12}>
                <p className="linkStyle">Remove</p>
                <p className="linkStyle">Add To Favourite</p>
              </Col>
              <Col className="mt-3 text-start p-0" lg={2} xs={12}>
                <Price price={price * 2} />
                <p className={cl.amount}>Amount: 2</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CartCard;
