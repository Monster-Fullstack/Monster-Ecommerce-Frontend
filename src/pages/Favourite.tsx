import React from "react";
import Favourites from "../components/main/Favourites";
import PagesParent from "./Container/PagesParent";

const Favourite = () => {
  return (
    <PagesParent>
      <Favourites />
    </PagesParent>
  );
};

export default Favourite;
