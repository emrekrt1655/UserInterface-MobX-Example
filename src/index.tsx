import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./context/StoreContex";
import { CustomerList } from "./stores/customerList";

const customerList = new CustomerList();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider value={customerList}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
