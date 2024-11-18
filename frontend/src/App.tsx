/** @format */

import { Path } from "./constants";
import { HomePage } from "pages";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={Path.Home} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
