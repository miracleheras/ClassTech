/** @format */

import { Footer, Header, Home } from "components/view";
import React from "react";

export const LayoutComponent: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
};
