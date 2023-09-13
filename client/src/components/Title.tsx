import { Box, Typography } from "@mui/material";

const Title = () => {
  return (
    <Box
      width="100%"
      height="max-content"
      display="flex"
      flexDirection="column"
    >
      <Typography padding="0 10px 0 10px" fontSize="19px" fontWeight="bold">
        Калькулятор предварительной стоимости заказа.
      </Typography>
      <Typography
        padding="0 10px 0 10px"
        variant="body2"
        fontSize="14px"
        color="gray"
      >
        Цена без учета стоимости доставки. Цена вещи написана на нижней кнопке в
        приложении Poizon
      </Typography>
    </Box>
  );
};

export default Title;
