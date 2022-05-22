import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../AllCards/ProductCard";
import { Autoplay, Mousewheel, Pagination } from "swiper";
import MainContainer from "../MainContainer";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import cl from "./index.module.scss";
import CategoryCard from "../AllCards/CategoryCard";
import { Link } from "react-router-dom";
import useGet from "./../../../hooks/useGet";
import Loader from "./../../main/Loader/index";

export const ItemsSlider: React.FC<{ items: any[] }> = ({ items }) => {
  // products
  const products = items.map((product, idx) => (
    <SwiperSlide key={idx}>
      <ProductCard
        description={product.description}
        alt={product.alt}
        id={product.id}
        src={product.main_image.name}
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
        autoplay={{ delay: 2000, disableOnInteraction: false }}
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
            slidesPerView: 4,
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

export const CategorySlider: React.FC<{ items: any[] }> = ({ items }) => {
  // products
  const products = items.map((cat, idx) => (
    <SwiperSlide key={idx}>
      <Link to={`/category/${cat.id}`}>
        <CategoryCard
          src={cat.cat_image}
          name={cat.cat_name}
          className={cl.card}
        />
      </Link>
    </SwiperSlide>
  ));

  return (
    <MainContainer>
      <Swiper
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
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
            slidesPerView: 4,
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
  const { isDataReady, data } = useGet("home/slider");
  const sliders =
    isDataReady &&
    data.map((el) => {
      return (
        <SwiperSlide key={el.id}>
          <img
            src={el.slider_image}
            alt="About Store"
            className={cl.mainSliderImages}
          />
        </SwiperSlide>
      );
    });
  return (
    <>
      {isDataReady ? (
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          className={`mySwiper ${cl.sliderBig}`}
          mousewheel={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination, Autoplay]}
        >
          {sliders}
        </Swiper>
      ) : (
        <Loader many={1} />
      )}
    </>
  );
};

export const GroupItemsSlider: React.FC<{ items: any[] }> = ({ items }) => {
  const allItems = items.map((product) => (
    <SwiperSlide key={product.id}>
      <ProductCard
        description={product.description}
        alt={product.alt}
        id={product.id}
        src={product.main_image.name}
        name={product.name}
        className={cl.card}
        price={product.price}
      />
    </SwiperSlide>
  ));

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      slidesPerGroup={4}
      loop={true}
      loopFillGroupWithBlank={true}
      className="mySwiper"
    >
      {allItems}
    </Swiper>
  );
};

export const GroupItemsSliderCategory: React.FC<{ items: any[] }> = ({
  items,
}) => {
  const allItems = items.map((cat) => (
    <SwiperSlide key={cat.id}>
      <Link to={`/category/${cat.id}`}>
        <CategoryCard
          src={cat.cat_image}
          name={cat.cat_name}
          className={cl.card}
        />
      </Link>
    </SwiperSlide>
  ));

  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={30}
      slidesPerGroup={6}
      loop={true}
      loopFillGroupWithBlank={true}
      className="mySwiper"
    >
      {allItems}
    </Swiper>
  );
};
