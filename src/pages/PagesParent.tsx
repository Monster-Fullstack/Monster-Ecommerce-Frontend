import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { PagesAnimation } from "../components/Animations/PagesAnimation";

const PagesParent: React.FC<{ mode?: "normal" | "gaming" }> = ({
  mode = "normal",
  children,
}) => {
  useEffect(() => {
    window.scroll(0, 0);
    const body = document.querySelector("body") as HTMLElement;
    if (mode === "gaming") {
      body.classList.add("background-games");
    } else {
      body.classList.remove("background-games");
    }
  }, [mode]);
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
