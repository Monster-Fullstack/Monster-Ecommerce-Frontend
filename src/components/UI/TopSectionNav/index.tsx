import React from "react";
import cl from "./index.module.scss";

const TopNav: React.FC = ({children}) => {
    return (
        <div className={cl.TopSectionDown}>
            {children}
        </div>
    );
};

export default TopNav;