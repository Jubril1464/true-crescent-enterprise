import { AuthLayout } from "@components/layouts/AuthLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { authRoutes } from "./auth";
import OurServices from "@pages/our-services";
import Home from "@pages/home";
import OurCompany from "@pages/our-company";
import Contact from "@pages/contact";
import MildSteel from "@src/pages/mild-steel";
import StainlessSteel from "@src/pages/stainless-steel";
import GalvanizedSteel from "@src/pages/galvanized-steels";
import FabricationAndInstallion from "@src/pages/fabrication-and-installation";
import MeshWireSteel from "@src/pages/mesh-wire-steel";
import MarketSupplied from "@src/pages/market-supplied";
import FittingsAndAccessories from "@src/pages/fittings-and-accessories";
import FormWork from "@src/pages/form-work";
import MildProductDetails from "@src/pages/mild-steel/product-details";
import StainlessSteelProductDetails from "@src/pages/stainless-steel/stainless-product-details";
import FittingsProductDetails from "@src/pages/fittings-and-accessories/fittings-product-details";
import GalvanisedProductDetails from "@src/pages/galvanized-steels/galvanised-product-details";
import MeshProductDetails from "@src/pages/mesh-wire-steel/mesh-product-details";
import FabricationProductDetails from "@src/pages/fabrication-and-installation/fabrication-product-details";

export const appRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/our-services",
    element: <OurServices />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/products/mild-steel",
    element: <MildSteel />,
  },
  {
    path: "/products/stainless-steel",
    element: <StainlessSteel />,
  },
  {
    path: "/products/galvanized-steel",
    element: <GalvanizedSteel />,
  },
  {
    path: "/products/fabrication-and-installation",
    element: <FabricationAndInstallion />,
  },
  {
    path: "/products/mesh-wire",
    element: <MeshWireSteel />,
  },
  {
    path: "/products/fittings-and-accessories",
    element: <FittingsAndAccessories />,
  },
  {
    path: "/products/form-works",
    element: <FormWork />,
  },
  {
    path: "/market-supplied",
    element: <MarketSupplied />,
  },

  {
    path: "/our-company",
    element: <OurCompany />,
  },
  { path: "/products/mild-steel/:id", element: <MildProductDetails /> },
  {
    path: "/products/stainless-steel/:id",
    element: <StainlessSteelProductDetails />,
  },
  {
    path: "/products/fittings-and-accessories/:id",
    element: <FittingsProductDetails />,
  },
  {
    path: "/products/galvanised-steels/:id",
    element: <GalvanisedProductDetails />,
  },
  {
    path: "/products/mesh-wire/:id",
    element: <MeshProductDetails />,
  },
  {
    path: "/products/fabrication-and-installation/:id",
    element: <FabricationProductDetails />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: authRoutes,
  },
];
export const router = createBrowserRouter(appRoutes);
