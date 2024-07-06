import { ICartContext } from "@/shared/hook/cart/model";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function CartModelView(): ICartContext {
  const [totalItem, setTotalItem] = useState(0)
  const [total, setTotal] = useState(0)
  const [open, setOpen] = useState(true)

  const [cart, setCart] = useState<ItemProductsProps[]>(() => {
    if (typeof window === "undefined") return [];
    const storageCart = window.localStorage.getItem("cart");
    if (storageCart) return JSON.parse(storageCart);
    return []
  });

  const handleAddProduct = (item: ItemProductsProps): void => {
    const copy = [...cart];
    const productExists = copy.find((i) => i.id === item.id);
    
    if (productExists !== undefined && productExists.qtd && productExists.total) {
      productExists.qtd++
      productExists.total = productExists.total + parseFloat(productExists.price)
    }
    else {
      item.qtd = 1
      item.total = parseFloat(item.price)
      copy.push(item);
    }
    setCart(copy)
    toast("O produto foi adicionado ao carrinho", { type: "info" });
    setTotalItem(copy.length)
    calculateTotal(copy)
  };

  const handleQtd = (key: string, item: ItemProductsProps): void => {
    const copy = [...cart]
    const index = copy.findIndex(x => x.id === item.id)
    if (index === -1) return;
    const element = copy[index]
    if (key === "plus" && item.qtd && element.total) {
      element.total += parseFloat(item.price)
      item.qtd++
    }
    else if (item.qtd && item.qtd !== 0 && element.total) {
      element.total -= parseFloat(item.price)
      item.qtd--
    }
    copy[index] = item
    if (item.qtd !== 0 && item.qtd) setCart(copy)
    else handleRemover(item)
    calculateTotal(copy)
  }

  const handleRemover = (item: ItemProductsProps) => {
    const copy = [...cart]
    const index = copy.findIndex(x => x.id === item.id)
    if (index !== -1) copy.splice(index, 1)
    setCart(copy)
    calculateTotal(copy)
    setTotalItem(copy.length)
  }

  const calculateTotal = (data: ItemProductsProps[]) => {
    const total = data.reduce((acc: number, item: any) => {
      return acc + item.total;
    }, 0);
    setTotal(total);
  };

  const handleOpen = () => {
    setOpen(!open)
  }

  return { cart, handleAddProduct, handleOpen, open, total, handleRemover, handleQtd, totalItem }
}
