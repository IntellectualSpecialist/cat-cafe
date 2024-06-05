import React from "react";
import { TitleSize } from "/src/components/ui/title/title";
import StarFeature from "/src/components/ui/star-feature/star-feature";
import {
  StyledFigure,
  StyledImage,
  Text,
  StyledFeature,
  StyledTitle,
} from "./styles";

function StarCard({ name, about, image, feature }) {
  return (
    <>
      <StyledFigure>
        <StyledImage src={image} width={313} height={313} alt="Фото кошки" />
        <StyledFeature feature={feature} />
      </StyledFigure>
      <StyledTitle level={3} size={TitleSize.SMALL}>
        {name}
      </StyledTitle>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </>
  );
}

export default StarCard;
