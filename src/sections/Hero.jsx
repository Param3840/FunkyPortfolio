import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  const handleScrollClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.slice(1));
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Bold Memphis Typographic Headers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Retro Polaroid Greeting Sticker */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center space-x-2 px-4 py-2 border-[3.5px] border-black bg-neon-yellow text-black font-cartoon font-extrabold text-xs sm:text-sm rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8 rotate-[-3deg] hover:rotate-[3deg] transition-transform duration-300"
          >
            <Sparkles className="w-4 h-4 text-black animate-pulse" />
            <span>GREETINGS HUMANS! 👾</span>
          </motion.div>
          
          {/* Massive Funky Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-cartoon leading-[1.05] tracking-tight mb-8 text-white text-stroke"
          >
            PARAMVEER <br />
            <span className="text-neon-yellow drop-shadow-[5px_5px_0px_#000]">KUMAR</span> <br />
            <span className="text-neon-pink drop-shadow-[5px_5px_0px_#000]">SINGH</span>
          </motion.h1>

          {/* Dynamic Retro Badge Tags */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-2.5 mb-8"
          >
            <span className="px-3.5 py-1.5 rounded-xl border-[2.5px] border-black bg-neon-cyan text-black font-cartoon text-[10px] sm:text-xs shadow-[2.5px_2.5px_0px_#000] rotate-[1.5deg] hover:rotate-0 transition-transform">
              🚀 FULL STACK DEVELOPER
            </span>
            <span className="px-3.5 py-1.5 rounded-xl border-[2.5px] border-black bg-neon-orange text-black font-cartoon text-[10px] sm:text-xs shadow-[2.5px_2.5px_0px_#000] rotate-[-2deg] hover:rotate-0 transition-transform">
              🧠 AI APP MAESTRO
            </span>
            <span className="px-3.5 py-1.5 rounded-xl border-[2.5px] border-black bg-neon-green text-black font-cartoon text-[10px] sm:text-xs shadow-[2.5px_2.5px_0px_#000] rotate-[1.2deg] hover:rotate-0 transition-transform">
              ☕ DSA WORKER
            </span>
          </motion.div>

          {/* Dynamic Retro Box Slogan */}
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-white font-bold leading-relaxed max-w-xl mb-10 border-[3px] border-black bg-black/50 p-5 rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] tracking-wide font-body"
          >
            I am a B.Tech Computer Science student building interactive, funky digital playfields powered by MERN stacks, Gemini Pro intelligence matrices, and robust transactional backends.
          </motion.p>

          {/* Action Callouts */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-5 mb-10 w-full sm:w-auto"
          >
            <a 
              href="#projects"
              onClick={(e) => handleScrollClick(e, '#projects')}
              className="relative w-full sm:w-auto px-8 py-4.5 rounded-2xl border-[3px] border-black bg-neon-yellow text-black font-cartoon text-sm tracking-wider flex items-center justify-center space-x-2.5 hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-0 active:translate-y-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <span>EXPLORE WORK 📂</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </a>

            <a 
              href="#contact"
              onClick={(e) => handleScrollClick(e, '#contact')}
              className="w-full sm:w-auto px-8 py-4.5 rounded-2xl border-[3px] border-black bg-neon-pink text-white font-cartoon text-sm tracking-wider flex items-center justify-center space-x-2 hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-0 active:translate-y-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <span>PING ME! 💬</span>
            </a>
          </motion.div>
          
          {/* Quick social chips */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center space-x-4 z-10"
          >
            <a 
              href="https://github.com/Param3840" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 border-[3px] border-black bg-neon-cyan rounded-xl flex items-center justify-center text-black shadow-[3px_3px_0px_#000] hover:translate-y-[-2px] active:translate-y-0 transition-all duration-200"
              aria-label="GitHub Profile Link"
            >
              <svg className="w-5.5 h-5.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/param3840" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 border-[3px] border-black bg-neon-purple rounded-xl flex items-center justify-center text-black shadow-[3px_3px_0px_#000] hover:translate-y-[-2px] active:translate-y-0 transition-all duration-200"
              aria-label="LinkedIn Profile Link"
            >
              <svg className="w-5.5 h-5.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="mailto:paramveersingh240303@gmail.com" 
              className="w-12 h-12 border-[3px] border-black bg-neon-pink rounded-xl flex items-center justify-center text-black shadow-[3px_3px_0px_#000] hover:translate-y-[-2px] active:translate-y-0 transition-all duration-200"
              aria-label="Send Mail"
            >
              <Mail className="w-5.5 h-5.5 stroke-[2.5]" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual Taped Polaroid Frame hosting developer SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.175, 0.885, 0.32, 1.275] }}
          className="lg:col-span-5 flex justify-center z-10 relative"
        >
          {/* Rotating neobrutalist polaroid container */}
          <div className="relative rotate-[3deg] hover:rotate-0 transition-all duration-500">
            
            {/* Washi Tape Accent overlay */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-32 h-9 bg-neon-yellow border-[3px] border-black -rotate-3 z-20 shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center justify-center font-cartoon text-[11px] text-black">
              TAPED ON! 📌
            </div>

            {/* Polaroid frame */}
            <div className="border-[3.5px] border-black bg-white p-4 pb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl w-full max-w-[340px] flex flex-col items-center">
              
              {/* Photo Area with Dev Illustration */}
              <div className="w-full aspect-square border-[3.5px] border-black bg-neon-orange rounded-xl overflow-hidden relative flex flex-col items-center justify-center">
                
                {/* Comic Halftone background overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_2px,transparent_2px)] bg-[size:12px_12px] opacity-40 pointer-events-none" />

                {/* Animated developer drawing SVG */}
                <svg className="w-4/5 h-4/5 z-10 relative text-black" viewBox="0 0 200 200" fill="none">
                  {/* Face outline */}
                  <path d="M60 80 Q100 170 140 80" stroke="black" strokeWidth="8" strokeLinecap="round" fill="#facc15" />
                  
                  {/* Ears */}
                  <circle cx="50" cy="100" r="12" stroke="black" strokeWidth="6" fill="#facc15" />
                  <circle cx="150" cy="100" r="12" stroke="black" strokeWidth="6" fill="#facc15" />

                  {/* Funky Sunglasses */}
                  <rect x="52" y="80" width="42" height="28" rx="10" stroke="black" strokeWidth="8" fill="black" />
                  <rect x="106" y="80" width="42" height="28" rx="10" stroke="black" strokeWidth="8" fill="black" />
                  <line x1="94" y1="90" x2="106" y2="90" stroke="black" strokeWidth="8" />
                  
                  {/* Sunglass reflection streaks */}
                  <line x1="60" y1="88" x2="72" y2="88" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  <line x1="114" y1="88" x2="126" y2="88" stroke="white" strokeWidth="3" strokeLinecap="round" />

                  {/* Funky spikey hair */}
                  <path d="M48 70 L60 40 L75 55 L90 35 L105 55 L120 35 L135 55 L150 40 L152 70 Z" stroke="black" strokeWidth="8" strokeLinejoin="round" fill="#ec4899" />

                  {/* Smirk Mouth */}
                  <path d="M85 135 Q100 145 115 135" stroke="black" strokeWidth="7" strokeLinecap="round" />

                  {/* Cool coding hoodie body */}
                  <path d="M45 160 C45 160 65 145 100 145 C135 145 155 160 155 160 L145 200 L55 200 Z" stroke="black" strokeWidth="8" fill="#3b82f6" strokeLinejoin="round" />
                  
                  {/* Laptop overlay */}
                  <rect x="70" y="155" width="60" height="40" rx="4" stroke="black" strokeWidth="6" fill="#1e293b" />
                  <polyline points="75,195 65,210 135,210 125,195" stroke="black" strokeWidth="6" fill="white" strokeLinejoin="round" />
                  <path d="M90 175 H110" stroke="#06b6d4" strokeWidth="5" strokeLinecap="round" className="animate-pulse" />
                </svg>

                {/* Star overlay stickers */}
                <motion.div 
                  className="absolute right-3 top-3 w-8 h-8 text-neon-yellow drop-shadow-[1.5px_1.5px_0px_#000]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="2.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </motion.div>

                {/* Floating plus sticker */}
                <motion.div 
                  className="absolute left-4 bottom-3 w-6 h-6 text-neon-cyan drop-shadow-[1.5px_1.5px_0px_#000]"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="square">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </motion.div>

              </div>

              {/* Polaroid Caption */}
              <div className="mt-5 text-center flex flex-col items-center">
                <span className="font-cartoon text-sm text-black tracking-widest uppercase">// STATUS: CODING ☕</span>
                <span className="font-body font-black text-xs text-black/50 mt-1 uppercase tracking-wider">STUDIO HOST // DEVPORTFOLIO</span>
              </div>

            </div>

            {/* Interactive wiggling star stickers outside the polaroid frame */}
            <motion.div 
              className="absolute -right-8 -bottom-6 w-12 h-12 text-neon-yellow drop-shadow-[2.5px_2.5px_0px_#000] hidden sm:block"
              animate={{ rotate: [-8, 8, -8], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
