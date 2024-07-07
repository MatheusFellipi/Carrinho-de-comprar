import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { ControllerProduct } from "@/services/repository/product/controllers";
import { ProductType } from "@/types/products";
import { IDetailsContext } from "@/types/components/details";

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
  const navigate = useNavigate();
  
  const { id } = useParams();

  const [product, setProduct] = useState<ProductType>();
  const [selectImg, setSelectImg] = useState("");

  const [sliderPresentation, setSliderPresentation] = useState(null);
  const [sliderNavigation, setSliderNavigation] = useState(null);
  const sliderPresentationRef = useRef(null);
  const sliderNavigationRef = useRef(null);

  useEffect(() => {
    setSliderPresentation(sliderPresentationRef.current);
    setSliderNavigation(sliderNavigationRef.current);
  }, []);

  useEffect(() => {
    if (id === undefined) return;
    const data = ControllerProduct.getByIdFaker(parseInt(id));
    if (!data) return;
    setSelectImg(data?.img[0]);
    setProduct(data);
  }, [id]);

  const contextValue = useMemo(
    () => ({
      sliderPresentation,
      navigate,
      setSelectImg,
      setSliderPresentation,
      sliderNavigation,
      setSliderNavigation,
      sliderPresentationRef,
      sliderNavigationRef,
      matches,
      selectImg,
      product,
      setProduct,
    }),
    [
      sliderPresentation,
      navigate,
      setSliderPresentation,
      sliderNavigation,
      setSliderNavigation,
      sliderPresentationRef,
      sliderNavigationRef,
      selectImg,
      setSelectImg,
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
