import React from "react";
import useGet from "./../hooks/useGet";
import SiteInfoTypes from "./../interfaces/SiteInfoData";
import parse from "html-react-parser";

const SiteInfoContext = React.createContext({
  siteInfo: {},
  isSiteInfoReady: false,
  HandlingData: (info: SiteInfoTypes): any => {},
});

export const SiteInfoProvider: React.FC = ({ children }) => {
  // to all small pages
  const { data: siteInfo, isDataReady: isSiteInfoReady } = useGet(
    "siteinfo",
    "siteinfo",
    (data, setData) => {
      setData(data);
      sessionStorage.setItem("siteinfo", JSON.stringify(data));
    }
  );

  const HandlingData = (info: SiteInfoTypes) => {
    if (isSiteInfoReady && typeof siteInfo === "string") {
      const handling = JSON.parse(siteInfo);
      return parse(handling[info]);
    }
  };

  return (
    <SiteInfoContext.Provider
      value={{ siteInfo, isSiteInfoReady, HandlingData }}
    >
      {children}
    </SiteInfoContext.Provider>
  );
};

export default SiteInfoContext;
