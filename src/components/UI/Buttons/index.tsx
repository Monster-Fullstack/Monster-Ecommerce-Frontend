import React from "react";
import cl from "./index.module.scss";
import {motion} from "framer-motion";
import {ButtonProductAni, ButtonProductAni2, ButtonSiteAni} from "./ButtonsAni";

export const ButtonSite:
    React.FC<{ onClick?: () => void, width?: string, title?: string, className?: string }>
    = ({onClick, className, width = "auto", title, children}) => {
    return (
        <motion.button
            onClick={onClick}
            title={title}
            className={`${cl.btnSite} ${className}`}
            style={{"width": width}}
            variants={ButtonSiteAni}
            whileHover="hover"
        >
            {children}
        </motion.button>
    );
};

export const ButtonProduct: React.FC<{ onClick?: () => void, background?: string }>
    = ({onClick, background}) => {
    return (
        <motion.button
            style={{background: background}}
            className={cl.btnProduct}
            onClick={onClick}
            initial="hidden"
            whileHover="hover"
        >
            <motion.p
                variants={ButtonProductAni}
            >
                ADD TO CART
            </motion.p>
            <motion.p
                variants={ButtonProductAni2}
                className={cl.buy}
            >
                BUY
            </motion.p>
        </motion.button>
    );
};