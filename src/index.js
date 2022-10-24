import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScoreContextProvider from "./contexts/scoreContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ScoreContextProvider>
    <App />
  </ScoreContextProvider>
);
