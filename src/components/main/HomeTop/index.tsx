import React from "react";
import {Col, Row} from "react-bootstrap";
import MegaMenu from "../../UI/MegaMenu";
import MainSlider from "../../UI/Sliders/MainSlider";
import MainContainer from "../../UI/MainContainer";

const HomeTop: React.FC = () => {
    return (
        <MainContainer className="overflow-hidden m-0 p-0">
            <Row>
                <Col lg={3} md={3} sm={12}>
                    <MegaMenu/>
                </Col>
                <Col lg={9} md={9} sm={12}>
                    <MainSlider type={"big-slider"}/>
                </Col>
            </Row>
        </MainContainer>
    );
};

export default HomeTop;