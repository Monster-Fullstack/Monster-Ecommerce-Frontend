import React from "react";
import { motion } from "framer-motion";

const PagesAnimation = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },

  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const PagesParent: React.FC = ({ children }) => {
  return (
    <motion.div
      variants={PagesAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PagesParent;
