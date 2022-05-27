import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ButtonBig } from "../../Buttons";
import cl from "./index.module.scss";
import PriceCard from "../PriceCard";
import RemainCard from "../RemainCard";
import { Link } from "react-router-dom";

const FullProductCard: React.FC<{ product: any }> = ({ product }) => {
  const productX = product.product;
  return (
    <div className={cl.card}>
      <Link to={`/product/${productX.id}`}>
        <Row>
          <Col xl={4} lg={4} sm={6} xs={12}>
            <img
              className={`${cl.img}`}
              alt={productX.name}
              src={productX.main_image.name}
            />
          </Col>
          <Col xl={8} lg={8} sm={6} xs={12}>
            <Card className={`text-start ${cl.rightCard}`}>
              <Card.Header className={cl.mainColor} as="h5">
                {productX.name}
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <span className={cl.mainColor}>Category:</span> {product.cat}
                </Card.Title>
                <Card.Title>
                  <span className={cl.mainColor}>Subcategory:</span>{" "}
                  {product.sub}
                </Card.Title>
                <RemainCard
                  quantity={productX.quantity}
                  sells={productX.sells}
                />
                <PriceCard price={productX.price} />
                <Card.Text className={cl.description}>
                  {productX.description}
                </Card.Text>
                <ButtonBig secondText="Add To Card">Buy</ButtonBig>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Link>
    </div>
  );
};

export default FullProductCard;
