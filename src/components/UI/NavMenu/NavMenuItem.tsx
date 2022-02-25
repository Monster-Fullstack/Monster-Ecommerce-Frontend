import React from "react";
import cl from "./index.module.scss";
import {motion} from "framer-motion";
import {itemsAni} from "../../Animations/Item";

const NavMenuItem: React.FC = ({children}) => {
    return (
        <motion.a
            className={`list-group-item nav-font nav-itemmenu list-group-item-action ${cl.items}`}
            variants={itemsAni}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            {children}
        </motion.a>
    );
};

export default NavMenuItem;