import React from "react";
import PagesParent from "./Container/PagesParent";
import Gaming from "./../components/main/Games/Gaming/index";

const Gamer = ({ setGameMode }) => {
  setGameMode(true);
  return (
    <PagesParent mode="gaming">
      <Gaming />
    </PagesParent>
  );
};

export default Gamer;
