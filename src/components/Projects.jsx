import React from 'react';
import { motion } from 'framer-motion';
import { Github, Cpu, Globe, Box, Code2, Terminal, Mic, Users, Tractor, UserCircle, CloudSun } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Fruits Bounty E-Comm",
      desc: "Transformed complex E-commerce requirements into a polished frontend. Integrated Razorpay payment gateways with custom feedback loops and built a high-speed product catalog optimized for Core Web Vitals and SEO.",
      tags: ["React", "Razorpay SDK", "SEO", "Performance"],
      link: "https://fruit-bounty.vercel.app/",
      icon: <Box size={20} />,
      status: "LIVE_PROD",
      file: "storefront.jsx"
    },
    {
      title: "G-Crown Luxury",
      desc: "Focused on high-fidelity UI/UX, achieving pixel-perfect accuracy from Figma designs. Implemented advanced micro-interactions using Framer Motion to reflect a premium brand identity while maintaining optimized asset delivery.",
      tags: ["Figma-to-Code", "Framer Motion", "Luxury UI"],
      link: "https://g-crown.vercel.app/",
      icon: <Globe size={20} />,
      status: "UI_POLISHED",
      file: "brandStyles.css"
    },
    {
      title: "Personal Portfolio",
      desc: "Architected a dynamic MERN-stack portfolio featuring a custom CMS. Specialized in creating a fluid, responsive interface with high-end typography and interactive UI elements that highlight development milestones and technical skills.",
      tags: ["MERN", "Framer Motion", "CMS", "Tailwind"],
      link: "https://github.com/Vedantilame22/",
      icon: <UserCircle size={20} />,
      status: "STABLE",
      file: "portfolio.tsx"
    },
    {
      title: "AI Voice Agent",
      desc: "Architected a high-performance React interface featuring dynamic SVG voice-wave visualizations. Leveraged Web Speech API for real-time interaction and optimized component re-rendering for a low-latency experience.",
      tags: ["React", "Web Speech API", "SVG Animation"],
      link: "https://github.com/Vedantilame22/",
      icon: <Mic size={20} />,
      status: "AI_ACTIVE",
      file: "voiceEngine.tsx"
    },
    {
      title: "Farming Rental Portal",
      desc: "Engineered a mobile-first farming equipment portal focused on accessibility. Developed complex filtering systems and a custom-built booking calendar using Tailwind CSS to ensure an intuitive UX for diverse users.",
      tags: ["React", "Tailwind CSS", "AgriTech"],
      link: "https://github.com/Vedantilame22/",
      icon: <Tractor size={20} />,
      status: "PRODUCTION",
      file: "agriBooking.jsx"
    },
    {
      title: "Media Task & Attendance",
      desc: "Developed a centralized dashboard for workforce tracking. Specialized in crafting reusable UI components and implementing persistent state management with Redux to handle high-frequency data updates seamlessly.",
      tags: ["React", "Redux Toolkit", "Data Viz"],
      link: "https://github.com/Vedantilame22/",
      icon: <Users size={20} />,
      status: "DEPLOYED",
      file: "dashboard.js"
    },
    {
      title: "Employee Management",
      desc: "Led the frontend implementation of a multi-role RBAC system. Created a sophisticated dashboard architecture that dynamically renders views based on user permissions, emphasizing clean code and scalable structures.",
      tags: ["React", "RBAC", "Context API"],
      link: "https://github.com/Vedantilame22/Employee-Management",
      icon: <Cpu size={20} />,
      status: "STABLE_V2",
      file: "adminView.tsx"
    },
    {
      title: "Weather Web Application",
      desc: "Engineered a real-time weather tracker using vanilla JavaScript. Specialized in asynchronous programming and DOM manipulation to fetch data from OpenWeatherMap API and provide dynamic, location-based UI updates.",
      tags: ["JavaScript", "API Integration", "CSS3", "HTML5"],
      link: "https://github.com/Vedantilame22/",
      icon: <CloudSun size={20} />,
      status: "ACTIVE",
      file: "weatherApp.js"
    },
    {
      title: "Task Management Board",
      desc: "Engineered a minimalist productivity engine with a heavy focus on frontend interactivity. Built real-time UI synchronization and drag-and-drop logic for task transitions and state updates.",
      tags: ["MERN", "Interactivity", "Real-time UI"],
      link: "https://github.com/Vedantilame22/Task-Management-System",
      icon: <Code2 size={20} />,
      status: "ACTIVE_DEV",
      file: "kanbanLogic.js"
    }
  ];

  return (
    <section className="relative w-full bg-[#0B0E14] font-sans antialiased text-[#F0F6FC] py-20 lg:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#3FB950]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-[#F0F6FC]">
              Crafted <span className="text-[#3FB950]"> Projects</span>
            </h2>
          </div>
          <p className="max-w-md text-[#8B949E] text-sm lg:text-lg border-l border-[#3FB950]/30 pl-6 font-medium leading-relaxed">
            Showcasing engineered interfaces, scalable architectures, and user-centric solutions.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group flex flex-col rounded-xl bg-[#0D1117] border border-[#30363D] hover:border-[#3FB950]/40 transition-all duration-300 overflow-hidden shadow-2xl"
            >
              {/* VS Code Tab Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#161B22] border-b border-[#30363D]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="h-4 w-[1px] bg-[#30363D] mx-1" />
                  <div className="flex items-center gap-2">
                    <Terminal size={12} className="text-[#3FB950]" />
                    <span className="text-[10px] font-mono text-[#8B949E] group-hover:text-[#F0F6FC] transition-colors truncate max-w-[80px]">
                      {p.file}
                    </span>
                  </div>
                </div>
                <span className="text-[9px] font-mono bg-[#3FB950]/10 text-[#3FB950] px-1.5 py-0.5 rounded border border-[#3FB950]/20 font-bold">
                    {p.status}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-5">
                  <div className="p-2.5 bg-[#161B22] border border-[#30363D] text-[#3FB950] rounded-lg group-hover:border-[#3FB950]/30 transition-all">
                    {p.icon}
                  </div>
                  <div className="flex gap-2">
                    {/* Only GitHub icon remains for redirection */}
                    <a 
                      href={p.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      title="View Project"
                      className="p-2.5 bg-[#161B22] border border-[#30363D] hover:border-[#3FB950] rounded-lg transition-all text-[#8B949E] hover:text-[#3FB950]"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#F0F6FC] mb-3 group-hover:text-[#3FB950] transition-colors">
                  {p.title}
                </h3>
                
                <p className="text-[#8B949E] text-xs leading-relaxed mb-6  opacity-90 line-clamp-4">
                  
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono bg-[#161B22] border border-[#30363D] text-[#F0F6FC]/60 px-2 py-0.5 rounded group-hover:border-[#3FB950]/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;