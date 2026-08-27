"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-6 sm:py-8 bg-[#ECE8E1] border-t border-[#DCD8D0] text-[#18181B]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          
          <p className="text-[11px] sm:text-xs md:text-sm text-[#18181B]/70 font-medium text-center sm:text-left">
            Abdulla Al Saba — © {new Date().getFullYear()} All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs md:text-sm font-semibold">
            <a
              href="https://github.com/abdullah-alsaba"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline min-h-[32px] inline-flex items-center"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-alsaba/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline min-h-[32px] inline-flex items-center"
            >
              LinkedIn
            </a>
            <a
              href="mailto:abdullah.alsaba.dev@gmail.com"
              className="hover:underline min-h-[32px] inline-flex items-center"
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#18181B]/10 hover:bg-[#18181B] hover:text-white transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
