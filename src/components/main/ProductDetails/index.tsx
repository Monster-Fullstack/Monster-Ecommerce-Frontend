import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useGet from "../../../hooks/useGet";
import DetailsAndReviews from "../../UI/AllCards/DetailsAndReviews";
import DetailsCard from "../../UI/AllCards/DetailsCard";
import DetailsRightCard from "../../UI/AllCards/DetailsRightCard";
import Loader from "./../Loader/index";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { isDataReady, data } = useGet(`product/${id}`);

  return (
    <Fragment>
      <Container className="BetweenTwoSection">
        <Row className="p-2">
          <Col
            className="shadow-sm bg-white pb-3 mt-4"
            md={12}
            lg={12}
            sm={12}
            xs={12}
          >
            <Row>
              {isDataReady ? (
                <DetailsCard photos={[data.main_image]} />
              ) : (
                <Loader many={3} />
              )}
              {isDataReady ? (
                <DetailsRightCard product={data} />
              ) : (
                <Loader many={2} />
              )}
            </Row>

            <Row>
              {isDataReady ? (
                <DetailsAndReviews description={data.description} />
              ) : (
                <Loader many={2} />
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProductDetails;
