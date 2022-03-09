import React from "react";
import cl from "./index.module.scss";
import { motion } from "framer-motion";

const inpAni = {
  hidden: {
    x: 35,
  },

  visible: {
    x: 0,
    transition: {
      delay: 1,
      duration: 0.7,
    },
  },
};

interface inputsModels {
  className?: string;
  settings: object;
}

export const InputSite: React.FC<inputsModels> = ({ className, settings }) => {
  return (
    <motion.input
      className={`form-control ${cl.inputSite} ${className}`}
      variants={inpAni}
      {...settings}
    />
  );
};

export const TextAreaSite: React.FC<inputsModels> = ({
  className,
  settings,
}) => {
  return (
    <motion.textarea
      className={`form-control ${cl.inputSite} ${className}`}
      variants={inpAni}
      {...settings}
    />
  );
};
