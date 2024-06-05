import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo-cat-cafe.svg";
import { StyledLogo, StyledLogoMainPage } from "./styles";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <LogoImage />
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
    </StyledLogo>
  );
}

export default Logo;
