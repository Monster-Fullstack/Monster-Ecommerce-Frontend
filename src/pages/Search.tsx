import React from "react";
import { NormalTitle } from "../components/UI/SectionTitle";
import PagesParent from "./Container/PagesParent";
import { useParams } from "react-router-dom";
import useGet from "./../hooks/useGet";
import ShowProductsNoSliders from "./../components/main/Product/ShowProductsNoSliders/index";
import Loader from "../components/main/Loader";
import MainContainer from "../components/UI/MainContainer";
import ShowGames from "../components/main/Games/ShowGames";

const Search: React.FC<{ isGames?: boolean; setGameMode? }> = ({
  isGames = false,
  setGameMode,
}) => {
  isGames && setGameMode(true);
  const { key } = useParams();
  const { isDataReady, data: items } = useGet(
    `search_${isGames ? "game" : "product"}/${key}`
  );

  return (
    <PagesParent mode={isGames ? "gaming" : "normal"}>
      <MainContainer fluid={false}>
        <NormalTitle title={`Searched For: ${key} `} content="" />
        {isDataReady ? (
          items.length > 0 ? (
            isGames ? (
              <ShowGames games={items} />
            ) : (
              <ShowProductsNoSliders products={items} />
            )
          ) : (
            <h4>Not Found Any Products!</h4>
          )
        ) : (
          <Loader type="items" many={8} />
        )}
      </MainContainer>
    </PagesParent>
  );
};

export default Search;
