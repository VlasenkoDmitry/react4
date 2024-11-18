import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/Home.tsx";
import Shop from "./pages/Shop.tsx";
import Account from "./pages/Account.tsx";
import Pages from "./pages/Pages.tsx";
import Page from "./pages/Page.tsx";
import Blog from "./pages/Blog.tsx";
import Docs from "./pages/Docs.tsx";
import App from "./App.tsx";

// import { ProductPage } from "@pages"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="account/:accountID" element={<Account />} />
      <Route path="pages" element={<Pages />} /> {/* TODO: path="product" elemtnt={<ProductsPage />} */} 
      <Route path="page/:pageId" element={<Page />} /> {/* TODO: path="product/:id" elemtnt={<ProductPage />} */} 
      <Route path="blog" element={<Blog />} />
      <Route path="docs" element={<Docs />} />
    </Route>
  )
);





createRoot(document.getElementById("root")!).render(
  <StrictMode>
      {/* TODO: Add theme provider */}
      <RouterProvider router={router} />
  </StrictMode>
);
