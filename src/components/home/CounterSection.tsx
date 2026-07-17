"use client";

import { motion } from "framer-motion";
import { Zap, Layers3, BarChart3, ShoppingBag } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: ShoppingBag,
    title: "Curated Collections",
    desc: "Explore hand-picked fashion trends tailored for modern lifestyle.",
  },
  {
    icon: Layers3,
    title: "Smart Inventory",
    desc: "Real-time stock updates and seamless order management.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Track sales and customer engagement with detailed insights.",
  },
];


export default function AdvancedHero() {
  return (
    <section className="relative min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 py-24 px-6 transition-colors duration-500">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
     
          <div className="space-y-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 font-medium text-sm">
              <Zap className="w-4 h-4 mr-2" />
              The Future of E-commerce
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9]">
              Elevate Your <span className="text-teal-600 dark:text-teal-400">Style</span> with LOOMIX.
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Premium quality, sustainable fashion, and cutting-edge technology. Redefining your online shopping experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-all shadow-lg">
                Shop Collections
              </Link>
              <Link href="/about" className="px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 font-bold rounded-xl transition-all">
                Learn More
              </Link>
            </div>
          </div>

  


          
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="p-8 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all"
              >
                <feature.icon className="w-10 h-10 text-teal-600 dark:text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}