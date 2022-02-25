import React from "react";
import cl from "./index.module.scss";
import {motion} from "framer-motion";
import NavAnimation from "../../Layouts/Navbars/NavMenuDesk/NavAnimation";

export const InputSite: React.FC<{ settings: object, className?: string }>
    = ({settings, className = ""}) => {
    return (
        <motion.input
            variants={NavAnimation}
            className={`form-control ${cl.inputSite} ${className}`}
            {...settings}
        />
    );
};

