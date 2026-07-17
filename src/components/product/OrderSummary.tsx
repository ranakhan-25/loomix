import React from 'react';
import { ArrowRight } from 'lucide-react';

interface OrderSummaryProps {
  totalPrice: number;
  cartLength: number;
}

const OrderSummary = ({ totalPrice, cartLength }: OrderSummaryProps) => {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-28 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border dark:border-gray-700">
        <h2 className="text-2xl font-bold dark:text-white mb-6">
          Order Summary
        </h2>
        
        <div className="space-y-4 mb-8">
          <div className="flex justify-between text-gray-500 dark:text-gray-400">
            <span>Subtotal ({cartLength} items)</span>
            <span className="font-bold">${totalPrice.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-gray-500 dark:text-gray-400">
            <span>Shipping</span>
            <span className="font-bold text-green-500">Free</span>
          </div>
          
          <div className="border-t dark:border-gray-700 pt-4 flex justify-between text-xl font-bold dark:text-white">
            <span>Total</span>
            <span className="text-[#00d8d6]">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <button className="w-full py-4 bg-[#00d8d6] text-white font-bold rounded-2xl hover:bg-[#00a8a6] shadow-lg shadow-[#00d8d6]/30 transition-all flex items-center justify-center gap-2">
          Checkout Now <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;