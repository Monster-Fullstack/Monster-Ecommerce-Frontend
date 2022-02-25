import React from "react";
import cl from "./index.module.scss";
import Categories from "../Categories";

const MegaMenu: React.FC = () => {

    return (
        <div className={cl.accordionMenuDiv}>
            <div className={cl.accordionMenuDivInside}>
                <Categories/>
            </div>
        </div>
    );
};

export default MegaMenu;