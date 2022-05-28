import React from "react";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { MainImage } from "../../Images";
import RateCard from "./../RateCard/index";
import Price from "./../../Price/index";
import useResponsive from "./../../../../hooks/useResponsive";
import cl from "./index.module.scss";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoMdCloudDone } from "react-icons/io";

const CardWithoutLogic = ({ status, name, price, src, quantity }) => {
  const mode = useResponsive();
  return (
    <>
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
                <Col className="mt-3" lg={6} xs={12}>
                  <Card.Title className="m-0">{name}</Card.Title>
                  <RateCard rate={4.5} />
                </Col>
                <Col className="mt-3 text-start" lg={4} xs={12}>
                  {quantity && (
                    <p
                      className={`${cl.status} ${
                        status ? "text-success" : "text-warning"
                      }`}
                    >
                      {status ? (
                        <>
                          Delivered
                          <IoMdCloudDone className="ms-2 fs-2" />
                        </>
                      ) : (
                        <>
                          <AiOutlineLoading3Quarters className="me-3 loading" />
                          Preparation
                        </>
                      )}
                    </p>
                  )}
                </Col>
                <Col className="mt-3 text-start p-0" lg={2} xs={12}>
                  <Price price={price} />
                  {quantity && <p className={cl.amount}>Amount: {quantity}</p>}
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardWithoutLogic;
