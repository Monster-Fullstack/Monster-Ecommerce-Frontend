import React from "react";
import MainContainer from "../../UI/MainContainer";
import {Col, Row} from "react-bootstrap";
import SectionTitle from "../../UI/SectionTitle";
import {SectionContent} from "../../../App";
import {DUMMY_PRODUCTS} from "../FeaturedProducts";
import ProductCard from "../../UI/AllCards/ProductCard";

const Collection: React.FC = () => {
    const products = DUMMY_PRODUCTS.map((product, idx) => (
        <Col key={idx} xl={3} lg={3} md={3} sm={6} xs={12}>
            <ProductCard
                alt={product.alt}
                src={product.src}
                name={product.name}
                price={product.price}
            />
        </Col>
    ));
    return (
        <MainContainer>
            <SectionTitle title="Product Collection" content={SectionContent}/>
            <Row>
                {products}
            </Row>
        </MainContainer>
    );
};

export default Collection;