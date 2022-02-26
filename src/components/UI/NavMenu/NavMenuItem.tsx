import React, {useState} from "react";
import cl from "./index.module.scss";
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import {itemsNavAni} from "../../Animations/Item";

const NavMenuItem: React.FC<{ to: string }>
    = ({to, children}) => {
    const [isItemClicked, setIsItemClicked] = useState(false);
    const handlingItems = (eo: any) => {
        if (!eo.target.classList.contains("active")) {
            setIsItemClicked(true);
            const timer = setTimeout(() => {
                setIsItemClicked(false);
                clearTimeout(timer);
            }, 500);
        }
    };
    return (
        <motion.div
            variants={itemsNavAni}
            animate={isItemClicked ? "clicked" : "init"}
            onClick={handlingItems}
        >
            <NavLink
                className={`list-group-item nav-font nav-itemmenu list-group-item-action ${cl.items}`}
                to={to}
            >
                {children}
            </NavLink>
        </motion.div>
    );
};

export default NavMenuItem;