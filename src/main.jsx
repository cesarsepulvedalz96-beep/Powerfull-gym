import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bulma/css/bulma.min.css";
import "aos/dist/aos.css";
import "./styles/global.css";
import "./styles/navbar.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
