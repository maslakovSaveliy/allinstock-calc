import { styled } from "@mui/material/styles";
import { TextField, TextFieldProps } from "@mui/material";
import { grey } from "@mui/material/colors";

export const MyInput = styled(TextField)<TextFieldProps>({
  "& label.Mui-focused": {
    color: grey[500],
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: grey[500],
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: grey[500],
    },
    "&:hover fieldset": {
      borderColor: grey[500],
    },
    "&.Mui-focused fieldset": {
      borderColor: grey[500],
    },
  },
});
