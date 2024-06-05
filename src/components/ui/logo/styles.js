import styled from "styled-components";
import { NavLink } from "react-router-dom";

const logoStyle = `
  width: 208px;
  height: 44px;
`;

export const StyledLogo = styled(NavLink)`
  display: block;
  ${logoStyle}
`;

export const StyledLogoMainPage = styled.div`
  ${logoStyle}
`;
