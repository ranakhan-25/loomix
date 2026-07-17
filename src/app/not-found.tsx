"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-4">
      
      
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-9xl font-extrabold text-[#00d8d6] drop-shadow-lg"
      >
        404
      </motion.h1>
      
     
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-4 text-center">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 mb-8 text-center max-w-md">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link 
          href="/"
          className="px-8 py-3 bg-[#00d8d6] hover:bg-[#00b5b3] text-white font-semibold rounded-full transition-colors shadow-lg"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}