import React from "react";
import {Col} from "react-bootstrap";

const MainCol: React.FC = ({children}) => {
    return (
        <Col className="pt-2" xl={2} lg={4} md={4} sm={6} xs={10}>
            {children}
        </Col>
    );
};

export default MainCol;