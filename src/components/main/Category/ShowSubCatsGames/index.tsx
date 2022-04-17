import React from "react";
import GameCard from "./../../../UI/AllCards/GameCard/index";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const ShowSubCatsGames: React.FC<{ games: any[] }> = ({ games }) => {
  const allGames = games.map((game, idx) => (
    <Col key={idx} xl={3} lg={3} md={4} sm={6} xs={12}>
      <GameCard
        alt={game.name}
        src={game.main_image}
        name={game.name}
        id={game.id}
        price={game.price}
      />
    </Col>
  ));
  return <Row className="w-100">{allGames}</Row>;
};

export default ShowSubCatsGames;
