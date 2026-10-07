"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  // PARALLAX SETUP
  const { scrollY } = useScroll();

  // Background moves slower
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);

  // Foreground text moves slightly faster
  const fgY = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">

      {/* Background Image (PARALLAX) */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <Image
          src="/sitebg.jpeg"
          alt="Hero Image"
          fill
          priority
          className="object-cover"
          quality={85}
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/20" />

      {/* Foreground Content */}
      <motion.div
        style={{ y: fgY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4 sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <div className="inline-flex items-center justify-center backdrop-blur-lg p-3 rounded-2xl border border-white/30 shadow-lg">
            <Image
              src="/logo5.png"
              alt="Senzo Logo"
              width={140}
              height={140}
              className="w-20 sm:w-24 md:w-28 lg:w-[140px] h-auto drop-shadow-lg"
              sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 140px"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-hero font-bold mb-4 sm:mb-5 md:mb-6 drop-shadow-2xl leading-[1.1] max-w-4xl tracking-tight px-2"
        >
          Ride the Future
          <br />
          with Senzo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-7 md:mb-8 max-w-2xl opacity-90 font-light leading-relaxed tracking-wide font-sans px-2"
        >
          Premium electric vehicles engineered for exceptional performance, sustainability, and timeless design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto px-4"
        >
          <motion.a
            href="#vehicles"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#213448] font-semibold text-sm sm:text-base rounded-lg shadow-lg hover:shadow-white/30 hover:bg-gray-50 transition-all duration-300 inline-flex items-center justify-center group relative overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#213448]/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Explore Vehicles</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
          
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center group relative overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-white"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: "left" }}
            />
            <span className="relative z-10">Get in Touch</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
