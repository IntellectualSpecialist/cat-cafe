import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Img } from "/src/components/styled";
import Button from "/src/components/ui/button/button";
import galleryLeft from "/src/assets/left-arrow.svg";

export const StyledSlider = styled(Swiper)`
  width: 726px;
  height: 408px;
  margin-bottom: 24px;
`;

export const StyledSlide = styled(Img)`
  border-radius: 20px;
`;

export const SlyderWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 30px;
  align-items: center;
  margin: 0 auto;
`;

export const StyledSliderMini = styled(Swiper)`
  width: 726px;
  height: 128px;
  margin: 0;
`;

export const StyledSlideMini = styled(Img)`
  height: 128px;
  border-radius: 12px;
  cursor: pointer;
  object-fit: cover;
  filter: brightness(${(props) => (props.$active ? 100 : 50)}%);
`;

export const GalleryButton = styled(Button)`
  width: 64px;
  height: 64px;
  background-image: url("${galleryLeft}");
  background-repeat: no-repeat;
  background-position: left 18px center;
  border-radius: 32px;
  transform: rotate(${(props) => (props.right ? 180 : 0)}deg);

  &:hover,
  &:focus,
  &:active {
    box-shadow: none;
  }
`;
