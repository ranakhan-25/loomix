"use client";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Product } from "@/type/product";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart(); 

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const foundProduct = data.find((p) => p.id.toString() === id);
        setProduct(foundProduct || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-20 dark:text-white">Loading...</div>;
  if (!product) return <div className="text-center py-20 dark:text-white">Product not found!</div>;

    
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
       
        <div className="relative h-125 w-full rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>


        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold dark:text-white">{product.name}</h1>
          <p className="text-gray-500 mt-2 text-lg">{product.category}</p>
          <p className="text-4xl font-bold text-[#00d8d6] mt-4">${product.price}</p>

          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>

  
          <div className="mt-6">
            <h4 className="font-semibold dark:text-white">Available Colors:</h4>
            <div className="flex gap-2 mt-2">
              {product.colors.map((color) => (
                <span key={color} className="px-4 py-1.5 border border-gray-300 rounded-full text-sm dark:text-white hover:bg-[#00d8d6] hover:text-white transition cursor-pointer">
                  {color}
                </span>
              ))}
            </div>
          </div>


          <div className="mt-6">
            <h4 className="font-semibold dark:text-white">Select Size:</h4>
            <div className="flex gap-2 mt-2">
              {product.sizes.map((size) => (
                <button key={size} className="w-12 h-12 border rounded-xl hover:border-[#00d8d6] dark:text-white dark:border-gray-600 transition">
                  {size}
                </button>
              ))}
            </div>
          </div>

      
          <button 
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className={`mt-10 w-full py-4 font-bold rounded-xl transition-all active:scale-95 ${
              product.inStock 
                ? "bg-[#00d8d6] text-white hover:bg-[#00a8a6] shadow-lg" 
                : "bg-gray-300 cursor-not-allowed text-gray-500"
            }`}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}