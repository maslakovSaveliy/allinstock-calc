import { useContext, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Context } from "../context/context";
import { MyInput } from "../UI/MyInput";

const Calculator = () => {
  const { course, order, setOrder, price, setPrice, time } =
    useContext(Context);

  useEffect(() => {
    const ord = order ? order : 0;
    const result = (ord * 1.08 * course).toFixed(2);
    setPrice(result);
  }, [course, order]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setOrder(e.target.value);
  };

  return (
    <Box
      width="100%"
      display="flex"
      height="max-content"
      gap="20px"
      flexDirection="column"
      justifyContent="space-around"
    >
      <Box padding="10px">
        <Typography fontSize="19px" fontWeight="bold">
          Введите стоимость заказа в юанях.
        </Typography>
        <Typography variant="body2" fontSize="14px" color="gray">
          Курс на {time} равен {course} ₽ за 1 ¥
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap="20px">
        <MyInput
          sx={{ padding: "10px" }}
          placeholder="Введите стоимость"
          value={order}
          onChange={handleChange}
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="end"
          sx={{ backgroundColor: "gray", padding: "10px" }}
        >
          <Typography variant="body2" fontSize="19px" color="white">
            Стоимость заказа
          </Typography>
          <Typography fontSize="25px" fontWeight="bold" color="white">
            {price} р.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Calculator;
