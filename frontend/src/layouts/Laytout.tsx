/** @format */

import { Footer, Header, Home } from "components/view";
import { MainContextProvider } from "context/MainContext";
import React from "react";

export const LayoutComponent: React.FC = () => {
  return (
    <>
      <MainContextProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Home />
          <Footer />
        </div>
      </MainContextProvider>
    </>
  );
};
