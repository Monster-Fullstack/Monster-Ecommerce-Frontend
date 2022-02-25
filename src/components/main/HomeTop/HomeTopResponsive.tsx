import React from "react";
import HomeTop from "./index";
import useResponsive from "../../../hooks/useResponsive";

const HomeTopResponsive = () => {
    const mode = useResponsive();
    return (
        <>
            {
                mode === "phone" || mode === "tablet"
                    ? <HomeTop Type="mobile"/>
                    : <HomeTop/>
            }
        </>
    );
};

export default HomeTopResponsive;
