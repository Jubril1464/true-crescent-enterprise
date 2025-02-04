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
    element: <FabricationAndInstallion/>,
  },
  {
    path: "/products/mesh-wire",
    element: <MeshWireSteel />,
  },
  {
    path: "/market-supplied",
    element: <MarketSupplied />,
  },

  {
    path: "/our-company",
    element: <OurCompany />,
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
