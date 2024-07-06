import { ControllerProduct } from "@/services/repository/product/controllers";
import { IDetailsContext } from "@/types/components/details";
import { ProductType } from "@/types/products";
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
import { useParams } from "react-router-dom";

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
  const { id } = useParams();

  const [product, setProduct] = useState<ProductType>();

  const [sliderPresentation, setSliderPresentation] = useState(null);
  const [sliderNavigation, setSliderNavigation] = useState(null);
  const sliderPresentationRef = useRef(null);
  const sliderNavigationRef = useRef(null);

  useEffect(() => {
    setSliderPresentation(sliderPresentationRef.current);
    setSliderNavigation(sliderNavigationRef.current);
  }, []);

  useEffect(() => {
    if (id === undefined) return 
    setProduct(ControllerProduct.getByIdFaker(parseInt(id)))
  }, [id]);

  const contextValue = useMemo(
    () => ({
      sliderPresentation,
      setSliderPresentation,
      sliderNavigation,
      setSliderNavigation,
      sliderPresentationRef,
      sliderNavigationRef,
      matches,
      product,
      setProduct,
    }),
    [
      sliderPresentation,
      setSliderPresentation,
      sliderNavigation,
      setSliderNavigation,
      sliderPresentationRef,
      sliderNavigationRef,
      matches,
      product,
      setProduct,
    ]
  );

  return (
    <DetailsContext.Provider value={contextValue}>
      {children}
    </DetailsContext.Provider>
  );
}

export function useProductModel(): IDetailsContext {
  const context = useContext(DetailsContext);
  return context;
}
