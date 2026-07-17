"use client"
import Link from 'next/link';
import { MdDarkMode,MdLightMode  } from "react-icons/md";
import { useTheme } from 'next-themes';
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen, onClose }) => {
  const { theme, setTheme } = useTheme();
  const {cart} = useCart()

  if (!isOpen) return null;
  

  return (
    <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-gray-900 border-b dark:border-gray-800 p-6 flex flex-col gap-4 shadow-xl z-40 transition-all">
      <Link href="/" onClick={onClose} className="text-lg dark:text-white border-b pb-2">Home</Link>
      <Link href="/products" onClick={onClose} className="text-lg dark:text-white border-b pb-2">Products</Link>
      <Link href="/about" onClick={onClose} className="text-lg dark:text-white border-b pb-2">About</Link>
      
      <div className="flex items-center gap-4 mt-4">
        <button
         onClick={()=>{setTheme(theme === "dark" ? "light" : "dark")}} 
        className=" mt-4 bg-[#00d8d6] text-white py-2 rounded-lg font-medium hover:bg-indigo-700 w-10"
      >
        {theme == "dark" ? <MdLightMode  className="w-5 h-5 text-white mx-auto" /> : <MdDarkMode className="w-5 h-5 text-gray-600 mx-auto" />}
      </button>

        <Link href={"/book-product"} className="relative cursor-pointer p-2 rounded-full mt-4 hover:bg-[#02fbf74b] dark:hover:bg-[#02fbf74b]">
          <ShoppingCart className="w-5 h-5 dark:text-white" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            {cart.length}
          </span>
        </Link>
    </div>
    </div>
  );
};

export default MobileNavbar;