"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function VehiclesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef<number | null>(null);

  const vehicles = [
    { link: "/vehicles/city", img: "/city.png", title: "Senzo City" },
    { link: "/vehicles/cityXL", img: "/cityXL.png", title: "Senzo City XL" },
    { link: "/vehicles/power", img: "/power.jpeg", title: "Senzo Power" },
    { link: "/vehicles/essential", img: "/essential.png", title: "Senzo Essential" },
    { link: "/vehicles/power+neo", img: "/power+neo.png", title: "Senzo Power + Neo" },
  ];

  // Reduced copies from 10 to 3 for better performance
  const COPIES = 3;
  const repeatedList = Array.from({ length: COPIES }, () => vehicles).flat();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const vehiclesCount = vehicles.length;

    const updateCards = () => {
      const cards = Array.from(
        container.querySelectorAll(".vehicle-card")
      ) as HTMLElement[];

      if (!cards.length) return;

      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      let closest = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(centerX - cardCenter);

        // Smooth, subtle scale
        const scale = Math.max(
          0.95,
          1 - distance / (containerRect.width * 1.8)
        );
        card.style.transform = `scale(${scale})`;

        if (distance < minDistance) {
          minDistance = distance;
          closest = index % vehiclesCount;
        }
      });

      setActiveIndex(closest);
      rafRef.current = null;
    };

    // Wait for layout to be ready
    const initialize = () => {
      const cards = Array.from(
        container.querySelectorAll(".vehicle-card")
      ) as HTMLElement[];

      if (!cards.length) {
        requestAnimationFrame(initialize);
        return;
      }

      const gap = 48;
      const cardWidth = cards[0].offsetWidth + gap;
      const singleListWidth = cardWidth * vehiclesCount;

      // Start in the middle for infinite feel
      container.scrollLeft =
        singleListWidth * Math.floor(COPIES / 2) -
        (container.offsetWidth / 2 - cardWidth / 2);

      // Update after scroll position is set
      requestAnimationFrame(() => {
        updateCards();
      });
    };

    initialize();

    const onScroll = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          updateCards();
        });
      }
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [vehicles.length]);

  return (
    <section
      id="vehicles"
      className="py-12 relative overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/backw.jpeg"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      <div className="text-center mb-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 bg-black/40 text-white text-sm font-semibold rounded-full uppercase tracking-wider">
            Our Collection
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4 font-display"
        >
          Explore Our Vehicles
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-200 text-sm md:text-base max-w-xl mx-auto font-light"
        >
          Discover our complete range of premium electric vehicles designed for every lifestyle
        </motion.p>
      </div>

      {/* Scroll Area */}
      <div
        ref={containerRef}
        className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory relative z-10 scrollbar-hide carousel-mobile-slow"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex flex-nowrap gap-4 sm:gap-6 md:gap-8 px-4 sm:px-[8vw] md:px-[10vw]">
          {repeatedList.map((item, i) => (
            <div key={i} className="snap-center relative">
              <Link href={item.link} className="block relative group">
                <motion.div
                  className="vehicle-card min-w-[70vw] sm:min-w-[55vw] md:min-w-[35vw] lg:min-w-[25vw]
                             transition-transform duration-300
                             bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden group-hover:shadow-2xl border border-gray-100"
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (i % vehicles.length) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 768px) 65vw, (max-width: 1024px) 40vw, 30vw"
                      loading={i < 5 ? "eager" : "lazy"}
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  <div className="p-3 sm:p-3.5 md:p-4 bg-white">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#213448] mb-1 sm:mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-[10px] sm:text-xs font-medium uppercase tracking-wider">
                      Premium Electric Vehicle
                    </p>
                    <div className="mt-1.5 sm:mt-2 pt-1.5 sm:pt-2 border-t border-gray-200">
                      <span className="text-[#213448] font-semibold text-[10px] sm:text-xs inline-flex items-center group-hover:text-[#547792] transition-colors">
                        Learn More
                        <svg className="ml-1.5 sm:ml-2 w-3 sm:w-3.5 h-3 sm:h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <motion.div 
        className="mt-6 sm:mt-8 flex justify-center gap-2 sm:gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {vehicles.map((_, i) => (
          <motion.span
            key={i}
            className="h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer"
            style={{
              width: i === activeIndex ? "32px" : "6px",
              background:
                i === activeIndex
                  ? "white"
                  : "rgba(255, 255, 255, 0.4)",
            }}
            whileHover={{ scale: 1.2 }}
            animate={{
              scale: i === activeIndex ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </section>
  );
}
