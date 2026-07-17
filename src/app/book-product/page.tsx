"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BookProductPage() {
  const { cart, removeFromCart } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 dark:text-white flex items-center gap-3">
        <ShoppingBag className="w-8 h-8 text-[#00d8d6]" />
        Your Cart <span className="text-gray-400 text-2xl font-normal">({cart.length} items)</span>
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-24 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-3xl">
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">Your cart is feeling lonely!</p>
          <Link href="/products" className="px-8 py-3 bg-[#00d8d6] text-white rounded-full font-bold hover:bg-[#00a8a6] transition-all">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 space-y-6">
            {cart.map((product, index) => (
              <div 
                key={`${product.id}-${index}`} 
                className="group flex items-center gap-6 p-5 bg-white dark:bg-gray-800 rounded shadow-sm border dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                
                <div className="grow">
                  <h3 className="font-bold text-xl dark:text-white group-hover:text-[#00d8d6] transition-colors">{product.name}</h3>
                  <p className="text-gray-500 text-sm">{product.category}</p>
                  <p className="text-xl font-bold text-[#00d8d6] mt-2">${product.price}</p>
                </div>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="p-3 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          
          <div className="lg:col-span-1">
            <div className="sticky top-28 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border dark:border-gray-700">
              <h2 className="text-2xl font-bold dark:text-white mb-6">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span className="font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500 dark:text-gray-400">
                  <span>Shipping</span>
                  <span className="font-bold text-green-500">Free</span>
                </div>
                <div className="border-t dark:border-gray-700 pt-4 flex justify-between text-xl font-bold dark:text-white">
                  <span>Total</span>
                  <span className="text-[#00d8d6]">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full py-4 bg-[#00d8d6] text-white font-bold rounded-2xl hover:bg-[#00a8a6] shadow-lg shadow-[#00d8d6]/30 transition-all flex items-center justify-center gap-2">
                Checkout Now <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}