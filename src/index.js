import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./AGlobalContext/GlobalProducts/GlobalContext";
import { FilterProvider } from "./AGlobalContext/FilterData/FilterContext";
import { CartProvider } from "./AGlobalContext/Cart/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </GlobalProvider>
  </BrowserRouter>
);

//
