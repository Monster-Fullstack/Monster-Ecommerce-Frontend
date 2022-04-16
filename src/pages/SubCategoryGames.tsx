import React from "react";
import PagesParent from "./PagesParent";
import ShowProductsSub from "./../components/main/Product/ShowProductsSub/index";

const SubCategoryGames = () => {
  return (
    <PagesParent>
      <ShowProductsSub isGames={true} />
    </PagesParent>
  );
};

export default SubCategoryGames;
