import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./components/Error/ErrorPage.tsx";
import Home from "./components/routes/Home.tsx";
import Shop from "./components/routes/Shop.tsx";
import Account from "./components/routes/Account.tsx";
import Pages from "./components/routes/Pages.tsx";
import Page from "./components/routes/Page.tsx";
import Blog from "./components/routes/Blog.tsx";
import Docs from "./components/routes/Docs.tsx";
import App from "./App.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="account/:accountID" element={<Account />} />
      <Route path="pages" element={<Pages />} />
      <Route path="page/:pageId" element={<Page />} />
      <Route path="blog" element={<Blog />} />
      <Route path="docs" element={<Docs />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>

      <RouterProvider router={router} />

  </StrictMode>
);
