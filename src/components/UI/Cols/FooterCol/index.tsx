import React from "react";
import {Col} from "react-bootstrap";

const FooterCol: React.FC = ({children}) => {
    return (
        <Col className="mt-3 mb-3" lg={3} md={3} sm={6} xs={12}>
            {children}
        </Col>
    );
};

export default FooterCol;