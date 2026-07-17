"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Trending Fashion",
    heading: "Elevate Your Style with LOOMIX",
    description: "Discover the latest trends in fashion and accessories. Premium quality, modern designs, and unmatched comfort.",
    image: "https://i.ibb.co.com/KcLDfxwG/hero1.jpg",
  },
  {
    id: 2,
    title: "New Arrivals",
    heading: "Refresh Your Wardrobe Today",
    description: "Explore our newest collection of summer essentials and timeless classics designed for you.",
    image: "https://i.ibb.co.com/0jxVc90H/hero2.jpg",
  },
  {
    id: 3,
    title: "Limited Offers",
    heading: "Exclusive Deals Just For You",
    description: "Don't miss out on our seasonal discounts. Get the best items at prices you will love.",
    image: "https://i.ibb.co.com/KpCRKC79/hero3.webp",
  },
];

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
           
            <div className="relative h-full w-full">
              
            
              

<Image src={slide.image}  alt={slide.title} width={100} height={100} className="absolute inset-0 w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-black/50 z-1" />

              
              <div className="relative z-2 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-5 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl text-white"
                  >
                    <p className="text-[#00d8d6] uppercase font-bold tracking-[4px] mb-5 text-sm">
                      {slide.title}
                    </p>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
                      {slide.heading}
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
                      {slide.description}
                    </p>

                    <div className="mt-8 flex gap-4 flex-wrap">
                      <Link
                        href="/products"
                        className="px-8 py-3 rounded-full bg-[#00d8d6] hover:bg-[#00b5b3] transition font-bold text-white shadow-lg"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}