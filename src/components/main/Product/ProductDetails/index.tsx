import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useGet from "../../../../hooks/useGet";
import DetailsAndReviews from "../../../UI/AllCards/DetailsAndReviews";
import DetailsCard from "../../../UI/AllCards/DetailsCard";
import DetailsRightCard from "../../../UI/AllCards/DetailsRightCard";
import Loader from "../../Loader/index";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { isDataReady, data: AllProductData } = useGet(`product/${id}`);
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
