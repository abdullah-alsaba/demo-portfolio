"use client";

import Image from "next/image";
import { Globe, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#ECE8E1] border-t border-[#DCD8D0]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          <p className="text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[#18181B]/60 mb-1.5 sm:mb-2">
            Who I Am
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#18181B] leading-[1.1]">
            Crafting <br className="hidden sm:inline" />
            <em className="font-serif italic font-normal">meaningful</em> experiences.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-stretch">
          
          {/* Left Description + Curved Arrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-4 flex flex-col justify-between space-y-3 sm:space-y-4 order-1"
          >
            <p className="text-xs sm:text-sm md:text-base text-[#18181B]/80 leading-relaxed font-normal">
              I'm <strong className="font-bold text-[#18181B]">Abdulla Al Saba</strong>, a <strong className="font-bold text-[#18181B]">Full-Stack Developer</strong> who enjoys turning ideas into clean, responsive, and scalable web applications. What pulled me into programming was the slow realization that every website I used was logic and structure someone carefully put together, and I wanted to learn how to build that myself.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-[#18181B]/80 leading-relaxed font-normal">
              Since then, I've been building with <strong className="font-bold text-[#18181B]">MongoDB, Express.js, React, Node.js, Next.js, and Tailwind CSS</strong> across the full stack. Alongside project work, I practice Data Structures & Algorithms on <strong className="font-bold text-[#18181B]">LeetCode</strong> to keep my problem-solving fundamentals sharp.
            </p>

            {/* Decorative Curved SVG Arrow */}
            <div className="hidden lg:block w-28 sm:w-32 md:w-40 h-12 sm:h-14 md:h-16 text-[#18181B]/30 ml-2 sm:ml-4 pt-1 sm:pt-2">
              <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path
                  d="M10 20 Q 60 70 140 25"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M125 15 L145 25 L135 45"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </motion.div>

          {/* Middle Floating White Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 lg:col-span-4 flex justify-center order-2 my-1 sm:my-2 md:my-0"
          >
            <div className="w-full max-w-xs sm:max-w-sm bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg sm:shadow-xl border border-[#E2DDD3] flex flex-col items-start hover:shadow-2xl transition-shadow">
              {/* Globe Icon */}
              <div className="p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl bg-[#F5F2EB] text-[#18181B] mb-3 sm:mb-4 md:mb-6">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>

              {/* Large Stat Number */}
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight mb-1.5 sm:mb-2 md:mb-3">
                DSA Focused
              </span>

              {/* Stat Subtext */}
              <p className="text-[11px] sm:text-xs md:text-sm text-[#18181B]/75 leading-snug font-medium mb-3 sm:mb-4 md:mb-6">
                Practicing Data Structures & Algorithms daily on LeetCode to solve problems efficiently and write clean, optimized code.
              </p>

              {/* Inset Portrait Photo inside white card */}
              <div className="relative w-full aspect-square rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-[#ECE8E1]">
                <Image
                  src="/profile/abdullaal.png"
                  alt="Abdulla Al Saba Portrait"
                  fill
                  className="object-cover hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 480px) 85vw, (max-width: 640px) 75vw, (max-width: 1024px) 33vw, 320px"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column Bullet Feature Points */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1 lg:col-span-4 flex flex-col justify-center space-y-3 sm:space-y-5 lg:pl-4 lg:pl-6 order-3 mt-2 sm:mt-0"
          >
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#18181B] mb-1 sm:mb-2"></div>

            <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4">
              <div className="shrink-0 p-1 sm:p-1.5 md:p-2 rounded-full bg-[#18181B] text-white mt-0.5">
                <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
              </div>
              <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-[#18181B]/85 leading-relaxed font-normal">
                I care about writing code that's easy to reason about, not just code that works.
              </p>
            </div>

            <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4">
              <div className="shrink-0 p-1 sm:p-1.5 md:p-2 rounded-full bg-[#18181B] text-white mt-0.5">
                <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
              </div>
              <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-[#18181B]/85 leading-relaxed font-normal">
                Experienced in building RESTful APIs, JWT/OAuth auth flows, MongoDB data modeling, and shipping apps to Vercel, Netlify, Render, and Railway.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
