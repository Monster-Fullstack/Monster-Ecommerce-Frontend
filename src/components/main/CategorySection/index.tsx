import React from "react";
import {Row} from "react-bootstrap";
import MainContainer from "../../UI/MainContainer";
import SectionTitle from "../../UI/SectionTitle";
import Category from "../../../interfaces/Category";
import CategoryCard from "../../UI/AllCards/CategoryCard";
import MainCol from "../../UI/Cols/MainCol";

const CategorySection: React.FC = () => {
    let DUMMY_CATEGORIES: Category[] = [
        {
            "name": "Mobiles",
            "src": "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
            "alt": "Mobiles",
        },
        {
            "name": "Fashion",
            "src": "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
            "alt": "Fashion",
        },
        {
            "name": "Electronics",
            "src": "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
            "alt": "Electronics",
        },
        {
            "name": "Travel",
            "src": "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
            "alt": "Travel",
        },
        {
            "name": "Top Offers",
            "src": "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
            "alt": "Top Offers",
        },
        {
            "name": "Appliances",
            "src": "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
            "alt": "Appliances",
        },
        {
            "name": "Appliances",
            "src": "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
            "alt": "Appliances",
        },
        {
            "name": "Appliances",
            "src": "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
            "alt": "Appliances",
        }
    ];

    const categories = DUMMY_CATEGORIES.map((el, idx) => (
        <MainCol key={idx}>
            <CategoryCard name={el.name} src={el.src} alt={el.alt}/>
        </MainCol>
    ));

    return (
        <MainContainer fluid={false}>
            <SectionTitle title="Categories" content="Some Of Our Exclusive Collection, You May Like"/>
            <Row>
                {categories}
            </Row>
        </MainContainer>
    );
};

export default CategorySection;