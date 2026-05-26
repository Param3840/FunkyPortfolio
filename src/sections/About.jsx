import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, BarChart3, Star } from 'lucide-react';

export default function About() {
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
    <section id="about" className="py-24 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading with Memphis Comic Style */}
        <div className="flex flex-col mb-16 items-start">
          <div className="flex items-center space-x-2 px-3.5 py-1.5 border-[2.5px] border-black bg-neon-cyan text-black font-cartoon text-[10px] sm:text-xs rounded-xl shadow-[3.5px_3.5px_0px_#000] rotate-[-1.5deg] mb-4">
            <Star className="w-3.5 h-3.5 fill-black" />
            <span>WHO IS THIS DEVELOPER? 👀</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-cartoon text-white leading-none">
            ARCHITECTING THE <span className="text-neon-yellow drop-shadow-[3px_3px_0px_#000]">FUNKY FUTURE</span>
          </h2>
          <div className="w-24 h-1.5 bg-black border-2 border-white mt-4 shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full" />
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left Column: Bio and Terminal Block */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div variants={itemVariants} className="space-y-4 text-white">
              <h3 className="text-xl md:text-2xl font-cartoon text-neon-pink drop-shadow-[2.5px_2.5px_0px_#000] tracking-wide mb-4">
                YO! I'M PARAMVEER KUMAR SINGH
              </h3>
              <p className="leading-relaxed text-sm md:text-base font-body font-bold text-gray-200">
                I am a passionate <strong className="text-neon-yellow">B.Tech Computer Science</strong> explorer with a sharp focus on engineering scalable full stack ecosystems, robust backend microservices, and smart AI automation.
              </p>
              <p className="leading-relaxed text-sm md:text-base font-body font-bold text-gray-200">
                Rooted heavily in <strong className="text-neon-cyan">Data Structures &amp; Algorithms (DSA)</strong>, I engineer optimized algorithms in Java and C++, keeping computations ultra-clean and memory footprint minimal.
              </p>
            </motion.div>

            {/* Retro Brutalist JS Playbook Console */}
            <motion.div 
              variants={itemVariants}
              className="border-[3.5px] border-black bg-[#12142d] p-5 font-mono text-xs shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-2xl relative overflow-hidden"
            >
              {/* Retro Control bar */}
              <div className="flex items-center justify-between mb-4 border-b-[3px] border-black pb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-neon-pink border-[2px] border-black shadow-[1px_1px_0px_#000]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-neon-yellow border-[2px] border-black shadow-[1px_1px_0px_#000]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-neon-green border-[2px] border-black shadow-[1px_1px_0px_#000]" />
                </div>
                <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider">paramveer_profile.js 🎮</span>
              </div>
              
              <div className="space-y-1.5 leading-relaxed text-white font-body font-bold">
                <p><span className="text-neon-pink">const</span> dev = &#123;</p>
                <p className="pl-4">name: <span className="text-neon-cyan">'Paramveer Kumar Singh'</span>,</p>
                <p className="pl-4">role: <span className="text-neon-cyan">'Full Stack &amp; AI Architect'</span>,</p>
                <p className="pl-4">education: <span className="text-neon-cyan">'B.Tech Computer Science'</span>,</p>
                <p className="pl-4">coreGears: [<span className="text-neon-purple">'DSA'</span>, <span className="text-neon-purple">'Scalability'</span>, <span className="text-neon-purple">'AI APIs'</span>],</p>
                <p className="pl-4">solvingProblems: <span className="text-neon-pink">true</span>,</p>
                <p className="pl-4">favoriteStack: <span className="text-white/60">() =&gt;</span> &#123;</p>
                <p className="pl-8"><span className="text-neon-pink">return</span> <span className="text-neon-cyan">'React'</span> + <span className="text-neon-cyan">'Node.js'</span> + <span className="text-neon-cyan">'Gemini Pro'</span>;</p>
                <p className="pl-4">&#125;</p>
                <p>&#125;;</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Strengths Deck represented as colored neobrutalist cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Strength 1 - Yellow Neobrutalist */}
            <motion.div variants={itemVariants}>
              <div className="border-[3.5px] border-black bg-neon-yellow text-black p-5 rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_rgba(0,0,0,1)] transition-all duration-200">
                <div className="w-12 h-12 rounded-xl border-[2.5px] border-black bg-black flex items-center justify-center text-neon-yellow mb-4 shadow-[2px_2px_0px_#000]">
                  <Code2 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="text-base font-cartoon uppercase tracking-wider mb-2">
                  DSA Foundation
                </h4>
                <p className="text-xs font-body font-bold leading-relaxed opacity-95">
                  Strong analytical algorithms base in Java and C++. Optimizing calculation cycles, memory structures, and database keys.
                </p>
              </div>
            </motion.div>

            {/* Strength 2 - Pink Neobrutalist */}
            <motion.div variants={itemVariants}>
              <div className="border-[3.5px] border-black bg-neon-pink text-white p-5 rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_rgba(0,0,0,1)] transition-all duration-200">
                <div className="w-12 h-12 rounded-xl border-[2.5px] border-black bg-black flex items-center justify-center text-neon-pink mb-4 shadow-[2px_2px_0px_#000]">
                  <Cpu className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="text-base font-cartoon uppercase tracking-wider mb-2">
                  Full Stack Apps
                </h4>
                <p className="text-xs font-body font-bold leading-relaxed opacity-95">
                  Developing robust responsive portals (React, Web + Mobile Native) powered by scalable Express gateways and Socket servers.
                </p>
              </div>
            </motion.div>

            {/* Strength 3 - Cyan Neobrutalist */}
            <motion.div variants={itemVariants}>
              <div className="border-[3.5px] border-black bg-neon-cyan text-black p-5 rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_rgba(0,0,0,1)] transition-all duration-200">
                <div className="w-12 h-12 rounded-xl border-[2.5px] border-black bg-black flex items-center justify-center text-neon-cyan mb-4 shadow-[2px_2px_0px_#000]">
                  <Database className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="text-base font-cartoon uppercase tracking-wider mb-2">
                  Smart AI Gears
                </h4>
                <p className="text-xs font-body font-bold leading-relaxed opacity-95">
                  Fusing natural cognitive intelligence (Gemini Pro) and location mapping services (Geoapify + Google APIs) to automate tasks.
                </p>
              </div>
            </motion.div>

            {/* Strength 4 - Orange Neobrutalist */}
            <motion.div variants={itemVariants}>
              <div className="border-[3.5px] border-black bg-neon-orange text-black p-5 rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_rgba(0,0,0,1)] transition-all duration-200">
                <div className="w-12 h-12 rounded-xl border-[2.5px] border-black bg-black flex items-center justify-center text-neon-orange mb-4 shadow-[2px_2px_0px_#000]">
                  <BarChart3 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="text-base font-cartoon uppercase tracking-wider mb-2">
                  Secure Finance
                </h4>
                <p className="text-xs font-body font-bold leading-relaxed opacity-95">
                  Designing highly integrated transactional workflows via secure Razorpay checkout lines, stock lists, and operations consoles.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
