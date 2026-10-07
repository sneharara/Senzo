"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      title: "Sustainable Mobility",
      description:
        "Committed to eco-friendly transportation solutions that reduce carbon emissions and promote environmental stewardship through innovative electric vehicle technology.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Smart Technology",
      description:
        "Advanced intelligent systems with seamless connectivity, real-time monitoring, and cutting-edge features that enhance the riding experience.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Minimalist Design",
      description:
        "Sophisticated, clean aesthetics that prioritize functionality and elegance, creating timeless vehicles that stand out through simplicity.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Performance & Reliability",
      description:
        "Engineered for exceptional performance, instant acceleration, and long-term reliability, ensuring a superior riding experience every day.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];


  const rideModes = [
    { 
      title: "ECO Mode", 
      desc: "Optimized for maximum range and energy efficiency, ideal for extended commutes and battery conservation.",
      features: ["Extended Range", "Energy Efficient", "Smooth Acceleration"]
    },
    { 
      title: "SPORT Mode", 
      desc: "Balanced performance for everyday riding with responsive handling and consistent power delivery.",
      features: ["Balanced Performance", "All-Day Comfort", "Reliable Power"]
    },
    { 
      title: "DYNAMIC Mode", 
      desc: "Maximum power output for instant acceleration and peak performance when you need it most.",
      features: ["Instant Acceleration", "Peak Performance", "Maximum Power"]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full overflow-hidden bg-gradient-to-br from-[#213448] to-[#547792]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-display">
              About Senzo
            </h1>
            <p className="text-sm sm:text-base md:text-lg opacity-95 font-light tracking-wide">
              Pioneering Electric Mobility in India
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#213448] mb-3 font-display">Our Story</h2>
            <div className="w-20 h-1 bg-[#213448]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                <strong className="text-[#213448] font-semibold">Senzo Motocorp Pvt. Ltd.</strong> is a leading Indian electric
                two-wheeler company established in{" "}
                <strong className="text-[#213448]">2025</strong> with a clear mission: to revolutionize sustainable mobility across India.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Our vision is to transform everyday transportation by replacing conventional gasoline-powered
                vehicles with advanced, battery-operated electric bikes and scooters. We believe the future of
                mobility must be clean, efficient, intelligent, and accessible to all.
              </p>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Through our commitment to minimalist design, smart technology integration, and seamless connectivity,
                Senzo delivers a premium riding experience that combines modern luxury with uncompromising
                performance and reliability.
              </p>
            </div>

            <div className="relative w-full max-w-[700px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg mx-auto">
              <Image
                src="/about.png"
                alt="Senzo Electric Scooter"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 700px"
                priority
              />
            </div>

          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-[#213448] to-[#547792] rounded-2xl p-8 md:p-10 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-3 font-display">Our Mission</h3>
              <p className="text-sm md:text-base leading-relaxed opacity-95">
                To accelerate India's transition to sustainable transportation by manufacturing high-quality,
                affordable electric vehicles that meet the diverse needs of Indian commuters while reducing
                environmental impact.
              </p>
            </div>
            <div className="bg-[#EAE0CF] rounded-2xl p-8 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#213448] font-display">Our Vision</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                To become India's most trusted electric vehicle brand, recognized for innovation, quality,
                and commitment to creating a cleaner, smarter future for urban mobility.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#213448] mb-3 font-display">Our Core Values</h2>
            <div className="w-20 h-1 bg-[#213448] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white border-2 border-gray-100 rounded-lg p-5 md:p-6 hover:border-[#213448] hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="w-10 h-10 bg-[#213448] rounded-lg flex items-center justify-center text-white mb-4"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-[#213448] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Ride Modes */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#213448] mb-3 font-display">Engineered to Amaze</h2>
            <div className="w-20 h-1 bg-[#213448] mx-auto"></div>
            <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl mx-auto">
              Three intelligent riding modes designed to optimize performance, range, and efficiency for every journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {rideModes.map((mode, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#EAE0CF] to-white border border-gray-200 rounded-lg p-5 md:p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 bg-[#213448] text-white text-sm font-semibold rounded-full">
                    {mode.title}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{mode.desc}</p>
                <ul className="space-y-2">
                  {mode.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#213448] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>


        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-[#213448] to-[#547792] rounded-xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display">
            Join the Electric Revolution
          </h2>
          <p className="text-sm md:text-base text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
            Experience the future of mobility with Senzo's innovative electric vehicles.
            Discover smart, sustainable, and modern transportation solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/vehicles"
                className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-white text-[#213448] font-semibold text-sm sm:text-base rounded-lg hover:bg-[#EAE0CF] transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center group relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#213448]/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Explore Vehicles</span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 border-2 border-white text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-white hover:text-[#213448] transition-all duration-300 inline-flex items-center justify-center group relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
                <span className="relative z-10 text-white group-hover:text-[#213448] transition-colors">Contact Us</span>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
