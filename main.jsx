import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { app_router } from "./routes/routes";

const rootEl = document.getElementById("root");
createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={app_router} />
  </StrictMode>
);
