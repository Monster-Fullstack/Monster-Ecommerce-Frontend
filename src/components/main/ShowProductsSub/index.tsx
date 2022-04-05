import React from "react";
import { useParams } from "react-router-dom";
import { NormalTitle } from "./../../UI/SectionTitle/index";
import useGet from "./../../../hooks/useGet";
import MainContainer from "./../../UI/MainContainer/index";
import { Row, Col } from "react-bootstrap";
import ShowProducts from "./../../UI/Products/ShowProducts/index";
import { FaSadTear } from "react-icons/fa";

const ShowProductsSub = () => {
  const { id } = useParams();
  const { loading, isDataReady, data } = useGet(`subcategory/${id}`);

  console.log(isDataReady && data);
  return (
    <>
      <MainContainer className="ps-5 pe-5">
        <Row>
          <Col>
            {isDataReady && !loading && (
              <>
                <NormalTitle title={data.cat_name} content="" />
                {data.products.length > 0 ? (
                  <ShowProducts
                    slices={data.products.length}
                    products={data.products}
                  />
                ) : (
                  <h4>
                    <FaSadTear fill="darkred" size={40} /> Not found any
                    products for this category
                  </h4>
                )}
              </>
            )}
          </Col>
        </Row>
      </MainContainer>
    </>
  );
};

export default ShowProductsSub;
