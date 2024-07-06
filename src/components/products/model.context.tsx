import { IDetailsContext } from "@/types/components/details";
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


interface ProviderProps {
  children: ReactNode;
}

export const DetailsContext = createContext<IDetailsContext>(
  {} as IDetailsContext
);

const data = {
  name: "Mouse Gamer",
  rating: 2,
  description: "Mouse gamer com alta precisão e botões personalizáveis.",
  colors: [],
  logo_img:
    "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
  img: [
    "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
    "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/71/1071136_notebook-acer-aspire-3-a315510p34xc-windows-11-tela-156-full-hd-8gb-ram-256gb-ssd-10010350_m1_638440520205178061.jpg",
  ],
  id: 10,
  price: 299.99,
};

export function ProductsDetailsProvider({
  children,
}: Readonly<ProviderProps>): JSX.Element {
  const matches = useMediaQuery("(max-width:767px)");

  const [product, setProduct] = useState(data);

  const [sliderPresentation, setSliderPresentation] = useState(null);
  const [sliderNavigation, setSliderNavigation] = useState(null);
  const sliderPresentationRef = useRef(null);
  const sliderNavigationRef = useRef(null);

  useEffect(() => {
    setSliderPresentation(sliderPresentationRef.current);
    setSliderNavigation(sliderNavigationRef.current);
  }, []);

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
