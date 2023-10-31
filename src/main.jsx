import React from "react";
import ReactDOM from "react-dom/client";
import PrimeiroComponente from "./pages/PrimeiroComponente/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeiroComponente valor="card" />
  </React.StrictMode>
);
