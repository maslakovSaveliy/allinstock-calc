import { useContext, useState } from "react";
import { Context } from "../context/context";
import { Box, TextField, Typography, Button } from "@mui/material";
import { api } from "../Service/api";

const Admin = () => {
  const { setCourse } = useContext(Context);

  const [courseInput, setCourseInput] = useState<number | string>(0);

  return (
    <Box display="flex" flexDirection="column" gap="40px">
      <Box>
        <Typography fontWeight="bold">КУРС ТОЛЬКО ЧИСЛО</Typography>
        <Typography fontSize="15px">Ставить только '.' а не ','</Typography>
      </Box>
      <TextField
        label="Введите значение"
        value={courseInput}
        onChange={(e) => setCourseInput(e.target.value)}
      />
      <Button
        variant="outlined"
        onClick={() => api.changeCourse(courseInput, setCourse)}
      >
        Изменить курс
      </Button>
    </Box>
  );
};

export default Admin;
