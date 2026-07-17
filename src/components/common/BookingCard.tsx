"use client"
import React from 'react';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import type { Product } from '@/type/product'; 

interface BookingCardProps {
  product: Product;
  removeFromCart: (id: number) => void;
}

const BookingCard = ({ product, removeFromCart }: BookingCardProps) => {
  return (
    <div className="group flex items-center gap-6 p-5 bg-white dark:bg-gray-800 rounded shadow-sm border dark:border-gray-700 hover:shadow-xl transition-all duration-300">

      <div className="relative w-28 h-28 rounded overflow-hidden shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>


      <div className="grow">
        <h3 className="font-medium text-xl dark:text-white group-hover:text-[#00d8d6] transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm">{product.category}</p>

 
        <div className="flex gap-4 mt-2 text-sm text-gray-400">
          {product.selectedColor && (
            <span>
              Color: <b className="text-gray-700 dark:text-gray-200">{product.selectedColor}</b>
            </span>
          )}
          {product.selectedSize && (
            <span>
              Size: <b className="text-gray-700 dark:text-gray-200">{product.selectedSize}</b>
            </span>
          )}
        </div>


        <div className="flex justify-between items-center mt-2">
          <p className="text-xl font-bold text-[#00d8d6]">
            ${(product.price * (product.quantity || 1)).toFixed(2)}
          </p>
          <span className="text-sm font-medium dark:text-gray-300">
            Qty: {product.quantity || 1}
          </span>
        </div>
      </div>

    
      <button
        onClick={() => removeFromCart(product.id)}
        className="p-3 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default BookingCard;