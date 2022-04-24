import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Thumbs, Autoplay } from "swiper";

const ItemPhotos: React.FC<{ photos: any[] }> = ({ photos }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let allPhotos;
  allPhotos =
    photos.length > 0 &&
    photos.map((photo) => (
      <SwiperSlide className="swiper-slide-photos">
        <img src={photo.name} alt={photo.name} />
      </SwiperSlide>
    ));

  return (
    <>
      {photos.length !== 0 ? (
        <>
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs, Autoplay]}
            loop={true}
            className="mySwiper2 mySwiperPhotos2"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
          >
            {allPhotos}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className="mySwiper mySwiperPhotos"
          >
            {allPhotos}
          </Swiper>
        </>
      ) : (
        <h3 className="text-danger text-start">
          NOT Found Any Photos For This Game!
        </h3>
      )}
    </>
  );
};

export default ItemPhotos;
