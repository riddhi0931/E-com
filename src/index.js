import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./AGlobalContext/GlobalContext";
import { FilterContext } from "./AGlobalContext/FilterData/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalProvider>
      <FilterContext>
        <App />
      </FilterContext>
    </GlobalProvider>
  </BrowserRouter>
);
