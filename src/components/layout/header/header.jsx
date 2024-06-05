import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { StyledHeader, StyledNav } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <StyledNav />
    </StyledHeader>
  );
}

export default Header;
