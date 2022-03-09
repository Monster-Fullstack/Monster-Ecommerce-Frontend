import React from "react";
import MainContainer from "../../UI/MainContainer";
import parse from "html-react-parser";

const Loader: React.FC<{ many?: number }> = ({ many = 1 }) => {
  let allLoaders = "";
  for (let i = 0; i < many; i++) {
    allLoaders += `<div className="ph-item">
        <div className="ph-col-12">
          <div className="ph-row">
            <div className="ph-col-4"></div>
            <div className="ph-col-8 empty"></div>
            <div className="ph-col-6"></div>
            <div className="ph-col-6 empty"></div>
            <div className="ph-col-12"></div>
            <div className="ph-col-12"></div>
            <div className="ph-col-12"></div>
            <div className="ph-col-12"></div>
          </div>
        </div>
      </div>`;
  }

  const htmlLoader = parse(allLoaders);
  return <MainContainer>{htmlLoader}</MainContainer>;
};

export default Loader;
