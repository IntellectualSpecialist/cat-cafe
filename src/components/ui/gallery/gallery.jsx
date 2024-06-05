import React, { useState, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import "swiper/swiper.css";
import {
  StyledSlider,
  SlyderWrapper,
  StyledSlide,
  StyledSliderMini,
  StyledSlideMini,
  GalleryButton,
} from "./styles";

function Gallery({ slides = [] }) {
  SwiperCore.use([Navigation, Thumbs]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <StyledSlider
        onSlideChange={(slider) => {
          setActiveSlide(slider.realIndex);
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        spaceBetween={20}
        loop
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {slides &&
          slides.length &&
          slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <StyledSlide
                src={slide.src}
                alt={slide.alt}
                width="726"
                height="408"
              />
            </SwiperSlide>
          ))}
      </StyledSlider>
      <SlyderWrapper>
        <GalleryButton ref={navigationPrevRef} title="Назад" />
        <StyledSliderMini
          onSwiper={(evt) => {
            setThumbsSwiper(evt);
          }}
          modules={[Navigation, Thumbs]}
          spaceBetween={20}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          loop={true}
        >
          {slides &&
            slides.length &&
            slides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <StyledSlideMini
                  $active={activeSlide === index}
                  src={slide.src}
                  alt={slide.alt}
                  width="167"
                  height="128"
                />
              </SwiperSlide>
            ))}
        </StyledSliderMini>
        <GalleryButton
          right
          ref={navigationNextRef}
          title="Вперед"
        ></GalleryButton>
      </SlyderWrapper>
    </>
  );
}

export default Gallery;
