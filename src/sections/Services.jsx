import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BrainCircuit, Landmark, BarChart4, Smartphone, Activity, MessageSquare, Star } from 'lucide-react';

const SERVICES_DATA = [
  {
    title: 'Web App Engineering',
    description: 'Engineering highly responsive, scalable web clients backed by performant Node.js servers, custom database schemas, and microservice architectures.',
    icon: <Globe className="w-6 h-6 text-black" />,
    cardBg: 'bg-neon-cyan text-black',
    tag: 'SCALE 🚀'
  },
  {
    title: 'AI Integrations',
    description: 'Integrating cognitive intelligence layers (Generative Models, Gemini API, Custom Embeddings) to solve complex workflows and automate systems.',
    icon: <BrainCircuit className="w-6 h-6 text-black" />,
    cardBg: 'bg-neon-purple text-white',
    tag: 'SMART 🧠'
  },
  {
    title: 'E-Commerce Portals',
    description: 'Building end-to-end digital transaction platforms, containing persistent shopping carts, Razorpay integrations, and cloud stock databases.',
    icon: <Landmark className="w-6 h-6 text-black" />,
    cardBg: 'bg-neon-yellow text-black',
    tag: 'SECURE 💳'
  },
  {
    title: 'Mobile Applications',
    description: 'Designing fully interactive, native smartphone clients (iOS & Android) with React Native, supporting cloud state syncing and push frameworks.',
    icon: <Smartphone className="w-6 h-6 text-black" />,
    cardBg: 'bg-neon-pink text-white',
    tag: 'NATIVE 📱'
  },
  {
    title: 'Admin Command Decks',
    description: 'Assembling robust administrative command decks with multi-layered role authentications, live database telemetry, and charting assets.',
    icon: <BarChart4 className="w-6 h-6 text-black" />,
    cardBg: 'bg-neon-orange text-black',
    tag: 'CONTROL ⚙️'
  },
  {
    title: 'Sub-Second WebSockets',
    description: 'Designing sub-second state updating web interfaces powered by Socket.IO, enabling live peer negotiations and multi-user chat sessions.',
    icon: <MessageSquare className="w-6 h-6 text-black" />,
    cardBg: 'bg-neon-cyan text-black',
    tag: 'SOCKETS ⚡'
  },
  {
    title: 'Business Conversions',
    description: 'Deploying highly performant, accessible digital interfaces optimized for high search engine visibility, driving operational conversions.',
    icon: <Activity className="w-6 h-6 text-black" />,
    cardBg: 'bg-neon-green text-black',
    tag: 'GROWTH 📈'
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 items-center text-center">
          <div className="flex items-center space-x-2 px-3.5 py-1.5 border-[2.5px] border-black bg-neon-cyan text-black font-cartoon text-[10px] sm:text-xs rounded-xl shadow-[3.5px_3.5px_0px_#000] rotate-[1.5deg] mb-4">
            <Star className="w-3.5 h-3.5 fill-black" />
            <span>WHAT I DELIVER 🎁</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-cartoon text-white leading-none">
            PROFESSIONAL <span className="text-neon-pink drop-shadow-[3px_3px_0px_#000]">SOLUTIONS</span>
          </h2>
          <div className="w-24 h-1.5 bg-black border-2 border-white mt-4 shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full" />
        </div>

        {/* Services Brutalist Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SERVICES_DATA.map((service, index) => {
            const isLast = index === SERVICES_DATA.length - 1;
            const rot = index % 2 === 0 ? 'rotate-[1.5deg]' : 'rotate-[-1.5deg]';
            
            return (
              <motion.div 
                key={service.title}
                variants={itemVariants}
                className={`h-full ${isLast ? 'lg:col-span-3 lg:max-w-xl lg:mx-auto w-full' : ''}`}
              >
                {/* Neobrutalist Service Card */}
                <div className={`h-full border-[3.5px] border-black ${service.cardBg} rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:rotate-0 transition-all duration-300 ${rot}`}>
                  
                  {/* Card Tape sticker */}
                  <div className="absolute top-3 right-4 px-2 py-1 bg-black border border-white text-[8px] text-white font-cartoon rounded-md">
                    {service.tag}
                  </div>

                  <div>
                    {/* Icon Container with neobrutalist borders */}
                    <div className="w-12 h-12 rounded-xl bg-white border-[2.5px] border-black flex items-center justify-center mb-6 shadow-[2.5px_2.5px_0px_#000]">
                      {service.icon}
                    </div>

                    <h3 className="text-base md:text-lg font-cartoon mb-3 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm font-body font-bold leading-relaxed opacity-95">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Subtle offset visual bar */}
                  <div className="w-full h-2.5 bg-black border-2 border-black rounded-lg mt-6 opacity-30" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
