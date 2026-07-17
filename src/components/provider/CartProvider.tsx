"use client";
import { useState, ReactNode } from "react";
import { Product } from "@/type/product";
import { CartContext } from "@/context/CartContext";
import { toast } from "react-toastify";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart((prev) => [...prev, product]);
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.error(`${product.name} is already in the cart!`);
    }
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
