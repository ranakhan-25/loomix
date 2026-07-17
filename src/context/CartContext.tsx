"use client"
import { createContext, useContext} from "react";
import type { Product } from "@/type/product";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}