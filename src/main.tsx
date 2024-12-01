import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./pages/error-page/error-page.component.tsx";
import Home from "./pages/home-page/home-page.component.tsx";
import App from "./App.tsx";
import { CustomThemeProvider } from "./theme/theme-provider.tsx";
import ProductsPage from "./pages/products-page/products-page.component.tsx";
import ProductPage from "./pages/product-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:productsId" element={<ProductPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomThemeProvider>
      <RouterProvider router={router} />
    </CustomThemeProvider>
  </StrictMode>
);
