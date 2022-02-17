import React from "react";
import MainContainer from "../../UI/MainContainer";
import SectionTitle from "../../UI/SectionTitle";
import {SectionContent} from "../../../App";
import {Row} from "react-bootstrap";
import MainSlider from "../../UI/Sliders/MainSlider";


const NewArrival: React.FC = () => {
    return (
        <MainContainer>
            <SectionTitle title="New Arrival" content={SectionContent}/>
            <Row>
                <MainSlider type={"product-slider"}/>
            </Row>
        </MainContainer>
    );
};

export default NewArrival;