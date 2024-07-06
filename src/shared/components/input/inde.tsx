import { alpha, styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#1A2027",
    border: "1px solid",
    color: "#fff",
    borderColor: "#2D3843",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&.Mui-focused": {
      color: "#fff",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export function InputComponent({}) {
  return (
    <RedditTextField
      fullWidth
      size="medium"
      label="Reddit"
      id="reddit-input"
      variant="filled"
      style={{ marginTop: 11 }}
    />
  );
}
