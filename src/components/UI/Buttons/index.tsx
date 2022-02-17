import React from "react";
import cl from "./index.module.scss";
import {Button} from "react-bootstrap";

export const ButtonSite: React.FC<{ width?: string, title?: string }>
    = ({width = "auto", title, children}) => {
    return (
        <Button title={title} className={`${cl.btnSite}`} style={{"width": width}}>
            {children}
        </Button>
    );
};
