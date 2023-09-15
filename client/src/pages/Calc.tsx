import { useContext } from "react";
import { Box, useMediaQuery } from "@mui/material";
import Title from "../components/Title";
import Calculator from "../components/Calculator";
import { MyButton } from "../UI/MyButton";
import { Context } from "../context/context";
import { Loader } from "../UI/Loader";

const Calc = () => {
  const { isLoading } = useContext(Context);

  const matches = useMediaQuery("(min-width:600px)");

  if (isLoading) {
    return (
      <Box
        width="100%"
        height="100dvh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Loader />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      width={matches ? "80%" : "100%"}
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <img src="public/logo.png" width="300px" height="150px" />
      <Title />
      <Calculator />
      <MyButton
        sx={{ marginBottom: "5%" }}
        variant="contained"
        size="large"
        onClick={() => window.open("https://t.me/m_allinstck")}
      >
        Написать Менеджеру
      </MyButton>
    </Box>
  );
};

export default Calc;
