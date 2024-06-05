import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  width: fit-content;
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  padding: 17px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
  font-weight: 700;
  color: ${(props) => props.theme.colorWhite};
  text-align: center;
  text-decoration: none;
  background-color: ${(props) => props.theme.colorButton};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:focus,
  &:active {
    box-shadow: inset 0 4px 0 0 rgba(0, 0, 0, 0.14);
    background-color: ${(props) => props.theme.colorButtonHover};
  }

  &:active {
    box-shadow: none;
  }
`;
