import React, {useEffect, useState} from "react";

type Responsive = "phone" | "tablet" | "desktop" | "bigDesktop" | "TVScreen" | "";
const useResponsive = (): Responsive => {
    const [mode, setMode] = useState<Responsive>("");
    useEffect(() => {
        const check = () => {
            if (matchMedia("(max-width: 576px").matches) {
                setMode("phone");
            } else if (matchMedia("(max-width: 768px").matches) {
                setMode("tablet");
            } else if (matchMedia("(max-width: 992px").matches) {
                setMode("desktop");
            } else if (matchMedia("(max-width: 1200px").matches) {
                setMode("bigDesktop");
            } else {
                setMode("TVScreen");
            }
        };
        window.addEventListener("resize", check);
        check();
        return () => window.removeEventListener("resize", check);
    }, []);

    return mode;
};

export default useResponsive;
