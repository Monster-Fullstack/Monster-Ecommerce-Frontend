import React from "react";
import MainContainer from "./../../../UI/MainContainer/index";
import GameTitle from "./../GameTitle/index";
import Loader from "./../../Loader/index";
import { Row, Col } from "react-bootstrap";
import RightGame from "./../RightGame/index";
import { useParams } from "react-router-dom";
import useGet from "./../../../../hooks/useGet";
import RelatedGames from "../RelatedGames";
import GamesMayLike from "./../GamesMayLike/index";
import FreeGames from "../FreeGames";
import LeftPart from "../LeftPart/index";

const GamePage = () => {
  const { id } = useParams();
  const { isDataReady, data: game } = useGet("game/" + id);
  return (
    <MainContainer fluid={false}>
      {isDataReady ? (
        <GameTitle game_name={game.name} />
      ) : (
        <Loader type="title" />
      )}
      <Row className="mt-2 justify-content-center">
        <Col lg={6} md={6} xs={12}>
          <LeftPart isDataReady={isDataReady} item={game} />
        </Col>
        <Col lg={4} md={5} xs={12}>
          <RightGame isDataReady={isDataReady} game={game} />
        </Col>
      </Row>

      <RelatedGames />
      <GamesMayLike />
      <FreeGames />
    </MainContainer>
  );
};

export default GamePage;
