export type ProductType = {
  name: string;
  colors: string[];
  brand: string;
  description: string;
  logo_img: string;
  img: string[];
  rating: number;
  id: number;
  price: number;
  divide_price: number;
};

export type itemCartProductType = ProductType & {
  total_price: number;
  qtd: number;
};
