import React from "react";
import { useParams } from "react-router-dom";
import { NormalTitle } from "../../../UI/SectionTitle/index";
import useGet from "../../../../hooks/useGet";
import MainContainer from "../../../UI/MainContainer/index";
import { Row, Col } from "react-bootstrap";
import ShowProducts from "../../../UI/Products/ShowProducts/index";
import { FaSadTear } from "react-icons/fa";
import Loader from "../../Loader/index";
import ShowSubCatsGames from "../../Category/ShowSubCatsGames";

const ShowProductsSub = ({ isGames = false }) => {
  const { id } = useParams();
  const check = isGames ? "subcategory-games" : "subcategory";
  const { isDataReady, data } = useGet(`${check}/${id}`);

  return (
    <>
      <MainContainer className="ps-5 pe-5">
        <Row>
          <Col>
            {isDataReady ? (
              <>
                <NormalTitle title={data.main_cat} content="" />
                {isGames ? (
                  data.games.length > 0 ? (
                    <ShowSubCatsGames games={data.games} />
                  ) : (
                    <h4>
                      <FaSadTear fill="darkred" size={40} /> Not found any games
                      for this category
                    </h4>
                  )
                ) : data.products.length > 0 ? (
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
            ) : (
              <Loader many={2} />
            )}
          </Col>
        </Row>
      </MainContainer>
    </>
  );
};

export default ShowProductsSub;
