import React from "react";
import cl from "./index.module.scss";

const TopNav: React.FC<{ className?: string }> = ({
  children,
  className = "",
}) => {
  return <div className={`${className} ${cl.TopSectionDown}`}>{children}</div>;
};

export default TopNav;
