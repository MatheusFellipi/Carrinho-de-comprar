import { useMediaQuery } from "@mui/material";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface IDetailsContext {}

interface ProviderProps {
  children: ReactNode;
}

export const DetailsContext = createContext<IDetailsContext>(
  {} as IDetailsContext
);

export function ProductsDetailsProvider({
  children,
}: Readonly<ProviderProps>): JSX.Element {
  const matches = useMediaQuery("(max-width:767px)");

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);
  
  const contextValue = useMemo(
    () => ({
      nav1,
      setNav1,
      nav2,
      setNav2,
      sliderRef1,
      sliderRef2,
      matches
    }),
    [nav1, setNav1, nav2, setNav2, sliderRef1, sliderRef2,matches]
  );

  return (
    <DetailsContext.Provider value={contextValue}>
      {children}
    </DetailsContext.Provider>
  );
}

export function useDetailsModel(): IDetailsContext {
  const context = useContext(DetailsContext);
  return context;
}
