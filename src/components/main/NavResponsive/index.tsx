import React from "react";
import NavMenuMobile from "../../Layouts/Navbars/NavMenuMobile";
import NavMenuDesk from "../../Layouts/Navbars/NavMenuDesk";
import useResponsive from "../../../hooks/useResponsive";

const NavResponsive: React.FC = () => {
    const mode = useResponsive();

    return (
        <>
            {
                mode === "phone" || mode === "tablet"
                    ? <NavMenuMobile/>
                    : <NavMenuDesk/>
            }
        </>
    );
};

export default NavResponsive;