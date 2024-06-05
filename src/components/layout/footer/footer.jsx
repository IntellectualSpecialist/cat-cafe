import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledFooter, StyledCopyright } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <StyledCopyright>Создано 2024</StyledCopyright>
    </StyledFooter>
  );
}

export default Footer;
