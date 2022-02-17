import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {DUMMY_PRODUCTS} from "../../../main/FeaturedProducts";
import ProductCard from "../../AllCards/ProductCard";
import cl from "./index.module.scss";
import Slider1 from "../../../../assets/images/slider/slider1.jpg";
import Slider2 from "../../../../assets/images/slider/slider2.jpg";
import Slider3 from "../../../../assets/images/slider/slider3.jpg";

const MainSlider: React.FC<{ type: "big-slider" | "product-slider" }>
    = ({type}) => {
    const checkType = type === "product-slider";

    // settings for slider
    let settings = {
        dots: !checkType,
        infinite: true,
        speed: 500,
        slidesToShow: checkType ? 4 : 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: checkType ? 4 : 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: checkType ? 4 : 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // for products
    if (type === "product-slider") {
        // products
        const products = DUMMY_PRODUCTS.map((product, idx) => (
            <div key={idx}>
                <ProductCard alt={product.alt} src={product.src} name={product.name} price={product.price}/>
            </div>
        ));
        return (
            <Slider {...settings}>
                {products}
            </Slider>
        );
    }
    // for big slider
    else {
        return (
            <Slider className={cl.sliderBig} {...settings}>
                <h5>
                    <img src={Slider1} alt="Image 1"/>
                </h5>
                <h5>
                    <img src={Slider2} alt="Image 2"/>
                </h5>
                <h5>
                    <img src={Slider3} alt="Image 3"/>
                </h5>
            </Slider>
        );
    }
};

export default MainSlider;