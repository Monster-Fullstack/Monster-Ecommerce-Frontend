import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {DUMMY_PRODUCTS} from "../../main/FeaturedProducts";
import ProductCard from "../AllCards/ProductCard";
import {Autoplay, Mousewheel, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import cl from "./index.module.scss";
import MainContainer from "../MainContainer";

export const ProductSlider: React.FC = () => {
    // products
    const products = DUMMY_PRODUCTS.map((product, idx) => (
        <SwiperSlide key={idx}>
            <ProductCard
                description={product.description}
                alt={product.alt}
                src={product.src}
                name={product.name}
                className={cl.card}
                price={product.price}
            />
        </SwiperSlide>
    ));

    return (
        <MainContainer>
            <Swiper
                spaceBetween={10}
                loop={true}
                autoplay={{delay: 2000, disableOnInteraction: false}}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {products}
            </Swiper>
        </MainContainer>
    );
};

export const MainSlider: React.FC = () => {
    return (
        <>
            <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                className={`mySwiper ${cl.sliderBig}`}
                mousewheel={true}
                loop={true}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination, Autoplay]}
            >
                <SwiperSlide>
                    <img
                        className={cl.mainSliderImages}
                        alt="Store Image"
                        src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=895&q=80"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        alt="Store Image"
                        src="https://images.unsplash.com/photo-1518838439236-2b73ceb4638a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        alt="Store Image"
                        src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
                </SwiperSlide>
            </Swiper>
        </>
    );
};