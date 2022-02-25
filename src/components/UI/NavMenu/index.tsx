import React from "react";
import cl from "./index.module.scss";
import NavMenuItem from "./NavMenuItem";
import {AiFillHome} from "react-icons/ai";
import {ListGroup} from "react-bootstrap";
import {FcAbout} from "react-icons/fc";
import {FaStoreAlt} from "react-icons/fa";
import OverLayNavMobile from "../OverLayNavMobile";
import {motion} from "framer-motion";
import {menuAni} from "./NavAnimation";
import Categories from "../Categories";
import Cart from "../Cart";

const NavMenu: React.FC<{ toggleNav: () => void }> = ({toggleNav}) => {
    return (
        <motion.div
            className={cl.sideNavOpen}
            variants={menuAni}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <OverLayNavMobile toggleNav={toggleNav}/>
            <h3 className={cl.appTitle}>MonStore</h3>
            <div className="mt-3 mb-2 d-flex align-items-center flex-column justify-content-center">
                <Cart cart="mobile"/>
            </div>
            <ListGroup>
                <NavMenuItem>
                    <AiFillHome/> Home
                </NavMenuItem>
                <NavMenuItem>
                    <FaStoreAlt/> Shop
                </NavMenuItem>
                <NavMenuItem>
                    <FcAbout/> About Us
                </NavMenuItem>
            </ListGroup>
            <h3 className={`mt-3 mb-2 ${cl.appTitle}`}>Categories</h3>
            <Categories/>
        </motion.div>
    );
};

export default NavMenu;