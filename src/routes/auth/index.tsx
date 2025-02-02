import Login from "@pages/login";
import Register from "@pages/register";

const routesConfig = [
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
];
export const authRoutes = routesConfig.map(({ path, element }) => ({
  path,
  element,
}));
