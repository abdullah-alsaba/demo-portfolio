"use client";

import Image from "next/image";
import { ArrowDown, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-16 flex items-center overflow-hidden bg-[#ECE8E1]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-center">
          
          {/* Left Vertical Ribbon Branding */}
          <div className="hidden xl:flex lg:col-span-1 flex-col justify-between items-center h-[400px] lg:h-[500px] border-r border-[#18181B]/15 pr-4 lg:pr-6">
            <span className="text-[10px] lg:text-xs uppercase tracking-widest text-[#18181B]/60 writing-mode-vertical font-mono">
              Create Digitally
            </span>
            <div className="flex flex-col items-center gap-3 lg:gap-4">
              <div className="w-[1px] h-12 lg:h-16 bg-[#18181B]/20"></div>
              <span className="text-[10px] lg:text-xs font-mono font-medium text-[#18181B]/60">
                2026
              </span>
            </div>
          </div>

          {/* Center Main Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1 lg:col-span-7 xl:col-span-6 flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Stats Row */}
            <div className="flex items-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
              <div>
                <div className="flex items-baseline">
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#18181B] mr-0.5">+</span>
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#18181B]">
                    3
                  </span>
                </div>
                <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#18181B]/70 font-medium mt-0.5">
                  Full-Stack Projects
                </p>
              </div>

              <div>
                <div className="flex items-baseline">
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#18181B] mr-0.5">+</span>
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#18181B]">
                    1
                  </span>
                </div>
                <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#18181B]/70 font-medium mt-0.5">
                  Year of Work Experience
                </p>
              </div>
            </div>

            {/* Giant "Hello" Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-[#18181B] leading-[0.9] sm:leading-none mb-3 sm:mb-4 md:mb-6">
              Hello
            </h1>

            {/* Role Title */}
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#18181B] mb-2 sm:mb-3 leading-snug">
              I'm Abdulla Al Saba, Full-Stack Developer & MERN Specialist
            </h2>

            {/* Subtext Paragraph */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#18181B]/75 leading-relaxed max-w-xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 font-normal">
              I build lightning-fast websites with Next.js and craft scalable full-stack applications using MongoDB, Express.js, React, and Node.js. I practice Data Structures & Algorithms on LeetCode to keep my problem-solving skills sharp.
            </p>

            {/* CTA Buttons Link Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold text-[#18181B] hover:opacity-75 transition-opacity group min-h-[44px]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="/Abdulla_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] sm:text-xs md:text-sm font-bold text-white bg-[#18181B] px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-xl hover:bg-[#333] transition-colors shadow-sm min-h-[44px]"
              >
                <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Hero Developer Portrait Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-1 lg:col-span-5 xl:col-span-5 relative flex justify-center order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0"
          >
            <div className="relative w-full max-w-[220px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[440px] aspect-[4/5] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl border-3 sm:border-4 border-white/60 bg-[#D8D3CA]">
              <Image
                src="/profile/saba.png"
                alt="Abdulla Al Saba Portrait"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 480px) 75vw, (max-width: 768px) 70vw, (max-width: 1024px) 40vw, 440px"
              />
              <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#18181B]"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
