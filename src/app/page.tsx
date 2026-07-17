import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import MarqueeComponent from "@/components/home/Marquee";
import CounterSection from "@/components/home/CounterSection";
import TestimonialSlider from "@/components/home/TestimonialSlider";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <MarqueeComponent />
      <FeaturedProducts />
      <CounterSection/>
      <TestimonialSlider/>
    </div>
  );
}
