import { ProductType } from "@/types/products";
import Slider from "react-slick";

export interface IDetailsContext {
  sliderPresentation: null | undefined | Slider;
  setSliderPresentation: React.Dispatch<React.SetStateAction<null>>;
  sliderNavigation: null | undefined | Slider;
  setSliderNavigation: React.Dispatch<React.SetStateAction<null>>;
  sliderPresentationRef: React.MutableRefObject<null>;
  sliderNavigationRef: React.MutableRefObject<null>;
  product: ProductType | undefined;
  matches: boolean;
}
