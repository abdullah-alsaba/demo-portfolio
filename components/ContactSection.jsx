"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, AlertCircle, ArrowUpRight, Github, Mail, Linkedin, Twitter, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, success: false, error: "Please fill in all fields." });
      return;
    }

    setStatus({ loading: true, success: false, error: "" });

    try {
      const res = await fetch("https://formsubmit.co/ajax/abdullah.alsaba.dev@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Message from Portfolio Website",
        }),
      });

      if (res.ok) {
        setStatus({ loading: false, success: true, error: "" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: "Something went wrong. Please email directly at abdullah.alsaba.dev@gmail.com",
      });
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#ECE8E1] border-t border-[#DCD8D0]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Eyebrow Tag */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#F97316]"></span>
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#18181B] uppercase">
            Contact me
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Social Links */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#18181B] mb-4 sm:mb-6 leading-[1.05]">
              Let's Get in <br className="hidden sm:inline" />
              Touch
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#18181B]/75 mb-3 sm:mb-4 leading-relaxed">
              For collaboration, internships, or project inquiries, feel free to reach out. I typically respond within 24–48 hours.
            </p>

            <p className="text-xs sm:text-sm font-bold text-[#18181B] mb-4 sm:mb-6">
              Fill the form or follow on:
            </p>

            {/* Social Icons Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a
                href="https://github.com/abdullah-alsaba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E2DDD3] flex items-center justify-center text-[#18181B] hover:bg-[#18181B] hover:text-white transition-all shadow-sm"
                title="GitHub"
              >
                <Github className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/abdullah-alsaba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E2DDD3] flex items-center justify-center text-[#18181B] hover:bg-[#18181B] hover:text-white transition-all shadow-sm"
                title="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </a>

              <a
                href="https://x.com/abdulla_saba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E2DDD3] flex items-center justify-center text-[#18181B] hover:bg-[#18181B] hover:text-white transition-all shadow-sm"
                title="Twitter/X"
              >
                <Twitter className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </a>

              <a
                href="mailto:abdullah.alsaba.dev@gmail.com"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E2DDD3] flex items-center justify-center text-[#18181B] hover:bg-[#18181B] hover:text-white transition-all shadow-sm"
                title="Email"
              >
                <Mail className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </a>
            </div>

            {/* Resume & Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#E6E1D7] rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 border border-[#D8D2C5] flex items-center gap-3 sm:gap-4 md:gap-5 max-w-md shadow-sm"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 bg-[#18181B]">
                <Image
                  src="/profile/abdullaal.png"
                  alt="Abdulla Al Saba"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 56px, 80px"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-xs sm:text-sm md:text-sm font-bold text-[#18181B] mb-1 leading-snug">
                  Let's Build Something Great Together!
                </h4>
                <p className="text-[11px] sm:text-xs text-[#18181B]/70 leading-relaxed mb-2 sm:mb-3">
                  Check out my resume or send a message to get started on your next project.
                </p>
                <a
                  href="/Abdulla_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#18181B] underline hover:opacity-75 min-h-[28px]"
                >
                  <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>View Resume (PDF)</span>
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Clean White Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border border-[#E2DDD3] shadow-lg sm:shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#18181B]/70 mb-1.5 sm:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full pb-2.5 sm:pb-3 pt-0.5 sm:pt-1 border-b border-[#DCD8D0] bg-transparent text-[#18181B] focus:border-[#18181B] focus:outline-none text-sm sm:text-base transition-colors min-h-[44px]"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#18181B]/70 mb-1.5 sm:mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full pb-2.5 sm:pb-3 pt-0.5 sm:pt-1 border-b border-[#DCD8D0] bg-transparent text-[#18181B] focus:border-[#18181B] focus:outline-none text-sm sm:text-base transition-colors min-h-[44px]"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#18181B]/70 mb-1.5 sm:mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project…"
                  required
                  className="w-full pb-2.5 sm:pb-3 pt-0.5 sm:pt-1 border-b border-[#DCD8D0] bg-transparent text-[#18181B] focus:border-[#18181B] focus:outline-none text-sm sm:text-base transition-colors resize-none min-h-[100px] sm:min-h-[120px]"
                ></textarea>
              </div>

              {/* Status Notifications */}
              {status.error && (
                <div className="flex items-start sm:items-center gap-2 p-2.5 sm:p-3 bg-red-50 text-red-700 rounded-lg sm:rounded-xl text-[11px] sm:text-xs">
                  <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5 sm:mt-0" />
                  <span className="break-words">{status.error}</span>
                </div>
              )}

              {status.success && (
                <div className="flex items-start sm:items-center gap-2 p-2.5 sm:p-3 bg-emerald-50 text-emerald-700 rounded-lg sm:rounded-xl text-[11px] sm:text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5 sm:mt-0" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#787878] hover:bg-[#18181B] text-white font-bold rounded-lg sm:rounded-xl transition-colors duration-300 shadow-md disabled:opacity-50 min-h-[44px] text-sm sm:text-base"
              >
                {status.loading ? "Sending..." : "Submit"}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
