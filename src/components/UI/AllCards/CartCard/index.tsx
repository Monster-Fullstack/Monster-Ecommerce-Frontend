import axios from "axios";
import React, { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import AppURL from "../../../../api/AppURL";
import useResponsive from "../../../../hooks/useResponsive";
import CartContext from "../../../../store/Cart";
import { MainImage } from "../../Images";
import Price from "../../Price";
import { ErrorToast, SuccessToast } from "../../Toasts/ToastType";
import RateCard from "../RateCard";
import cl from "./index.module.scss";

const CartCard = ({
  setIsDataReady,
  setData,
  id,
  name,
  description,
  price,
  src,
  quantity,
}) => {
  const mode = useResponsive();
  const { changeCount } = useContext(CartContext);
  const removeItem = () => {
    setIsDataReady(false);
    // if the quantity is exist that means this is product not game
    // if product
    if (quantity) {
      axios
        .post(AppURL.RemoveFromCartURL, {
          product_id: id,
        })
        .then((response: any) => {
          changeCount();
          SuccessToast(response.data.message);
          axios
            .get(AppURL.GetItemOfCartURL)
            .then((response) => {
              setData(response.data);
              setIsDataReady(true);
            })
            .catch((error) => {
              ErrorToast(error.response.data.message);
              setIsDataReady(true);
            });
        })
        .catch((error) => {
          ErrorToast(error.response.data.message);
        });
    } // if game
    else {
      axios
        .post(AppURL.RemoveGameFromCartURL, {
          game_id: id,
        })
        .then((response: any) => {
          changeCount();
          SuccessToast(response.data.message);
          axios
            .get(AppURL.GetItemOfCartURL)
            .then((response) => {
              setData(response.data);
              setIsDataReady(true);
            })
            .catch((error) => {
              ErrorToast(error.response.data.message);
              setIsDataReady(true);
            });
        })
        .catch((error) => {
          ErrorToast(error.response.data.message);
        });
    }
  };
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
                <p className="m-0">{description.slice(0, 45) + "..."}</p>
                <RateCard rate={4.5} />
              </Col>
              <Col className="mt-3 text-end" lg={3} xs={12}>
                <p onClick={removeItem} className="linkStyle">
                  Remove
                </p>
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
  );
};

export default CartCard;
