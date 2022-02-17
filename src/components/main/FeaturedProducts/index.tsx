import React from "react";
import {Row} from "react-bootstrap";
import SectionTitle from "../../UI/SectionTitle";
import MainContainer from "../../UI/MainContainer";
import ProductCard from "../../UI/AllCards/ProductCard";
import Product from "../../../interfaces/Product";
import MainCol from "../../UI/MainCol";

export let DUMMY_PRODUCTS: Product[] = [
    {
        "name": "APPLE iPhone 12 (Red, 64 GB)",
        "price": 2500,
        "src": "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/q/8/f/apple-iphone-12-dummyapplefsn-original-imafwg8drqaam5vu.jpeg?q=70",
        "alt": "APPLE iPhone 12 (Red, 64 GB)",
    },
    {
        "name": "APPLE iPhone 12 (Red, 64 GB)",
        "price": 2500,
        "src": "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/q/8/f/apple-iphone-12-dummyapplefsn-original-imafwg8drqaam5vu.jpeg?q=70",
        "alt": "APPLE iPhone 12 (Red, 64 GB)",
    },
    {
        "name": "realme GT NEO 2 (NEO Black, 128 GB)  (8 GB RAM)",
        "price": 499.99,
        "src": "https://rukminim1.flixcart.com/image/416/416/kumzpu80/mobile/h/x/v/gt-neo2-5g-rmx3370-realme-original-imag7puemtw7atdk.jpeg?q=70",
        "alt": "realme GT NEO 2",
    },
    {
        "name": "POCO F3 GT (Predator Black, 128 GB)  (8 GB RAM)",
        "price": 999.99,
        "src": "https://rukminim1.flixcart.com/image/416/416/krf91u80/mobile/i/f/m/f3-gt-mzb09huin-poco-original-imag57hec6wkrk77.jpeg?q=70",
        "alt": "POCO F3 GT",
    },
    {
        "name": "Women Bralette Non Padded Bra  (Multicolor)",
        "price": 49.99,
        "src": "https://rukminim1.flixcart.com/image/800/960/k84t1u80/bra/2/r/q/non-padded-32-no-regular-regular-cb3-msl-piylu-original-imafq759bychs7cb.jpeg?q=50",
        "alt": "Women Bralette Non Padded Bra",
    },
    {
        "name": "Women Bralette Non Padded Bra  (Multicolor)",
        "price": 49.99,
        "src": "https://rukminim1.flixcart.com/image/800/960/k84t1u80/bra/2/r/q/non-padded-32-no-regular-regular-cb3-msl-piylu-original-imafq759bychs7cb.jpeg?q=50",
        "alt": "Women Bralette Non Padded Bra",
    }
];
const FeaturedProducts: React.FC = () => {
    const products = DUMMY_PRODUCTS.map((product, idx) => (
        <MainCol key={idx}>
            <ProductCard alt={product.alt} src={product.src} name={product.name} price={product.price}/>
        </MainCol>
    ));
    return (
        <MainContainer>
            <SectionTitle title="featured products" content="Some Of Our Exclusive Collection, You May Like"/>
            <Row>
                {products}
            </Row>
        </MainContainer>
    );
};

export default FeaturedProducts;