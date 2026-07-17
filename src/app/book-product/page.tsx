"use client";

import { useCart } from "@/context/CartContext";
import BookingCard from "@/components/common/BookingCard";
import OrderSummary from "@/components/product/OrderSummary";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function BookProductPage() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 dark:text-white flex items-center gap-3">
        <ShoppingBag className="w-8 h-8 text-[#00d8d6]" />
        Your Cart{" "}
        <span className="text-gray-400 text-2xl font-normal">
          ({cart.length} items)
        </span>
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-24 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-3xl">
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
            Your cart is feeling lonely!
          </p>
          <Link
            href="/products"
            className="px-8 py-3 bg-[#00d8d6] text-white rounded-full font-bold hover:bg-[#00a8a6] transition-all"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((product, index) => (
              <BookingCard
                key={`${product.id}-${index}`}
                product={product}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>

          <OrderSummary totalPrice={totalPrice} cartLength={cart.length} />
        </div>
      )}
    </div>
  );
}
