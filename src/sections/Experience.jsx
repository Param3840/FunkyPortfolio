import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Cpu, Compass, Landmark, Star } from 'lucide-react';

const JOURNEY_DATA = [
  {
    phase: 'Phase 01 // Spark',
    duration: 'LOGICAL ROOTS',
    title: 'FIRST LINES & CORE CONCEPTS',
    icon: <Terminal className="w-5.5 h-5.5 text-black" />,
    description: 'Began with simple scripts and basic computer logic. Mastered programming syntax, iterative logic loops, functional scopes, and started building a solid mental compiler.',
    cardBg: 'bg-neon-cyan text-black',
    nodeColor: 'bg-neon-cyan',
    number: '01'
  },
  {
    phase: 'Phase 02 // Algorithms',
    duration: 'DSA MASTERY',
    title: 'SOLVING BIG COMPUTATIONS',
    icon: <Database className="w-5.5 h-5.5 text-black" />,
    description: 'Deep-dived into core computer science algorithms. Hard-coded heaps, trees, linked lists, dynamic programming graphs in Java and C++ to optimize execution cycles.',
    cardBg: 'bg-neon-pink text-white',
    nodeColor: 'bg-neon-pink',
    number: '02'
  },
  {
    phase: 'Phase 03 // Web Systems',
    duration: 'FULL STACK ASCENT',
    title: 'BUILDING API ARCHITECTURES',
    icon: <Landmark className="w-5.5 h-5.5 text-black" />,
    description: 'Broke out of scripts to build interactive web engines. Developed React user states synced to secure Express controllers, token gateways, and MongoDB schemas.',
    cardBg: 'bg-neon-yellow text-black',
    nodeColor: 'bg-neon-yellow',
    number: '03'
  },
  {
    phase: 'Phase 04 // AI Fusion',
    duration: 'COGNITIVE SAGAS',
    title: 'FUSING GENERATIVE AGENTS',
    icon: <Cpu className="w-5.5 h-5.5 text-black" />,
    description: 'Integrated intelligent logic into daily apps. Layered the Gemini API for medical disease prediction apps, combined with Google Maps coordinates and Geoapify APIs.',
    cardBg: 'bg-neon-purple text-white',
    nodeColor: 'bg-neon-purple',
    number: '04'
  },
  {
    phase: 'Phase 05 // Deployment',
    duration: 'SCALABLE PRODUCTS',
    title: 'LAUNCHING HIGH VALUE SYSTEMS',
    icon: <Compass className="w-5.5 h-5.5 text-black" />,
    description: 'Assembled and deployed Aquafine—a subscription delivery system with dual-dashboards, cart sync, automated Resend API triggers, and full Razorpay payments integration.',
    cardBg: 'bg-neon-orange text-black',
    nodeColor: 'bg-neon-orange',
    number: '05'
  }
];

export default function Experience() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-20 items-center text-center">
          <div className="flex items-center space-x-2 px-3.5 py-1.5 border-[2.5px] border-black bg-neon-yellow text-black font-cartoon text-[10px] sm:text-xs rounded-xl shadow-[3.5px_3.5px_0px_#000] rotate-[1.5deg] mb-4">
            <Star className="w-3.5 h-3.5 fill-black" />
            <span>MY JOURNEY MAP 🗺️</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-cartoon text-white leading-none">
            ENGINEERING <span className="text-neon-cyan drop-shadow-[3px_3px_0px_#000]">MILESTONES</span>
          </h2>
          <div className="w-24 h-1.5 bg-black border-2 border-white mt-4 shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full" />
        </div>

        {/* Thick outline brutalist Timeline Path */}
        <div className="relative border-l-[4px] border-black md:border-l-0 md:flex md:flex-col md:items-center">
          
          {/* Centered Track Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[4px] bg-black pointer-events-none" />

          {JOURNEY_DATA.map((item, index) => {
            const isLeft = index % 2 === 0;
            const rot = index % 2 === 0 ? 'rotate-[1.5deg]' : 'rotate-[-1.5deg]';
            
            return (
              <div 
                key={item.phase} 
                className="relative mb-16 md:w-full flex flex-col md:flex-row md:justify-between items-start md:items-center"
              >
                
                {/* Numbered Neobrutalist Timeline Node */}
                <div className="absolute -left-[14px] md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-white border-[3px] border-black flex items-center justify-center z-10 shadow-[2px_2px_0px_#000]">
                  <div className={`w-3.5 h-3.5 rounded-full ${item.nodeColor} border border-black`} />
                </div>

                {/* Left Card Block */}
                <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isLeft ? 'md:text-right md:order-1' : 'md:order-2'}`}>
                  {isLeft ? (
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
                      className={`border-[3.5px] border-black ${item.cardBg} p-6 rounded-3xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_rgba(0,0,0,1)] transition-all duration-200 relative ${rot}`}
                    >
                      {/* Floating phase badge */}
                      <span className="px-2.5 py-1 text-[9px] font-cartoon border-2 border-black bg-white text-black rounded-lg inline-block mb-3">
                        {item.phase.toUpperCase()}
                      </span>
                      <h3 className="text-base sm:text-lg font-cartoon mb-2 tracking-wide text-stroke">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-body font-bold leading-relaxed opacity-95">
                        {item.description}
                      </p>
                    </motion.div>
                  ) : null}
                </div>

                {/* Right Card Block */}
                <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
                  {!isLeft ? (
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
                      className={`border-[3.5px] border-black ${item.cardBg} p-6 rounded-3xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_rgba(0,0,0,1)] transition-all duration-200 relative ${rot}`}
                    >
                      {/* Floating phase badge */}
                      <span className="px-2.5 py-1 text-[9px] font-cartoon border-2 border-black bg-white text-black rounded-lg inline-block mb-3">
                        {item.phase.toUpperCase()}
                      </span>
                      <h3 className="text-base sm:text-lg font-cartoon mb-2 tracking-wide text-stroke">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-body font-bold leading-relaxed opacity-95">
                        {item.description}
                      </p>
                    </motion.div>
                  ) : null}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
