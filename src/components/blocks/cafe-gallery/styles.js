import styled from "styled-components";
import Title from "/src/components/ui/title/title";
import { Section } from "/src/components/styled";
import galleryLeft from "/src/assets/gallery-left.svg";
import galleryRight from "/src/assets/gallery-right.svg";

export const StyledSection = styled(Section)`
  padding: 100px ${(props) => props.theme.paddingPage} 80px;
  background-color: ${(props) => props.theme.colorDarkBg};
  background-image: url(${galleryLeft}), url(${galleryRight});
  background-repeat: no-repeat;
  background-position: left bottom, right top;
`;

export const StyledTitle = styled(Title)`
  margin: 0 auto 64px;
  width: fit-content;
`;
