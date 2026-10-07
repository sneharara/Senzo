"use client";

import Hero from "./components/Hero";
import VehiclesCarousel from "./components/VehiclesCarousel";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full scroll-smooth relative">
      {/* HERO SECTION */}
      <Hero />

      {/* WHY SENZO */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-block px-5 py-2 bg-[#213448] text-white text-sm font-semibold rounded-full uppercase tracking-wider">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#213448] mb-6 font-display"
          >
            Engineering Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-12"
          >
            We combine cutting-edge technology with sustainable design to deliver electric vehicles that exceed expectations in performance, reliability, and environmental impact.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

            {[
              { 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ), 
                title: "Advanced Performance", 
                desc: "High-torque motors and intelligent power management systems deliver exceptional acceleration and smooth riding experience across all terrains."
              },
              { 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="4" y="7" width="14" height="10" rx="2" ry="2" strokeWidth={2} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v6M20 11v2" />
                  </svg>
                ), 
                title: "Extended Range", 
                desc: "Industry-leading lithium-ion battery technology provides extended range per charge, ensuring you reach your destination with confidence."
              },
              { 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ), 
                title: "Durable & Reliable", 
                desc: "Built with premium materials and rigorous quality standards. Our vehicles are designed for longevity with minimal maintenance requirements."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 md:p-8 border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-lg hover:border-[#213448] group transition-all duration-300"
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-[#213448] to-[#547792] rounded-xl mb-4 mx-auto flex items-center justify-center text-white transition-all duration-200 hover:scale-110 shadow-lg"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl text-[#213448] font-bold mb-3 group-hover:text-[#213448] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-3 min-h-[60px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* VEHICLES SECTION */}
      <VehiclesCarousel />

      {/* COMPANY OVERVIEW SECTION */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#213448] via-[#5a6a7a] to-[#213448] rounded-2xl p-5 md:p-8 lg:p-10 text-white shadow-xl overflow-hidden"
          >
            {/* Header Section */}
            <div className="relative z-10 mb-8 text-center">
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                  About Us
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 font-display">
                Company Overview
              </h2>

              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>

              <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Building the future of electric mobility with innovation, quality, and commitment to excellence.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
              {[
                { 
                  number: "2025", 
                  label: "Year Established",
                  icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )
                },
                { 
                  number: "100%", 
                  label: "Electric Focus",
                  icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                { 
                  number: "5+", 
                  label: "Vehicle Models",
                  icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )
                },
                { 
                  number: "India", 
                  label: "Manufacturing Base",
                  icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="relative bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 md:p-4 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-md hover:shadow-lg h-full flex flex-col items-center justify-center text-center">
                    <motion.div
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/20 rounded-lg flex items-center justify-center text-white mb-1.5 sm:mb-2 mx-auto group-hover:bg-white/30 transition-all duration-300"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.15,
                      }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-0.5 sm:mb-1 font-display bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-[10px] sm:text-xs font-medium leading-tight px-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certified By Section */}
            <div className="relative z-10 border-t border-white/20 pt-8">
              <div className="text-center mb-6">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 font-display">
                  Certified By
                </h3>
                <p className="text-gray-300 text-xs md:text-sm">
                  Recognized by leading certification bodies worldwide
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                {[
                  {
                    name: "International Centre for Automotive Technology",
                    abbreviation: "ICAT",
                  },
                  {
                    name: "Government of India",
                    abbreviation: "GoI",
                  },
                  {
                    name: "International Organization for Standardization",
                    abbreviation: "ISO",
                  },
                  {
                    name: "Zero Defect Zero Effect",
                    abbreviation: "ZED",
                  },
                  {
                    name: "Intellectual Property India",
                    abbreviation: "IP India",
                  },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="relative bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 md:p-4 text-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 shadow-md hover:shadow-lg h-full flex flex-col justify-center min-h-[70px] sm:min-h-[80px]">
                      <div className="text-sm sm:text-base md:text-lg font-bold mb-0.5 sm:mb-1 bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                        {cert.abbreviation}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-300 leading-tight group-hover:text-gray-200 transition-colors px-1">
                        {cert.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-[#EAE0CF] text-[#213448] text-center relative overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="inline-block px-5 py-2 bg-[#213448] text-white text-sm font-semibold rounded-full uppercase tracking-wider">
                Get Started
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display text-[#213448]">
              Ready to Experience
              <br />
              Electric Mobility?
            </h2>

            <p className="text-sm sm:text-base md:text-lg mb-8 font-light opacity-90 leading-relaxed text-[#213448]">
              Explore our complete range of premium electric vehicles and find the perfect match for your lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/vehicles"
                  className="px-8 py-3 bg-[#213448] text-white font-semibold text-base rounded-lg shadow-lg hover:shadow-[#213448]/30 hover:bg-[#547792] transition-all duration-300 inline-flex items-center group relative overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">View All Vehicles</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-transparent border-2 border-[#213448] text-[#213448] font-semibold text-base rounded-lg hover:bg-[#213448] hover:text-white transition-all duration-300 inline-flex items-center group relative overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-[#213448]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                  <span className="relative z-10">Contact Us</span>
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
