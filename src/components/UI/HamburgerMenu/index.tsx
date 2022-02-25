import React from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {ButtonSite} from "../Buttons";
import cl from "./index.module.scss";


const Hamburger: React.FC<{ toggleNav: () => void }> = ({toggleNav}) => {
    return (
        <ButtonSite onClick={toggleNav} className={cl.burger}>
            <GiHamburgerMenu/>
        </ButtonSite>
    );
};

export default Hamburger;