"use client";

import { Github, ArrowUpRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      id: "01",
      title: "SportNest",
      category: "Full-Stack Booking Platform",
      period: "Jul 2026 – Aug 2026",
      desc: "Built a full-stack sports facility booking platform enabling users to search, filter, and book facilities by date/time, with owner-managed listings and JWT-based authentication via HttpOnly cookies and Express middleware. Developed an Express.js REST API with 8 endpoints for facility and booking CRUD, search/filtering, and cancellation, using a normalized MongoDB schema across 3 collections (Facility, Booking, User).",
      achievements: [
        "Achieved an 86 Lighthouse Performance score (1.2s First Contentful Paint)",
        "Verified full mobile responsiveness (viewport, layout, touch targets) via Bing Mobile-Friendliness Test",
      ],
      liveUrl: "https://sportnest-teal.vercel.app/",
      clientGithub: "https://github.com/abdullah-alsaba/SportNest-client",
      serverGithub: "https://github.com/abdullah-alsaba/SportNest-server",
      detailsUrl: "/projects/sportnest.html",
      tags: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Better Auth", "OAuth", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: "02",
      title: "SkillSphere",
      category: "Online Learning Platform",
      period: "May 2026 – Aug 2026",
      desc: "Developed a responsive online learning platform using Next.js and React with reusable components, dynamic content rendering, and a structured component-based architecture. Implemented responsive educational content interfaces and deployed the application on Vercel using a production-ready Next.js setup.",
      achievements: [],
      liveUrl: "https://skillsphere-omega-neon.vercel.app/",
      githubUrl: "https://github.com/abdullah-alsaba/SkillSphereb",
      detailsUrl: "/projects/skillsphere.html",
      tags: ["Next.js", "React.js", "JavaScript", "HTML5", "CSS3"],
    },
    {
      id: "03",
      title: "Personal Portfolio Website",
      category: "Portfolio Site",
      period: "Feb 2026 – Aug 2026",
      desc: "Designed and developed a responsive personal portfolio from scratch using vanilla HTML, CSS, and JavaScript, featuring custom interactions, smooth section transitions, and a custom cursor. Achieved perfect 100/100 Lighthouse scores in Accessibility, Best Practices, and SEO, and verified full mobile responsiveness (Bing Mobile-Friendliness Test) with SEO and Open Graph metadata for discoverability.",
      achievements: [
        "Perfect 100/100 Lighthouse scores in Accessibility, Best Practices, and SEO",
        "Full mobile responsiveness verified via Bing Mobile-Friendliness Test",
        "SEO and Open Graph metadata for maximum discoverability",
      ],
      liveUrl: "https://abdulla.pro.bd/",
      githubUrl: "https://github.com/abdullah-alsaba/ABDULLA-AL-SABA",
      detailsUrl: "/projects/portfolio.html",
      tags: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      id: "04",
      title: "NexaFlow",
      category: "Productivity Web App",
      period: "2026",
      desc: "A modern productivity and workflow management web app called NexaFlow. Designed to improve task organization and workflow efficiency with a clean UI and smooth UX.",
      achievements: [],
      liveUrl: "https://nexaflow-by-saba.netlify.app/",
      githubUrl: "https://github.com/abdullah-alsaba/nexaflow",
      detailsUrl: "/projects/nexaflow.html",
      tags: ["Next.js", "React", "Tailwind CSS"],
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#ECE8E1] border-t border-[#DCD8D0]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#18181B] uppercase mb-1.5 sm:mb-2">
              Selected Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#18181B] leading-[1.05]">
              What I've built
            </h2>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-[#18181B]/70 max-w-md">
            Hand-crafted full-stack web applications and interactive interfaces built with precision, clean architecture, and modern UX principles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-8 border border-[#E2DDD3] shadow-sm md:shadow-md hover:shadow-lg md:hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Number & Category */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#18181B]/30 group-hover:text-[#18181B] transition-colors">
                    {project.id}
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-2 sm:px-3 py-0.5 sm:py-1 bg-[#ECE8E1] text-[#18181B] rounded-full">
                      {project.category}
                    </span>
                    {project.period && (
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#18181B]/50 mt-1 sm:mt-1.5">
                        {project.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] mb-2 sm:mb-3 group-hover:translate-x-0.5 sm:group-hover:translate-x-1 transition-transform leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#18181B]/75 leading-relaxed mb-3 sm:mb-4 font-normal">
                  {project.desc}
                </p>

                {/* Achievements */}
                {project.achievements && project.achievements.length > 0 && (
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#18181B]/85 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-[#18181B] mt-1 sm:mt-1.5 shrink-0"></span>
                        <span className="font-medium">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-2.5 py-0.5 bg-[#F4F1EA] text-[#18181B]/80 text-[10px] sm:text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions Row */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-[#ECE8E1]">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#18181B] hover:opacity-75 transition-opacity min-h-[36px]"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#18181B]/70 hover:text-[#18181B] transition-colors min-h-[36px]"
                    >
                      <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.clientGithub && (
                    <a
                      href={project.clientGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#18181B]/70 hover:text-[#18181B] transition-colors min-h-[36px]"
                    >
                      <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>Client</span>
                    </a>
                  )}

                  {project.serverGithub && (
                    <a
                      href={project.serverGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#18181B]/70 hover:text-[#18181B] transition-colors min-h-[36px]"
                    >
                      <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>Server</span>
                    </a>
                  )}

                  {project.detailsUrl && (
                    <a
                      href={project.detailsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#18181B]/60 hover:text-[#18181B] transition-colors sm:ml-auto min-h-[36px]"
                    >
                      <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>View Details</span>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
