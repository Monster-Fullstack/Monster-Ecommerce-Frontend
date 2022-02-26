import React from "react";
import cl from "./index.module.scss";
import {motion} from "framer-motion";

const inpAni = {
    hidden: {
        x: 35,
    },

    visible: {
        x: 0,
        transition: {
            delay: 1,
            duration: 0.7
        }
    }
};

export const InputSite: React.FC<{ settings: object, className?: string }>
    = ({settings, className = ""}) => {
    return (
        <motion.input
            className={`form-control ${cl.inputSite} ${className}`}
            variants={inpAni}
            {...settings}
        />
    );
};

