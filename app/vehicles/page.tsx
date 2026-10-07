"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const vehicles = [
  { 
    id: 1, 
    name: "Senzo City", 
    link: "/vehicles/city",
    img: "/city.png",
    description: "Perfect for city commuting with efficient performance and compact design",
    category: "Urban Commuter",
    highlights: ["City Optimized", "Long Range", "Smart Features"]
  },
  { 
    id: 2, 
    name: "Senzo City XL", 
    link: "/vehicles/cityXL",
    img: "/cityXL.png",
    description: "Premium performance and style for the discerning urban rider",
    category: "Premium Commuter",
    highlights: ["Extended Range", "Premium Design", "Advanced Tech"]
  },
  { 
    id: 3, 
    name: "Senzo Power + Neo", 
    link: "/vehicles/power+neo",
    img: "/power+neo.png",
    description: "Advanced features and enhanced power for professional riders",
    category: "Performance Plus",
    highlights: ["Enhanced Power", "Professional Grade", "Advanced Features"]
  },
  { 
    id: 4, 
    name: "Senzo Essential", 
    link: "/vehicles/essential",
    img: "/essential.png",
    description: "Reliable and durable design built for everyday transportation needs",
    category: "Essential",
    highlights: ["Reliable", "Durable", "Value Packed"]
  },
  { 
    id: 5, 
    name: "Senzo Power", 
    link: "/vehicles/power",
    img: "/power.jpeg",
    description: "High-performance electric vehicle designed for power and reliability",
    category: "Performance",
    highlights: ["High Performance", "Powerful Motor", "Robust Build"]
  },
];

export default function Vehicles() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full overflow-hidden bg-gradient-to-br from-[#213448] to-[#547792]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-display"
            >
              Our Vehicles
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg opacity-95 font-light tracking-wide"
            >
              Discover Our Complete Range of Electric Mobility Solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#213448] mb-3 font-display">
            Choose Your Perfect Ride
          </h2>
          <div className="w-20 h-1 bg-[#213448] mx-auto mb-6"></div>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive range of electric vehicles, each engineered for performance,
            sustainability, and reliability. From urban commuting to professional transportation,
            find the perfect electric vehicle that matches your lifestyle.
          </p>
        </motion.section>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href={vehicle.link}>
                <div className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#213448] hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
                    <Image
                      src={vehicle.img}
                      alt={vehicle.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#213448] text-white text-xs font-semibold rounded-full">
                        {vehicle.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-[#213448] mb-2 font-display">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">
                      {vehicle.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {vehicle.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#EAE0CF] text-[#213448] text-xs font-medium rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-[#213448] font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>Explore Details</span>
                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 md:mt-24"
        >
          <div className="bg-[#EAE0CF] rounded-xl p-8 md:p-12 text-[#213448] text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 font-display">
              Need Help Choosing?
            </h2>
            <p className="text-sm md:text-base mb-6 max-w-xl mx-auto">
              Our team is here to help you find the perfect electric vehicle for your needs.
              Contact us for personalized recommendations and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-[#213448] text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-[#547792] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-center"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 border-2 border-[#213448] text-[#213448] font-semibold text-sm sm:text-base rounded-lg hover:bg-[#213448] hover:text-white transition-all duration-300 text-center"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
