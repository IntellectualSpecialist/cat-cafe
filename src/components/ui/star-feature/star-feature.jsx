import React from "react";
import { StyledFeature } from "./styles";

export const CatFeature = {
  NEW: "new",
  SOFT: "soft",
};

function StarFeature({ className = "", feature }) {
  let options;

  switch (feature) {
    case CatFeature.NEW:
      options = {
        text: "new",
        bgColor: "#ffb334",
      };
      break;
    case CatFeature.SOFT:
      options = {
        text: "Ласковый",
        bgColor: "#7fc92e",
      };
      break;
    default:
      options = {
        text: "",
        bgColor: "#000000",
      };
  }
  return options.text ? (
    <StyledFeature
      className={`${className}`}
      style={{ backgroundColor: options.bgColor }}
    >
      {options.text}
    </StyledFeature>
  ) : null;
}

export default StarFeature;
