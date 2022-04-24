import React from "react";
import PagesParent from "./PagesParent";
import GamePage from "./../components/main/Games/GamePage/index";

const Game = ({ setGameMode }) => {
  setGameMode(true);
  return (
    <PagesParent mode="gaming">
      <GamePage />
    </PagesParent>
  );
};

export default Game;
