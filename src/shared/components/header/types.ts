import { MouseEvent, ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}
export interface HeaderContext {
  handleClose: () => void;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
  anchorEl: null | HTMLElement;
}
