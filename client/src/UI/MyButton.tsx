import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";
import { grey, common } from "@mui/material/colors";

export const MyButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(common.white),
  backgroundColor: common.white,
  border: "1px solid",
  borderColor: grey[500],
  borderRadius: "10px",
  fontSize: "19px",
  fontWeight: "500",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: common.white,
    border: "1px solid",
    borderColor: grey[500],
  },
}));
