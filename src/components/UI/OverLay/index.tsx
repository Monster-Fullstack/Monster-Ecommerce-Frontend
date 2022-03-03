import React from "react";
import ReactDOM from "react-dom";
import cl from "./index.module.scss";

const OverLayComponent: React.FC<{ toggleLay: () => void }> = ({
  toggleLay,
}) => {
  return <div onClick={toggleLay} className={cl.ContentOverlayOpen}></div>;
};

const OverLay: React.FC<{ toggleLay: () => void }> = ({ toggleLay }) =>
  ReactDOM.createPortal(
    <OverLayComponent toggleLay={toggleLay} />,
    document.getElementById("overlay")!
  );

export default OverLay;
