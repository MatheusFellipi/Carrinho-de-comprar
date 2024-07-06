import { createContext, ReactNode, useContext, useMemo } from "react";
import { CartModelView } from "./cart.context";
import { ICartContext } from "@/shared/hook/cart/model";

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export function CartProvider({ children }: Readonly<CartProviderProps>): JSX.Element {
  const {handleAddProduct, cart, handleRemover, total, totalItem, handleOpen, open, handleQtd} = CartModelView()

  const contextValue = useMemo(() => ({ cart, handleAddProduct, handleRemover, total, handleOpen, open, handleQtd, totalItem
  }), [cart, handleAddProduct, handleRemover, total, handleOpen, open, handleQtd, totalItem]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): ICartContext {
  const context = useContext(CartContext);
  return context;
}