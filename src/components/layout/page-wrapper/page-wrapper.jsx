import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import MainPage from "/src/components/pages/main-page/main-page";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import { StyledWrapper, StyledMain } from "./styles";
import { Outlet } from "react-router-dom";

function PageWrapper({ ...props }) {
  return (
    <StyledWrapper>
      <Header />
      <StyledMain>
        <Outlet />
        {/* <BuyPage {...props} /> */}
      </StyledMain>
      <Footer />
    </StyledWrapper>
  );
}

export default PageWrapper;
