import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Service/api";
import { Context } from "../context/context";

const Login = () => {
  const { pass, setPass } = useContext(Context);
  const navigate = useNavigate();

  const getAuth = async () => {
    const passBD = await api.getPass();
    if (pass === passBD) {
      localStorage.setItem("pass", pass);
      await navigate("/admin");
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap="40px">
      <Typography fontWeight="bold">Login</Typography>
      <TextField
        label="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <Button variant="outlined" onClick={getAuth}>
        AUTH
      </Button>
    </Box>
  );
};

export default Login;
