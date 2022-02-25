import React from "react";
import MainContainer from "../../UI/MainContainer";
import SectionTitle from "../../UI/SectionTitle";
import {SectionContent} from "../../../App";
import {Row} from "react-bootstrap";
import {ProductSlider} from "../../UI/Sliders";


const NewArrival: React.FC = () => {
    return (
        <MainContainer>
            <SectionTitle title="New Arrival" content={SectionContent}/>
            <Row>
                <ProductSlider/>
            </Row>
        </MainContainer>
    );
};

export default NewArrival;