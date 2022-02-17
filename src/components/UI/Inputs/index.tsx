import React from "react";
import cl from "./index.module.scss";
import {FormControl} from "react-bootstrap";

export const InputSite: React.FC<{ settings: object, className?: string }>
    = ({settings, className = ""}) => {
    return (
        <FormControl
            className={`${cl.inputSite} ${className}`}
            {...settings}
        />
    );
};

