"use client";
import { useState } from 'react';
import { Menu, PackageOpen, X } from 'lucide-react'; 
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import Link from "next/link"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <nav className="sticky top-0 z-50 w-full h-20 bg-white dark:bg-black drop-blur-md border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#00d8d6] tracking-tight flex items-center gap-2"><PackageOpen/> LOOMIX</Link>
        
       
        <DesktopNavbar />
        
       
        <button 
          className="md:hidden p-2 text-gray-700 dark:text-white transition-colors" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <MobileNavbar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
}