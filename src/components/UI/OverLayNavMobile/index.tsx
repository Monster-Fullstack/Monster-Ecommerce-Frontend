import React from "react";
import ReactDOM from "react-dom";
import cl from "./index.module.scss";

const OverLayComponent: React.FC<{ toggleNav: () => void }>
    = ({toggleNav}) => {
    return (
        <div onClick={toggleNav} className={cl.ContentOverlayOpen}></div>
    );
};

const OverLayNavMobile: React.FC<{ toggleNav: () => void }>
    = ({toggleNav}) => ReactDOM.createPortal(
    <OverLayComponent toggleNav={toggleNav}/>,
    document.getElementById("overlay")!
);

export default OverLayNavMobile;