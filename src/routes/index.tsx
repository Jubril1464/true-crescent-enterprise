import {AuthLayout} from "@components/layouts/AuthLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { authRoutes } from "./auth";
import OurServices from "@pages/our-services";
import Home from "@pages/home";
import OurCompany from "@pages/our-company";
import Contact from "@pages/contact";
import MildSteel from "@src/pages/mild-steel";

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
    path: "/our-company",
    element: <OurCompany />,
  },
  {
    path:'/auth',
    element: <AuthLayout />,
    children: authRoutes
  }
];
export const router = createBrowserRouter(appRoutes);
