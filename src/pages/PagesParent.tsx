import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { PagesAnimation } from "../components/Animations/PagesAnimation";

const PagesParent: React.FC = ({ children }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
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
