import React from "react";
import { StyledTitle } from "./styles";

export const TitleSize = {
  BIG: "big",
  MIDDLE: "middle",
  SMALL: "small",
  DEFAULT: "",
};

function Title({ children, size, level, className }) {
  return (
    <StyledTitle as={`h${level}`} className={className} $size={size}>
      {children}
    </StyledTitle>
  );
}

export default Title;
