import React from "react";
import cl from "./index.module.scss";

const Text: React.FC = ({ children }) => {
  return <p className={cl.title}>{children}</p>;
};

export default Text;
