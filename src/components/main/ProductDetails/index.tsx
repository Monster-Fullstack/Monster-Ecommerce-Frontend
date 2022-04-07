import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useGet from "../../../hooks/useGet";
import Product from "../../../interfaces/Product";
import DetailsAndReviews from "../../UI/AllCards/DetailsAndReviews";
import DetailsCard from "../../UI/AllCards/DetailsCard";
import DetailsRightCard from "../../UI/AllCards/DetailsRightCard";

const ProductDetails: React.FC = () => {
  // @ts-ignore
  const [product, setProduct] = useState<Product>({});
  const { id } = useParams();
  const { loading, isDataReady, data } = useGet(`product/${id}`);

  useEffect(() => {
    isDataReady && !loading && setProduct(data);
  }, [data, isDataReady, loading]);

  return (
    <Fragment>
      {Object.keys(product).length > 0 && (
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
                <DetailsCard photos={[product.main_image]} />
                <DetailsRightCard product={product} />
              </Row>

              <Row>
                <DetailsAndReviews description={product.description} />
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </Fragment>
  );
};

export default ProductDetails;
