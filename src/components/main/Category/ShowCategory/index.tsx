import React from "react";
import { useParams } from "react-router-dom";
import { NormalTitle } from "../../../UI/SectionTitle/index";
import useGet from "../../../../hooks/useGet";
import MainContainer from "../../../UI/MainContainer/index";
import { Row, Col } from "react-bootstrap";
import { FaSadTear } from "react-icons/fa";
import { ShowSubCat } from "../../../UI/Products/ShowProducts/index";
import Loader from "../../Loader/index";

const ShowCategory = () => {
  const { id } = useParams();
  const { loading, isDataReady, data } = useGet(`category/${id}`);
  return (
    <>
      <MainContainer className="ps-5 pe-5">
        <Row>
          <Col>
            {isDataReady ? (
              <>
                <NormalTitle title={data.main_cat.cat_name} content="" />
                {data.sub_cats.length > 0 ? (
                  <ShowSubCat categories={data.sub_cats} />
                ) : (
                  <h4>
                    <FaSadTear fill="darkred" size={40} /> Not found any
                    subcategories for this category
                  </h4>
                )}
              </>
            ) : (
              <Loader many={1} />
            )}
          </Col>
        </Row>
      </MainContainer>
    </>
  );
};

export default ShowCategory;
