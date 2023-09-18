import { useState, useEffect } from "react";
import AppRouter from "./router/AppRouter";
import { Context } from "./context/context";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { api } from "./Service/api";
import mongoose from "mongoose";

const DB_URL = `mongodb+srv://allinstock:${
  import.meta.env.VITE_PASS
}@cluster0.ed6kcxp.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB Connect");
  })
  .catch((e) => {
    console.log(e);
  });

function App() {
  const [course, setCourse] = useState<number>(0);
  const [time, setTime] = useState<string>("");
  const [order, setOrder] = useState<number | string>("");
  const [price, setPrice] = useState<string>("0");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pass, setPass] = useState<string>(localStorage.getItem("pass") || "");

  useEffect(() => {
    api.getCourse(setCourse, setTime, setIsLoading);
  }, []);

  return (
    <Context.Provider
      value={{
        course,
        setCourse,
        order,
        setOrder,
        price,
        setPrice,
        isLoading,
        pass,
        setPass,
        time,
      }}
    >
      <BrowserRouter>
        <Box width="100%" display="flex" justifyContent="center">
          <AppRouter />
        </Box>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
