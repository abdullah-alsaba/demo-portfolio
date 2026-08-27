"use client";

import { ArrowUpRight, GraduationCap, Code, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const techPills = ["html", "css", "js", "react", "next", "node", "mongodb", "vscode"];

  const skillTiles = [
    { name: "HTML5", bg: "bg-[#145355]", textColor: "text-[#F97316]", label: "5" },
    { name: "CSS3", bg: "bg-[#F3A4B5]", textColor: "text-[#2563EB]", label: "3" },
    { name: "JavaScript", bg: "bg-[#FACC15]", textColor: "text-[#18181B]", label: "JS" },
    { name: "React", bg: "bg-[#424823]", textColor: "text-[#38BDF8]", label: "⚛" },
    { name: "Next.js", bg: "bg-[#34D399]", textColor: "text-white", label: "N" },
    { name: "Node.js", bg: "bg-[#BE185D]", textColor: "text-white", label: "⬢" },
    { name: "MongoDB", bg: "bg-[#F472B6]", textColor: "text-[#18181B]", label: "🍃" },
    { name: "VS Code", bg: "bg-[#1E3A8A]", textColor: "text-white", label: "<>" },
    { name: "Firebase", bg: "bg-[#FEF3C7]", textColor: "text-[#F59E0B]", label: "🔥" },
    { name: "Vercel", bg: "bg-[#000000]", textColor: "text-white", label: "▲" },
  ];

  const educationTimeline = [
    {
      degree: "B.Sc. in Chemistry",
      year: "Jan 2022 – Present",
      institution: "Dhaka Central University",
      desc: "Expected Graduation: 2027. While pursuing my BSc in Chemistry, I discovered a strong interest in web development and started learning to code on my own, building full-stack projects alongside my studies.",
    },
    {
      degree: "HSC",
      year: "2021",
      institution: "Nishindara Fakir Uddin School and College",
      desc: "Completed Higher Secondary Certificate with focus on Science fundamentals.",
    },
    {
      degree: "Dakhil",
      year: "2019",
      institution: "Nasaratpur Dhontola Alim Madrasha",
      desc: "Secondary education with strong academic performance.",
    },
  ];

  const workExperience = [
    {
      title: "Computer Lab Assistant (Part-Time)",
      company: "Faisal's Commerce Lab",
      location: "Dhaka, Bangladesh",
      period: "Jan 2025 – Jan 2026",
      points: [
        "Prepared and formatted educational documents, question papers, student records, certificates, and structured spreadsheets using Microsoft Word and Excel with consistent accuracy.",
        "Communicated with teachers and students to collect information, prepare required documents, and support daily academic activities.",
        "Handled document typing, scanning, and basic image/document editing using Photoshop while maintaining organized digital files.",
      ],
    },
  ];

  const coreSkills = [
    { title: "MERN Stack", desc: "MongoDB, Express.js, React, Node.js, and full-stack application development" },
    { title: "REST API Design", desc: "Building and structuring RESTful APIs with Express.js and Node.js" },
    { title: "Authentication (JWT / OAuth)", desc: "Secure auth flows including JWT-protected routes and Google OAuth" },
    { title: "MongoDB Schema Design", desc: "Designing data models and relationships for scalable applications" },
    { title: "Problem Solving (DSA)", desc: "Data Structures & Algorithms practice on LeetCode for efficient solutions" },
    { title: "Deployment & Hosting", desc: "Shipping web applications on Vercel, Netlify, Render, and Railway" },
    { title: "Tailwind CSS & UI", desc: "Utility-first styling, custom components, and responsive mobile layouts" },
    { title: "Developer Tools", desc: "VS Code, Firebase, Git/GitHub, and modern development workflows" },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#ECE8E1] border-t border-[#DCD8D0]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Top Eyebrow Tag */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#EC4899]"></span>
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#18181B] uppercase">
            Experience & Education
          </span>
        </div>

        {/* Section Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-end mb-10 sm:mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#18181B] leading-[1.05]">
              Explore my <br className="hidden sm:inline" />
              Journey
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end">
            <p className="text-xs sm:text-sm md:text-base text-[#18181B]/75 leading-relaxed max-w-md lg:text-right mb-3 sm:mb-4">
              Building full-stack web applications, optimizing user experiences, and mastering modern development technologies along with Data Structures & Algorithms.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#18181B] border-b-2 border-[#18181B] pb-0.5 hover:opacity-75 transition-opacity min-h-[36px]"
            >
              <span>Book a call</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>

        {/* Main Section Content */}
        <div className="pt-2 sm:pt-4 space-y-10 sm:space-y-12 md:space-y-16">
          
          {/* 1. Work Experience Block */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#18181B] flex items-center gap-2">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#18181B]" />
                  <span>Work Experience</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#18181B]/60 font-mono mt-1">
                  Professional Journey
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {workExperience.map((job, idx) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-[#E2DDD3] shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                    {/* Left: Logo Tiles & Meta */}
                    <div className="lg:col-span-5 space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-5 gap-2 sm:gap-3 max-w-[220px] sm:max-w-xs">
                        {skillTiles.slice(0, 5).map((tile, i) => (
                          <motion.div
                            key={tile.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                            className={`aspect-square rounded-xl sm:rounded-2xl ${tile.bg} flex items-center justify-center shadow-md`}
                            title={tile.name}
                          >
                            <span className={`text-sm sm:text-lg md:text-xl font-extrabold ${tile.textColor}`}>
                              {tile.label}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      <div>
                        <p className="text-base sm:text-lg font-bold text-[#18181B]">{job.company}</p>
                        <p className="text-xs sm:text-sm font-semibold text-[#18181B]/60">{job.period}</p>
                      </div>
                    </div>

                    {/* Right: Details */}
                    <div className="lg:col-span-7">
                      {/* Tech Pills */}
                      <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 mb-3 sm:mb-5">
                        {techPills.map((pill) => (
                          <span
                            key={pill}
                            className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-[#18181B] text-white text-[10px] sm:text-xs font-semibold rounded-md sm:rounded-lg lowercase tracking-wide"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-[#18181B] mb-3 sm:mb-4">
                        {job.title}
                      </h4>

                      <ul className="space-y-2 sm:space-y-3">
                        {job.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#18181B]/85 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#18181B] mt-1.5 sm:mt-2 shrink-0"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 2. Skill Tiles & Core Competencies Block */}
          <div className="pt-4 sm:pt-6 border-t border-[#DCD8D0]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#18181B] flex items-center gap-2">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-[#18181B]" />
                  <span>Technical Skills & Stack</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#18181B]/60 font-mono mt-1">
                  Full Stack Expertise
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
              {/* Skill Tiles */}
              <div className="lg:col-span-5 grid grid-cols-5 gap-2 sm:gap-3">
                {skillTiles.map((tile, idx) => (
                  <motion.div
                    key={tile.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className={`relative aspect-square rounded-xl sm:rounded-2xl ${tile.bg} flex items-center justify-center shadow-md hover:scale-105 transition-transform`}
                    title={tile.name}
                  >
                    <span className={`text-sm sm:text-lg md:text-2xl font-extrabold ${tile.textColor}`}>
                      {tile.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Skill Cards Grid */}
              <div className="lg:col-span-7 bg-[#E6E1D7]/70 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-[#D8D2C5]">
                <h4 className="text-base sm:text-lg font-bold text-[#18181B] mb-3 sm:mb-4">
                  Core Skills & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {coreSkills.map((skill) => (
                    <div key={skill.title} className="p-3 sm:p-3.5 bg-white/70 rounded-lg sm:rounded-xl border border-[#DCD8D0]">
                      <h5 className="text-xs sm:text-sm font-bold text-[#18181B] mb-1">{skill.title}</h5>
                      <p className="text-[11px] sm:text-xs text-[#18181B]/75 leading-relaxed">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Educational Journey Block */}
          <div id="education" className="pt-4 sm:pt-6 border-t border-[#DCD8D0]">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#18181B] flex items-center gap-2 mb-1.5 sm:mb-2">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#18181B]" />
                <span>Educational Journey</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#18181B]/75 max-w-2xl">
                Developing strong software development fundamentals and full-stack expertise alongside academic pursuits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {educationTimeline.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#E2DDD3] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-[10px] sm:text-xs font-bold font-mono px-2 sm:px-2.5 py-0.5 bg-[#ECE8E1] text-[#18181B] rounded-md">
                        {edu.year}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#18181B] mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-[11px] sm:text-xs font-semibold text-[#18181B]/60 mb-2 sm:mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#18181B]/75 leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
