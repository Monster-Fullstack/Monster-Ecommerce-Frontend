import React, { useContext } from "react";
import PagesParent from "../PagesParent";
import TextPages from "../../components/main/TextPages";
import SiteInfoContext from "../../store/SiteInfo";
import Loader from "./../../components/main/Loader";

const Purchase: React.FC = () => {
  const { HandlingData, isSiteInfoReady } = useContext(SiteInfoContext);

  return (
    <PagesParent>
      {isSiteInfoReady ? (
        <TextPages title="how to purchase">
          {HandlingData("purchase")}
        </TextPages>
      ) : (
        <Loader many={2} />
      )}
    </PagesParent>
  );
};

export default Purchase;
