"use client";
import { useState, useEffect, useMemo } from "react";
import ProductCard from "@/components/product/ProductCard";
import Pagination from "@/components/common/PaginationBtn";
import type { Product } from "@/type/product";


export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Default"); //
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  const filteredProducts = useMemo(() => {
    let result = products.filter(
      (p) =>
        p.name?.toLowerCase().includes(search.toLowerCase()) &&
        (category === "All" || p.category === category),
    );
    if (sort === "LowToHigh") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sort === "HighToLow") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return result;
  }, [products, search, category, sort]);


  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <div className="relative h-75 w-full flex items-center justify-center overflow-hidden mb-10">
        <div className="absolute inset-0 bg-linear-to-r from-[#00d8d6] to-[#00a8a6] dark:from-[#008f8d] dark:to-[#005f5e]" />

        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-lg">
            Our Collection
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-90">
            Discover the best traditional wear at LOOMIX
          </p>
        </div>

        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-0 rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="block w-full h-12.5 text-gray-50 dark:text-gray-900 fill-current"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 p-3 rounded-lg border dark:bg-gray-800 dark:text-white"
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />

          <select
            className="p-3 rounded-lg border dark:bg-gray-800 dark:text-white"
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="All">All Categories</option>

            <option value="Panjabi">Panjabi</option>

            <option value="T-Shirt">T-Shirt</option>

            <option value="Hoodie">Hoodie</option>

            <option value="Jeans">Jeans</option>

            <option value="Sneakers">Sneakers</option>

            <option value="Accessories">Accessories</option>

            <option value="Cap">Cap</option>

            <option value="Watch">Watch</option>
          </select>

          <select
            className="p-3 rounded-lg border dark:bg-gray-800 dark:text-white"
            onChange={(e) => {
              setSort(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="Default">Sort by: Default</option>
            <option value="LowToHigh">Price: Low to High</option>
            <option value="HighToLow">Price: High to Low</option>
          </select>
        </div>

        {products.length === 0 ? (
          <div className="py-20 text-center">No Products Found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentItems.map((p: Product) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
