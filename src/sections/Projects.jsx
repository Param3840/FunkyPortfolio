import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingBag, HeartPulse, MessagesSquare, ArrowRight, Star } from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'AQUAFINE',
    subtitle: 'PREMIUM SMART WATER PLATFORM',
    icon: <ShoppingBag className="w-5.5 h-5.5 text-black" />,
    description: 'A full-stack e-commerce and subscription system with React Native mobile applications and standalone dashboard controllers. Built with Razorpay transactional gates, JWT authentications, wishlist synchronisations, and Resend API mailing engines.',
    tech: ['React Native', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'JWT'],
    github: 'https://github.com/Param3840/AquafineApp',
    demo: '#',
    cardBg: 'bg-neon-cyan text-black',
    previewSvg: (
      <div className="w-full h-full bg-neon-cyan border-b-[3.5px] border-black flex items-center justify-center relative overflow-hidden">
        {/* Animated Water Ripple */}
        <motion.div 
          className="absolute w-20 h-20 rounded-full border-[3px] border-black flex items-center justify-center bg-white/20"
          animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute w-32 h-32 rounded-full border-[2.5px] border-black flex items-center justify-center"
          animate={{ scale: [1.2, 0.9, 1.2], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="text-3xl font-cartoon text-black drop-shadow-[2.5px_2.5px_0px_#fff] relative z-10">
          AQUA 💧
        </span>
      </div>
    )
  },
  {
    id: 2,
    title: 'MEDICAL AI',
    subtitle: 'AI-POWERED HEALTH ASSISTANT',
    icon: <HeartPulse className="w-5.5 h-5.5 text-black" />,
    description: 'AI disease predictive assistant mobile portal. Seamlessly integrates the Gemini Pro generative model for patient checks, Geoapify GIS coordinates for locating clinical care centers, and local medicine alert databases.',
    tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'Geoapify API'],
    github: 'https://github.com/Param3840/Smart-Medical-AI-Assistant---Backend-and-Frontend',
    demo: '#',
    cardBg: 'bg-neon-purple text-white',
    previewSvg: (
      <div className="w-full h-full bg-neon-purple border-b-[3.5px] border-black flex items-center justify-center relative overflow-hidden">
        {/* Animated Pulse Wave */}
        <svg className="absolute w-full h-24 text-black stroke-[3.5]" viewBox="0 0 200 100" preserveAspectRatio="none">
          <motion.path
            d="M0 50 Q 25 50 40 50 L 50 15 L 60 85 L 70 40 L 80 55 L 90 50 L 200 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="4.5"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
        <span className="text-3xl font-cartoon text-white drop-shadow-[2.5px_2.5px_0px_#000] relative z-10">
          MED-AI 🩺
        </span>
      </div>
    )
  },
  {
    id: 3,
    title: 'LOCAL MARKET',
    subtitle: 'PEER-TO-PEER TRANSACTIONS',
    icon: <MessagesSquare className="w-5.5 h-5.5 text-black" />,
    description: 'A transactional digital hub for local trading. Includes role-based buyer/seller dashboards, live multi-format shopping carts, local user wishlist trackers, media uploads, and real-time Socket.IO chat rooms.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS'],
    github: 'https://github.com/Param3840/Local-Market-Place',
    demo: '#',
    cardBg: 'bg-neon-orange text-black',
    previewSvg: (
      <div className="w-full h-full bg-neon-orange border-b-[3.5px] border-black flex items-center justify-center relative overflow-hidden">
        {/* Animated chat network */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <motion.div 
            className="w-16 h-16 rounded-full border-[3px] border-black border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div 
            className="w-28 h-28 rounded-full border-[3px] border-black border-dashed"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <span className="text-3xl font-cartoon text-black drop-shadow-[2.5px_2.5px_0px_#fff] relative z-10">
          MARKET 🛒
        </span>
      </div>
    )
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 items-start">
          <div className="flex items-center space-x-2 px-3.5 py-1.5 border-[2.5px] border-black bg-neon-yellow text-black font-cartoon text-[10px] sm:text-xs rounded-xl shadow-[3.5px_3.5px_0px_#000] rotate-[-1.5deg] mb-4">
            <Star className="w-3.5 h-3.5 fill-black" />
            <span>SELECTED MISSIONS 🚀</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-cartoon text-white leading-none">
            ENGINEERING <span className="text-neon-cyan drop-shadow-[3px_3px_0px_#000]">REAL GEARS</span>
          </h2>
          <div className="w-24 h-1.5 bg-black border-2 border-white mt-4 shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {PROJECTS_DATA.map((project, idx) => {
            const rot = idx % 2 === 0 ? 'rotate-[1.5deg]' : 'rotate-[-1.5deg]';
            return (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                className="group h-full"
              >
                {/* Neobrutalist taped comic panel layout */}
                <div className={`h-full border-[3.5px] border-black bg-[#12142d] rounded-3xl p-0 relative overflow-hidden flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_rgba(0,0,0,1)] hover:rotate-0 transition-all duration-300 ${rot}`}>
                  
                  <div>
                    {/* Washi Tape Accent overlay on card top border */}
                    <div className="absolute -top-3 left-6 w-20 h-6 bg-neon-yellow border-2 border-black -rotate-6 z-20 shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] flex items-center justify-center font-cartoon text-[8px] text-black">
                      CODE OK!
                    </div>

                    {/* Top Image Preview Frame */}
                    <div className="w-full h-44 overflow-hidden relative">
                      {project.previewSvg}
                    </div>

                    <div className="p-6">
                      {/* Header Details */}
                      <div className="flex items-center space-x-3.5 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-white border-[2.5px] border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-cartoon text-white tracking-wide">
                            {project.title}
                          </h3>
                          <p className="text-[10px] text-neon-yellow font-extrabold tracking-wider mt-0.5 font-mono">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-body font-bold">
                        {project.description}
                      </p>

                      {/* Tech badging pills */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span 
                            key={t}
                            className="px-2.5 py-1 rounded-lg bg-black border-2 border-black text-[9px] font-cartoon text-white shadow-[1.5px_1.5px_0px_rgba(255,255,255,0.2)] tracking-wider"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action Cards with neobrutalist borders */}
                  <div className="px-6 py-4.5 mt-4 border-t-[3px] border-black bg-black/30 flex items-center justify-between">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-xs font-cartoon text-white hover:text-neon-cyan transition-colors"
                    >
                      <span>SOURCE CODE ⚡</span>
                    </a>
                    
                    <a 
                      href={project.demo}
                      className="flex items-center space-x-1 text-xs font-cartoon text-neon-yellow hover:text-white transition-colors"
                    >
                      <span>DEMO 🔗</span>
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
