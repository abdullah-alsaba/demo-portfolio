"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About Me", href: "#about" },
    { name: "Portfolio", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#ECE8E1]/90 backdrop-blur-md border-b border-[#DCD8D0] py-2.5 sm:py-3 shadow-sm"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none min-h-[44px]"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-[#18181B]/20 group-hover:scale-105 transition-transform bg-[#D9D4CB] shrink-0">
              <Image
                src="/profile/abdullaal.png"
                alt="Abdulla Al Saba"
                fill
                className="object-cover"
                sizes="36px"
                priority
              />
            </div>
            <span className="font-semibold text-sm sm:text-base md:text-lg tracking-tight text-[#18181B]">
              A.Al Saba
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs md:text-sm font-medium text-[#18181B]/80 hover:text-[#18181B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#18181B] hover:after:w-full after:transition-all min-h-[36px] inline-flex items-center"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call Action & Resume */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5">
            <a
              href="/Abdulla_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[#18181B] border border-[#18181B]/30 px-2.5 md:px-3 py-1.5 rounded-lg hover:bg-[#18181B] hover:text-white transition-all min-h-[36px] inline-flex items-center"
            >
              Resume PDF
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[#18181B] border-b-2 border-[#18181B] pb-0.5 hover:opacity-75 transition-opacity min-h-[36px]"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#18181B] hover:bg-[#18181B]/5 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#ECE8E1] border-b border-[#DCD8D0] px-3 sm:px-4 pt-3 sm:pt-4 pb-5 sm:pb-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-1 sm:space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base sm:text-lg font-medium text-[#18181B] hover:pl-2 transition-all py-2.5 border-b border-[#18181B]/10 min-h-[44px] flex items-center"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 sm:pt-4 flex flex-col gap-3 sm:gap-4">
                <a
                  href="/Abdulla_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#18181B] border border-[#18181B]/30 px-3 sm:px-4 py-2.5 rounded-lg hover:bg-[#18181B] hover:text-white transition-all text-center min-h-[44px] inline-flex items-center justify-center"
                >
                  Resume PDF
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-between text-base sm:text-lg font-semibold text-[#18181B] border-b-2 border-[#18181B] pb-0.5 min-h-[44px]"
                >
                  <span>Book a call</span>
                  <ArrowUpRight className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
