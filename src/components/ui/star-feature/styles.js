import styled from "styled-components";

export const StyledFeature = styled.span`
  padding: 8px 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colorWhite};
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colorSoft};
  border-radius: 8px 8px 8px 0;
`;
