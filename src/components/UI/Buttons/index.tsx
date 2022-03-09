import React from "react";
import cl from "./index.module.scss";
import { motion } from "framer-motion";
import {
  ButtonProductAni,
  ButtonProductAni2,
  ButtonSiteAni,
} from "./ButtonsAni";
import { BigButtonModel, Button } from "../../../interfaces/Button";

export const ButtonSite: React.FC<Button> = ({
  onClick,
  className,
  width = "auto",
  title,
  children,
  type = "button",
}) => {
  return (
    <motion.button
      onClick={onClick}
      title={title}
      className={`${cl.btnSite} ${className}`}
      style={{ width: width }}
      type={type}
      variants={ButtonSiteAni}
      whileHover="hover"
    >
      {children}
    </motion.button>
  );
};

export const ButtonBig: React.FC<BigButtonModel> = ({
  onClick,
  background,
  secondText,
  children,
}) => {
  return (
    <motion.button
      style={{ background: background }}
      className={cl.btnProduct}
      onClick={onClick}
      initial="hidden"
      whileHover="hover"
    >
      <motion.p variants={ButtonProductAni}>{children}</motion.p>
      <motion.p variants={ButtonProductAni2} className={cl.buy}>
        {secondText}
      </motion.p>
    </motion.button>
  );
};
