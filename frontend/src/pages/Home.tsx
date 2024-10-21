/** @format */

import { MainContainer } from "containers/MainContainer";
import { MainContextProvider } from "context/MainContext";
import { withLayoutComponent } from "layouts/Laytout";
import React from "react";

export const HomePage: React.FC = withLayoutComponent(() => (
  <MainContextProvider>
    <MainContainer />
  </MainContextProvider>
));
