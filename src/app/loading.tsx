"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-black transition-colors duration-300">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          borderRadius: ["20%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="w-16 h-16 bg-[#00d8d6]"
      />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-2xl font-black text-gray-900 dark:text-white uppercase tracking-widest"
      >
        LOOMIX
      </motion.h2>

      <p className="mt-2 text-gray-400 text-sm italic">
        Loading your experience...
      </p>
    </div>
  );
}
