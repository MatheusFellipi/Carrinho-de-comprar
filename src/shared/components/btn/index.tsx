import { ReactNode } from "react";
import stylesCss from "./styles.module.css";

import Button, { ButtonProps } from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

interface Props extends ButtonProps {
  children: ReactNode;
  heigh?: string;
  width?: string;
  custoColor?: string;
}

const ColorButton = styled(Button)<Props>(
  ({ theme, heigh, width, custoColor, color }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: custoColor || color,
    height: heigh,
    width: width,
    "&:hover": {
      backgroundColor: custoColor || color,
      filter: "brightness(1)",
    },
  })
);

export const BtnComponent = ({ children, ...props }: Props) => {
  return (
    <ColorButton className={stylesCss.btn} {...props}>
      {children}
    </ColorButton>
  );
};
