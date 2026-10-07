"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Icon components
const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const VehiclesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>
);

const AboutIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ContactIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);

  // Debounced header height update function
  const updateHeaderHeight = useCallback(() => {
    // SSR safety check
    if (typeof window === "undefined" || !headerRef.current) {
      return;
    }

    try {
      const height = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty("--header-height", `${height}px`);
    } catch (error) {
      // Silently fail in production - fallback to CSS default
      if (process.env.NODE_ENV === "development") {
        console.warn("Failed to update header height:", error);
      }
    }
  }, []);

  // Debounce resize handler for performance
  useEffect(() => {
    // SSR safety check
    if (typeof window === "undefined") {
      return;
    }

    updateHeaderHeight();

    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateHeaderHeight, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateHeaderHeight, isOpen]);

  // Handle Escape key to close menu
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Focus management when menu opens/closes
  useEffect(() => {
    if (isOpen) {
      // Focus first menu item when menu opens
      setTimeout(() => {
        firstMenuItemRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleMenuToggle();
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        id="main-header"
        className="bg-black/80 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-gray-800 pt-[env(safe-area-inset-top)]"
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex justify-between items-center gap-2 sm:gap-4 w-full"
        >

        {/* Left Section: Logo and Contact */}
        <div className="flex items-center gap-2 sm:gap-6 flex-1 min-w-0">
          <Link href="/" className="flex items-center justify-center group transition-transform hover:scale-105 flex-shrink-0">
            <Image
              src="/logo5.png"
              alt="Senzo Logo"
              width={120}
              height={120}
              className="w-16 sm:w-20 md:w-24 lg:w-[120px] h-auto rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl object-contain"
              sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 120px"
            />
          </Link>

          {/* Contact Details */}
          <div className="hidden lg:flex items-center gap-4 pl-4 border-l border-white/20 h-full">
            <a
              href="tel:+919817826268"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 whitespace-nowrap"
              aria-label="Call us"
            >
              <PhoneIcon />
              <span>+91 98178 26268</span>
            </a>
            <a
              href="mailto:info@senzo.com"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 whitespace-nowrap"
              aria-label="Email us"
            >
              <EmailIcon />
              <span>info@senzo.com</span>
            </a>
          </div>
        </div>

        {/* Right Section: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 flex-shrink-0 h-full">
          <Link 
            href="/" 
            className="relative flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            <HomeIcon />
            <span>Home</span>
          </Link>
          <Link 
            href="/vehicles" 
            className="relative flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            <VehiclesIcon />
            <span>Vehicles</span>
          </Link>
          <Link 
            href="/about" 
            className="relative flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            <AboutIcon />
            <span>About</span>
          </Link>
          <Link 
            href="/contact" 
            className="relative flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            <ContactIcon />
            <span>Contact</span>
          </Link>
        </nav>

        {/* Mobile: Contact Icons and Hamburger */}
        <div className="md:hidden flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
          <a
            href="tel:+919817826268"
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center"
            aria-label="Call us"
          >
            <PhoneIcon />
          </a>
          <a
            href="mailto:info@senzo.com"
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center"
            aria-label="Email us"
          >
            <EmailIcon />
          </a>
          <button
            ref={menuButtonRef}
            className="focus:outline-none focus:ring-2 focus:ring-white/50 p-2 hover:bg-gray-900 rounded-lg transition-colors flex items-center justify-center"
            onClick={handleMenuToggle}
            onKeyDown={handleKeyDown}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
        </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/80 backdrop-blur-md px-4 py-4 space-y-2 sm:space-y-3 border-t border-gray-800 w-full"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-3">
              <Link 
                ref={firstMenuItemRef}
                href="/" 
                onClick={handleMenuClose} 
                className="relative flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium py-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:rounded after:absolute after:bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
              <HomeIcon />
              <span>Home</span>
            </Link>
            <Link 
              href="/vehicles" 
              onClick={handleMenuClose} 
              className="relative flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium py-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:rounded after:absolute after:bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              <VehiclesIcon />
              <span>Vehicles</span>
            </Link>
            <Link 
              href="/about" 
              onClick={handleMenuClose} 
              className="relative flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium py-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:rounded after:absolute after:bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              <AboutIcon />
              <span>About</span>
            </Link>
            <Link 
              href="/contact" 
              onClick={handleMenuClose} 
              className="relative flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium py-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:rounded after:absolute after:bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              <ContactIcon />
              <span>Contact</span>
            </Link>
          </div>
          
          {/* Mobile Call and Email */}
          <div className="pt-4 border-t border-gray-800 space-y-3">
            <a
              href="tel:+919817826268"
              onClick={handleMenuClose}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/50 focus:rounded"
            >
              <PhoneIcon />
              <span>+91 98178 26268</span>
            </a>
            <a
              href="mailto:info@senzo.com"
              onClick={handleMenuClose}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/50 focus:rounded"
            >
              <EmailIcon />
              <span>info@senzo.com</span>
            </a>
          </div>
        </motion.nav>
        )}
      </AnimatePresence>
      </header>
    </>
  );
}