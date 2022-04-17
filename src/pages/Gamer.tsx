import React, { useEffect } from "react";
import PagesParent from "./PagesParent";
import Gaming from "./../components/main/Gaming/index";

const Gamer = ({setGameMode}) => {
  setGameMode(true);
  return (
    <PagesParent mode="gaming">
      <Gaming />
    </PagesParent>
  );
};

export default Gamer;
