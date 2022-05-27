import React, { useContext } from "react";
import TextPages from "../../components/main/TextPages";
import SiteInfoContext from "../../store/SiteInfo";
import PagesParent from "../Container/PagesParent";
import Loader from "./../../components/main/Loader";

const Privacy: React.FC = () => {
  const {HandlingData, isSiteInfoReady} = useContext(SiteInfoContext);

  return (
    <PagesParent>
      {isSiteInfoReady ? (
        <TextPages title="privacy policy">{HandlingData("privacy")}</TextPages>
      ) : (
        <Loader many={2} />
      )}
    </PagesParent>
  );
};

export default Privacy;
