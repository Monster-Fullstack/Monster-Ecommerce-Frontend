import React from "react";
import SectionTitle from "../../../UI/SectionTitle";
import MainContainer from "../../../UI/MainContainer";
import useGet from "../../../../hooks/useGet";
import Loader from "../../Loader";
import { useParams } from "react-router-dom";
import ShowGames from "../ShowGames";

const GamesMayLike = () => {
  const { id } = useParams();
  const { isDataReady, data: games } = useGet(`games/maylike/${id}`);

  return (
    <MainContainer>
      <SectionTitle title="You May Like" content="More Games, You May Like" />
      {isDataReady ? (
        <ShowGames games={games} />
      ) : (
        <Loader many={12} type="items" />
      )}
    </MainContainer>
  );
};

export default GamesMayLike;
