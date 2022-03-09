import React, { useContext } from "react";
import PagesParent from "../PagesParent";
import TextPages from "../../components/main/TextPages";
import SiteInfoContext from "../../store/SiteInfo";
import Loader from "./../../components/main/Loader";

const About: React.FC = () => {
  const { isSiteInfoReady, HandlingData } = useContext(SiteInfoContext);

  return (
    <PagesParent>
      {isSiteInfoReady ? (
        <TextPages title="About Us">{HandlingData("about")}</TextPages>
      ) : (
        <Loader many={2} />
      )}
    </PagesParent>
  );
};

export default About;
