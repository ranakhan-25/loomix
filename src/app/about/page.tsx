"use client";

import Image from "next/image";
import { Zap, ShieldCheck, Heart } from "lucide-react";

const Featured = [
  {
    icon: Zap,
    title: "Modern Vision",
    desc: "Blending traditional artistry with contemporary aesthetics for the modern generation.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "Every piece is crafted with premium materials ensuring durability and comfort.",
  },
  {
    icon: Heart,
    title: "Customer Focused",
    desc: "Your style is our passion. We create fashion that makes you feel confident and unique.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-linear-to-b from-[#00d8d6]/10 to-transparent" />
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6">
          The <span className="text-[#00d8d6]">LOOMIX</span> Story
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          Crafting excellence in every thread. We redefine modern fashion
          through timeless designs and sustainable quality.
        </p>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {Featured.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-[#00d8d6] transition-all group"
            >
              <item.icon className="w-10 h-10 text-[#00d8d6] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#00d8d6]/5 dark:bg-gray-900/50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-100 rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              width={100}
              height={100}
              src="https://pbs.twimg.com/profile_images/1945433387411578880/3MEimc3s_400x400.jpg"
              alt="Brand Image/Workshop"
              className="w-full h-full object-cover"
            />
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400 italic">
              Brand Image/Workshop
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
              Built on Trust, Crafted for You
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              LOOMIX started with a simple idea: that fashion should be
              accessible, sustainable, and undeniably stylish. We work directly
              with master artisans to ensure that every stitch in our collection
              meets the highest global standards.
            </p>
            <button className="px-8 py-3 bg-[#00d8d6] text-white rounded-full font-bold hover:shadow-lg hover:shadow-[#00d8d6]/40 transition-all">
              Explore Collection
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
