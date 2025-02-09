import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Tactics from "./routes/Tactics";
import { RecoilRoot } from "recoil";
import "./i18n";

const router = createBrowserRouter([
  {
    path: "/shorts/:id",
    element: <Tactics />,
  },
  {
    path: "/sponsor/shorts/:id",
    element: <Tactics />,
  },
]);

if (localStorage.getItem("i18nextLng") === null) {
  localStorage.setItem("i18nextLng", "en");
}

if (!localStorage.theme) {
  localStorage.theme = "light";
  document.documentElement.classList.add("light");
}
if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </StrictMode>
);
