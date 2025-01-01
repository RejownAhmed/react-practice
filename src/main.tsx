import { StrictMode } from "react";
import { Container, createRoot } from "react-dom/client";
import "./assets/style/scss/style.scss";

import App from "./App.tsx";

createRoot(document.getElementById("root") as Container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
