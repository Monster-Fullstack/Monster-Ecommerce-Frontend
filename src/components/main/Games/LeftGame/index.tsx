import React from "react";
import ItemPhotos from "../../ItemPhotos";
import Loader from "./../../Loader/index";

const LeftGame = ({ isDataReady, game }) => {
  return (
    <>
      {isDataReady ? (
        <>
          <ItemPhotos photos={game.photos} />
        </>
      ) : (
        <Loader type="slider" />
      )}
    </>
  );
};

export default LeftGame;
