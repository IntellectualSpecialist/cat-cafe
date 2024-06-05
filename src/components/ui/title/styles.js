import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: ${(props) => {
    let fontSize = "36px";
    if (props.$size === TitleSize.BIG) {
      fontSize = "44px";
    }
    if (props.$size === TitleSize.MIDDLE) {
      fontSize = "36px";
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = "28px";
    }
    return fontSize;
  }};
  line-height: ${(props) => {
    let lineHeight = "36px";
    if (props.$size === TitleSize.BIG) {
      lineHeight = "51px";
    }
    if (props.$size === TitleSize.MIDDLE) {
      lineHeight = "41px";
    }
    if (props.$size === TitleSize.SMALL) {
      lineHeight = "32px";
    }
    return lineHeight;
  }};
`;
