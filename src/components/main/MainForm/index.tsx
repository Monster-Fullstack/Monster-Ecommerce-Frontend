import React, {FC, ReactComponentElement} from "react";
import {Col, Row} from "react-bootstrap";
import MainContainer from "../../UI/MainContainer";

const MainForm: React.FC<{ UsedForm: ReactComponentElement<FC> }> =
    ({UsedForm}) => {
        return (
            <MainContainer>
                <Row>
                    <Col sm={12}>
                        <Row>
                            <Col md={6} lg={6} sm={12} xs={12}>
                                {UsedForm}
                            </Col>
                            <Col md={6} lg={6} sm={6} xs={6}>
                                Image will be here
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </MainContainer>
        );
    };

export default MainForm;