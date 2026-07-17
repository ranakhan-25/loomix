"use client";

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { name: "Rahim Ahmed", role: "Fashion Blogger", quote: "Loomix provides the best quality clothing!", image:"https://i.ibb.co.com/GD4BGDt/man1.jpg" },
  { name: "Sara Khan", role: "Model", quote: "The designs are so modern and fit perfectly.", image:"https://i.ibb.co.com/Y4MsfJMG/woman6.jpg" },
  { name: "Karim Uddin", role: "Customer", quote: "Fast delivery and premium fabric quality.", image:"https://i.ibb.co.com/Pvrh29pj/man4.jpg" },
  { name: "Jannat", role: "Student", quote: "Unique collection and very affordable prices.", image:"https://i.ibb.co.com/wZTPCqdF/woman1.jpg" },
];

export default function TestimonialSlider() {
  return (
    <section className="pb-20 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">What Our Clients Say</h2>
        
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm h-full ">
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic">&quot;{t.quote}&quot;</p>
                <div className="flex gap-5 items-center">
                  <div>
                  <Image src={t.image} alt="image" width={100} height={100} className="w-12 h-12 rounded-full"/>
                </div>
                <div>
                  
                <div className="font-bold dark:text-white">{t.name}</div>
                <div className="text-sm text-gray-400">{t.role}</div>
                </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}