import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import DetailsAndReviews from "../../../UI/AllCards/DetailsAndReviews";
import DetailsCard from "../../../UI/AllCards/DetailsCard";
import DetailsRightCard from "../../../UI/AllCards/DetailsRightCard";
import Loader from "../../Loader/index";

const ProductDetails = ({ isDataReady, AllProductData }) => {
  const product = isDataReady && AllProductData.product;
  return (
    <Fragment>
      <Container className="BetweenTwoSection">
        <Row className="p-2">
          {isDataReady ? (
            <DetailsCard isDataReady={isDataReady} product={product} />
          ) : (
            <Loader many={3} />
          )}
          {isDataReady ? (
            <DetailsRightCard AllProductData={AllProductData} />
          ) : (
            <Loader many={2} />
          )}
        </Row>

        <Row>
          {isDataReady ? (
            <DetailsAndReviews description={product.description} />
          ) : (
            <Loader many={2} />
          )}
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProductDetails;
