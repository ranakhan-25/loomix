"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-[#00d8d6]">LOOMIX</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-sm">
              Premium quality traditional wear for modern individuals. 
              Crafted with care, designed for elegance.
            </p>
          </div>

         
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link href="/" className="hover:text-[#00d8d6]">Home</Link></li>
              <li><Link href="/products" className="hover:text-[#00d8d6]">Products</Link></li>
              <li><Link href="/about" className="hover:text-[#00d8d6]">About</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Follow Us</h3>
            <div className="flex gap-4 text-gray-600 dark:text-gray-400">
              <a href="#" className="hover:text-[#00d8d6]">Facebook</a>
              <a href="#" className="hover:text-[#00d8d6]">Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t dark:border-gray-800 text-center text-gray-500 dark:text-gray-500 text-sm">
          © {new Date().getFullYear()} LOOMIX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}