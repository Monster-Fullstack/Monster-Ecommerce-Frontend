import React from "react";
import SectionTitle from "../../../UI/SectionTitle";
import MainContainer from "../../../UI/MainContainer";
import useGet from "../../../../hooks/useGet";
import Loader from "../../Loader";
import { useParams } from "react-router-dom";
import ShowGames from "../ShowGames";

const FreeGames = () => {
  const { id } = useParams();
  const { isDataReady, data: games } = useGet(`games/free/${id}`);

  return (
    <MainContainer>
      <SectionTitle
        title="Free Games &#128293;"
        content="Games Are Free To Play &#128293;"
      />
      {isDataReady ? (
        <ShowGames games={games} />
      ) : (
        <Loader many={12} type="items" />
      )}
    </MainContainer>
  );
};

export default FreeGames;
