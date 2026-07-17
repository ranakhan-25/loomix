"use client";

import { Search, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";

const DesktopNavbar = () => {
  const { theme, setTheme } = useTheme();
  const { cart } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
  ];

  return (
    <div className="hidden md:flex items-center gap-8">
      <div className="flex gap-6 font-medium">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-all duration-200 border-b-2 py-1   ${
                isActive
                  ? " border-[#00d8d6] font-bold text-[#00d8d6]"
                  : "light:text-gray-600 dark:text-gray-300 border-transparent hover:border-[#0baba9]"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-4 py-1.5 rounded-full border dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00d8d6] w-40"
          />
          <button type="submit" className="absolute left-3 top-2.5">
            <Search className="w-4 h-4 text-gray-400" />
          </button>
        </form>

        <div
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          className="p-2 cursor-pointer rounded-full hover:bg-[#02fbf74b] dark:hover:bg-gray-800 transition-colors"
        >
          {theme === "dark" ? (
            <MdLightMode className="w-5 h-5 text-white" />
          ) : (
            <MdDarkMode className="w-5 h-5 text-gray-600" />
          )}
        </div>

        <Link
          href={"/book-product"}
          className="relative cursor-pointer p-2 rounded-full hover:bg-[#02fbf74b] dark:hover:bg-[#02fbf74b]"
        >
          <ShoppingCart className="w-5 h-5 dark:text-white" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            {cart.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavbar;
