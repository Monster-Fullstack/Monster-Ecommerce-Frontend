import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AppURL from "../../../api/AppURL";
import CartCard from "../../UI/AllCards/CartCard";
import TotalPriceCard from "../../UI/AllCards/TotalPriceCard";
import MainContainer from "../../UI/MainContainer";
import { NormalTitle } from "../../UI/SectionTitle";
import { ErrorToast } from "../../UI/Toasts/ToastType";
import Loader from "../Loader";
import BestSellerProducts from "../Product/BestSellerProducts";

const CartParent = ({ type }) => {
  const [data, setData] = useState<any>();
  const [isDataReady, setIsDataReady] = useState(false);

  useEffect(() => {
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
    if (type === "error") {
      ErrorToast("Something went wrong!, Please try another card");
    }
  }, [type]);

  const products = isDataReady ? (
    data?.all?.map((item) => (
      <Col key={item.id} xs={12}>
        <CartCard
          name={item.name}
          id={item.id}
          price={item.quantity ? item.total : item.price}
          description={item.description}
          quantity={item?.quantity}
          src={item.main_image?.name}
          setData={setData}
          setIsDataReady={setIsDataReady}
        />
      </Col>
    ))
  ) : (
    <Loader type="cart_items" many={3} />
  );
  return (
    <MainContainer className="text-start" inCenter={false} fluid={false}>
      <NormalTitle title="Shopping Cart" content="" />
      <Row className="mb-5">
        <Col lg={9} md={9} sm={12} xs={12} className="mt-3">
          {isDataReady && data.all.length <= 0 ? (
            <div className="notfound_img">
              <h3>Not found any products in your cart!</h3>
            </div>
          ) : (
            products
          )}
        </Col>
        <Col className="mt-3" lg={3} md={3} sm={12} xs={12}>
          {isDataReady ? (
            <TotalPriceCard price={data.all.length <= 0 ? 0 : data.total} />
          ) : (
            <Loader type="title" />
          )}
        </Col>
      </Row>
      <BestSellerProducts />
    </MainContainer>
  );
};

export default CartParent;
