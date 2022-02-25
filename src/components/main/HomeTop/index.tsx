import React from "react";
import {Col, Row} from "react-bootstrap";
import MegaMenu from "../../UI/MegaMenu";
import MainContainer from "../../UI/MainContainer";
import {MainSlider} from "../../UI/Sliders";

const HomeTop: React.FC<{ Type?: "mobile" | "desktop" }>
    = ({Type = "desktop"}) => {
    return (
        <MainContainer className="overflow-hidden m-0 p-0">
            <Row>
                {Type === "desktop" ? (
                    <>
                        <Col lg={3} md={3} sm={12}>
                            <MegaMenu/>
                        </Col>
                        <Col lg={9} md={9} sm={12}>
                            <MainSlider/>
                        </Col>
                    </>
                ) : (
                    <>
                        <Col sm={12}>
                            <MainSlider/>
                        </Col>
                    </>
                )}
            </Row>
        </MainContainer>
    );
};

export default HomeTop;