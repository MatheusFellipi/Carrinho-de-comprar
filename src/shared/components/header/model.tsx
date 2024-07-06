import { HeaderContext, ProviderProps } from "@/shared/components/header/types";
import {
  createContext,
  MouseEvent,
  useContext,
  useMemo,
  useState,
} from "react";

const Context = createContext<HeaderContext>({} as HeaderContext);

export const RegisterProvider = ({
  children,
}: Readonly<ProviderProps>): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const contextValue = useMemo(
    () => ({ handleClose, handleClick, open, anchorEl }),
    [ open, anchorEl]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export function useHeaderModel(): HeaderContext {
  return useContext(Context);
}
