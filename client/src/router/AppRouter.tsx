import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { useEffect, useContext, useState } from "react";
import { api } from "../Service/api";
import { Context } from "../context/context";

const AppRouter = () => {
  const { pass } = useContext(Context);
  const [auth, setAuth] = useState<boolean>(false);

  const checkPass = async () => {
    const passBD = await api.getPass();
    if (pass === passBD) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  };

  useEffect(() => {
    checkPass();
  }, [auth, pass]);

  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="/login" element={<Navigate to="/admin" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="/admin" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
