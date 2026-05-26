import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Sparkles, HelpCircle } from 'lucide-react';

const SKILLS_DATA = [
  {
    title: 'LANGUAGES & LOGIC',
    icon: <Code className="w-5.5 h-5.5 text-black" />,
    skills: [
      { name: 'Java', level: '90%' },
      { name: 'C++', level: '85%' },
      { name: 'Python', level: '80%' },
      { name: 'JavaScript', level: '92%' }
    ],
    cardBg: 'bg-neon-yellow text-black',
    accentRaw: '#facc15'
  },
  {
    title: 'FRONTEND BUILDERS',
    icon: <Layout className="w-5.5 h-5.5 text-black" />,
    skills: [
      { name: 'React.js', level: '95%' },
      { name: 'React Native', level: '88%' },
      { name: 'Tailwind CSS', level: '95%' }
    ],
    cardBg: 'bg-neon-pink text-white',
    accentRaw: '#ec4899'
  },
  {
    title: 'BACKEND & INFRA',
    icon: <Server className="w-5.5 h-5.5 text-black" />,
    skills: [
      { name: 'Node.js', level: '90%' },
      { name: 'Express.js', level: '90%' },
      { name: 'JWT Security', level: '85%' },
      { name: 'Socket.IO', level: '82%' }
    ],
    cardBg: 'bg-neon-cyan text-black',
    accentRaw: '#06b6d4'
  },
  {
    title: 'DATABASES & GEARS',
    icon: <Sparkles className="w-5.5 h-5.5 text-black" />,
    skills: [
      { name: 'MongoDB', level: '85%' },
      { name: 'MySQL', level: '80%' },
      { name: 'Razorpay', level: '85%' },
      { name: 'Git & GitHub', level: '90%' }
    ],
    cardBg: 'bg-neon-orange text-black',
    accentRaw: '#f97316'
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section id="skills" className="py-24 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 items-center text-center">
          <div className="flex items-center space-x-2 px-3.5 py-1.5 border-[2.5px] border-black bg-neon-pink text-white font-cartoon text-[10px] sm:text-xs rounded-xl shadow-[3.5px_3.5px_0px_#000] rotate-[1.5deg] mb-4">
            <HelpCircle className="w-3.5 h-3.5 fill-white stroke-black" />
            <span>WHAT CAN I PLAY WITH? 🕹️</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-cartoon text-white leading-none">
            TECH STACKS <span className="text-neon-yellow drop-shadow-[3px_3px_0px_#000]">I COMMAND</span>
          </h2>
          <div className="w-24 h-1.5 bg-black border-2 border-white mt-4 shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full" />
        </div>

        {/* Funky Brutalist Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SKILLS_DATA.map((category) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              className="h-full"
            >
              {/* Memphis brutalist style card */}
              <div className={`h-full border-[3.5px] border-black ${category.cardBg} rounded-3xl p-6 relative overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_rgba(0,0,0,1)] transition-all duration-200`}>
                
                {/* Category Header */}
                <div className="flex items-center space-x-3.5 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-white border-[2.5px] border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
                    {category.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-cartoon tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Progress bars inside black track outline */}
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2 group">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-body font-black">
                        <span className="tracking-wide">
                          {skill.name.toUpperCase()}
                        </span>
                        <span className="font-mono opacity-80">
                          {skill.level}
                        </span>
                      </div>
                      
                      {/* Interactive neobrutalist outline slider track */}
                      <div className="w-full h-5 bg-black border-[2.5px] border-black rounded-xl overflow-hidden relative shadow-[2px_2px_0px_rgba(255,255,255,0.1)]">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-white border-r-[2.5px] border-black rounded-r-lg"
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Star shape stickers overlay */}
                <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none">
                  <StarIcon className="w-24 h-24" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Simple internal helper component for star sticker vector
function StarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="1.5" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
