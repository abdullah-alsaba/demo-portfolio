"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      handle: "@chasingprofit",
      country: "United Kingdom",
      avatar: "🇬🇧",
      review: "Abdulla delivered an exceptionally clean Next.js web app ahead of schedule. Great communication, high code quality, and super responsive design!",
      rating: 5,
    },
    {
      handle: "@lukasdrbohlav",
      country: "Czech Republic",
      avatar: "🇨🇿",
      review: "Top-rated work! He transformed our Figma design specs into pixel-perfect React components with excellent SEO structure.",
      rating: 5,
    },
    {
      handle: "@madlands",
      country: "Paraguay",
      avatar: "🇵🇾",
      review: "Very knowledgeable with full-stack development, MongoDB, and Express APIs. Solved complex authentication flows effortlessly.",
      rating: 5,
    },
    {
      handle: "@meireag",
      country: "Brazil",
      avatar: "🇧🇷",
      review: "Amazing experience working with Abdulla! Fast delivery, clean code, and great attention to detail.",
      rating: 5,
    },
    {
      handle: "@thelink77",
      country: "United States",
      avatar: "🇺🇸",
      review: "Highly professional developer. Helped optimize our site's loading speed and user experience drastically.",
      rating: 5,
    },
    {
      handle: "@ricvezza",
      country: "Spain",
      avatar: "🇪🇸",
      review: "Outstanding quality and support! Will definitely collaborate on future full-stack projects.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#ECE8E1] border-t border-[#DCD8D0]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Eyebrow Tag */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#8B5CF6]"></span>
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#18181B] uppercase">
            Testimonials
          </span>
        </div>

        {/* Header Title */}
        <div className="mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#18181B] leading-[1.05]">
            Hear from <br className="hidden sm:inline" />
            My Clients
          </h2>
        </div>

        {/* Testimonials Stack / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#E2DDD3] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-0.5 sm:gap-1 text-amber-500 mb-3 sm:mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-[#18181B]/80 leading-relaxed mb-5 sm:mb-6 italic">
                  "{item.review}"
                </p>
              </div>

              {/* Client Info Bar */}
              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-[#F0ECE1]">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F3EFE6] flex items-center justify-center text-sm sm:text-lg border border-[#E2DDD3]">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#18181B]">
                      {item.handle}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-[#18181B]/60">
                      {item.country}
                    </p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="text-[10px] sm:text-xs font-semibold text-[#18181B] hover:underline flex items-center gap-1 min-h-[32px]"
                >
                  <span>Read review</span>
                  <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
