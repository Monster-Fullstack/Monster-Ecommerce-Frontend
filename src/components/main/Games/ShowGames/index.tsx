import React from "react";
import GameCard from "./../../../UI/AllCards/GameCard/index";
import { Row, Col } from "react-bootstrap";

const ShowGames = ({ games }) => {
  const AllGames = games.map((game, idx) => (
    <Col key={idx} xl={3} lg={3} md={4} sm={6} xs={12}>
      <GameCard
        key={idx}
        GameNameClass="text-white"
        name={game.name}
        id={game.id}
        src={game.main_image}
        alt={game.name}
        price={game.price}
      />
    </Col>
  ));
  return <Row>{AllGames}</Row>;
};

export default ShowGames;
