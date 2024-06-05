import React from "react";
import Button from "/src/components/ui/button/button";
import { StyledButton } from "./styles";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

function Nav({ ...props }) {
  const pageUrl = useLocation().pathname;

  return (
    <nav {...props}>
      {pageUrl === AppRoute.MAIN ? (
        <Button minWidth={260} link={AppRoute.BUY}>
          Купить
        </Button>
      ) : (
        <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>
      )}
    </nav>
  );
}

export default Nav;
