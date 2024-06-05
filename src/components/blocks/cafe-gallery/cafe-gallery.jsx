import React from "react";
import { TitleSize } from "/src/components/ui/title/title";
import Gallery from "/src/components/ui/gallery/gallery";
import { StyledSection, StyledTitle } from "./styles";

function CafeGallery({ slides }) {
  return slides?.length ? (
    <StyledSection>
      <StyledTitle level={1} size={TitleSize.BIG}>
        Галерея нашего кафе
      </StyledTitle>
      <Gallery slides={slides} />
    </StyledSection>
  ) : null;
}

export default CafeGallery;
