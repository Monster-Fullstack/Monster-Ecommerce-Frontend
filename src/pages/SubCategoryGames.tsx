import React from "react";
import PagesParent from "./Container/PagesParent";
import ShowProductsSub from "./../components/main/Product/ShowProductsSub/index";

const SubCategoryGames = ({ setGameMode }) => {
  setGameMode(true);
  return (
    <PagesParent mode="gaming">
      <ShowProductsSub isGames={true} />
    </PagesParent>
  );
};

export default SubCategoryGames;
