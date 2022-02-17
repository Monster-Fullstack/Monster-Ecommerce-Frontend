import React from "react";
import {Col} from "react-bootstrap";

const NavCol: React.FC<{ className?: string }> = ({className, children}) => {
    return (
        <Col className={className} lg={4} md={4} sm={12} xs={12}>
            {children}
        </Col>
    );
};

export default NavCol;