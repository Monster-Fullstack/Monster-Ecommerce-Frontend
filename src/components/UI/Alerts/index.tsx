import React from "react";
import cl from "./index.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { FieldError } from "react-hook-form";
import { AlertFormAni } from "./Animations";
import { Toast } from "react-bootstrap";

interface AlertProps {
  error: FieldError;
  className?: string;
}

export const ErrorForm: React.FC<AlertProps> = ({ error, className }) => {
  return (
    <AnimatePresence>
      {error && (
        <motion.div
          className={`alert alert-danger ${cl.errorForm} ${className} mt-3`}
          variants={AlertFormAni}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p>{error.message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
