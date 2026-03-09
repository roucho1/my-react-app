import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserContext.Provider value={{ name: "小明", role: "admin" }}>
        <App />
      </UserContext.Provider>
    </BrowserRouter>
  </StrictMode>,
);
