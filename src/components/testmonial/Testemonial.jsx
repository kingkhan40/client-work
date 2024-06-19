import React from "react";
import "./Testemonial.css";
import Data from "./Data";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Pagination, Autoplay]);

const Testemonial = () => {
  return (
    <section className="testemonial container section" id="testimonial">
      <div className="heading">
        <h1>Testimonial</h1>
      </div>
      <Swiper
        className="testemonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{
          delay: 3000, 
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt={title} className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="custom-pagination"></div>
    </section>
  );
};

export default Testemonial;
