/** @format */

import { Footer, Header } from "components/view";
import React from "react";

interface LayoutComponentProps {
  children: React.ReactNode;
}

const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export const withLayoutComponent =
  (Page: React.FC): React.FC =>
  () => {
    return (
      <LayoutComponent>
        <Page />
      </LayoutComponent>
    );
  };
