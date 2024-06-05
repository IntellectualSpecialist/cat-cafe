import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import starList from "/src/mocks/star-list";
import gallery from "/src/mocks/gallery";
import buyOptions from "/src/mocks/buy-options";
import { GlobalStyle } from "./styles.js";
import { AppRoute } from "/src/const";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import MainPage from "/src/components/pages/main-page/main-page";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage stars={starList} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage slides={gallery} options={buyOptions} />}
            />
            <Route
              path="*"
              element={<h1>Ошибка 404. Страница не существует.</h1>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
