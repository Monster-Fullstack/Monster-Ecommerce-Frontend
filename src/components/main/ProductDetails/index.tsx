import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Product from "../../../interfaces/Product";
import DetailsAndReviews from "../../UI/AllCards/DetailsAndReviews";
import DetailsCard from "../../UI/AllCards/DetailsCard";
import DetailsRightCard from "../../UI/AllCards/DetailsRightCard";
import { DUMMY_PRODUCTS } from "../FeaturedProducts";

const ProductDetails: React.FC = () => {
  // @ts-ignore
  const [product, setProduct] = useState<Product>({});
  const { id } = useParams();

  useEffect(() => {
    const get = DUMMY_PRODUCTS.filter((p: Product) => p.id === +id);
    // @ts-ignore
    setProduct(get);
  }, [id]);

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
                <DetailsCard photos={[product[0].src]} />
                <DetailsRightCard
                  name={product[0].name}
                  price={product[0].price}
                />
              </Row>

              <Row>
                <DetailsAndReviews description={product[0].description} />
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </Fragment>
  );
};

export default ProductDetails;
