import Admin from "../pages/Admin";
import Calc from "../pages/Calc";
import Login from "../pages/Login";

export const publicRoutes = [
  { path: "/", element: Calc },
  { path: "/login", element: Login },
];

export const privateRoutes = [
  { path: "/", element: Calc },
  { path: "/admin", element: Admin },
];
