import styled from "styled-components";
import { Section, Ul, Li } from "/src/components/styled";
import starsImage from "/src/assets/stars-image.svg";
import startLeft from "/src/assets/stars-left.svg";
import startRight from "/src/assets/stars-right.svg";
import Title from "/src/components/ui/title/title";

export const StyledSection = styled(Section)`
  padding: 100px ${(props) => props.theme.paddingPage} 80px;
  background-color: ${(props) => props.theme.colorDarkBg};
  background-image: url(${starsImage}), url(${startLeft}), url(${startRight});
  background-repeat: no-repeat;
  background-position: left bottom, left top 36px, right bottom;

  .stars-list__button {
    margin: 0 auto;
  }
`;

export const StyledTitle = styled(Title)`
  margin: 0 auto 64px;
  width: fit-content;
`;

export const StarList = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: ${(props) => props.theme.indent};
  margin-bottom: 44px;
`;

export const StyledListItem = styled(Li)`
  padding: ${(props) => props.theme.indent};
  background-color: ${(props) => props.theme.colorWhite};
  border-radius: 12px;

  .star-card__title {
    margin-bottom: 12px;
  }
`;
