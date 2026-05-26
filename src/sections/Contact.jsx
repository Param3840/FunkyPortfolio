import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Clock, Star, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      
      // Explosion!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#facc15', '#ec4899', '#06b6d4', '#f97316', '#a855f7']
      });

      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

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
    <section id="contact" className="py-24 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 items-center text-center">
          <div className="flex items-center space-x-2 px-3.5 py-1.5 border-[2.5px] border-black bg-neon-yellow text-black font-cartoon text-[10px] sm:text-xs rounded-xl shadow-[3.5px_3.5px_0px_#000] rotate-[-1.5deg] mb-4">
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            <span>TRANSMIT SIGNAL 📡</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-cartoon text-white leading-none">
            CONNECT WITH <span className="text-neon-pink drop-shadow-[3px_3px_0px_#000]">PARAMVEER</span>
          </h2>
          <div className="w-24 h-1.5 bg-black border-2 border-white mt-4 shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full" />
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left Column: Neobrutalist Info Chips */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <h3 className="text-xl md:text-2xl font-cartoon text-neon-cyan drop-shadow-[2px_2px_0px_#000] mb-4">
                  LET'S TALK SHOP! 🤙
                </h3>
                <p className="text-gray-300 font-body font-bold text-sm leading-relaxed">
                  Have an amazing concept, a contract position, or simply want to chat about DSA logic and smart vector configurations? Fill the form, and let the code work!
                </p>
              </motion.div>

              {/* Information Cards Stack */}
              <div className="space-y-4">
                
                {/* Chip 1 */}
                <motion.div 
                  variants={itemVariants}
                  className="flex items-center space-x-4 p-4 border-[3px] border-black bg-neon-yellow text-black rounded-2xl shadow-[4px_4px_0px_#000] rotate-[-1.5deg] hover:rotate-0 transition-transform duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border-2 border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_#000]">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-cartoon text-[10px] tracking-wider opacity-60">EMAIL ME</h4>
                    <a href="mailto:paramveersingh240303@gmail.com" className="font-body font-black text-xs sm:text-sm hover:underline">
                      paramveersingh240303@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Chip 2 */}
                <motion.div 
                  variants={itemVariants}
                  className="flex items-center space-x-4 p-4 border-[3px] border-black bg-neon-cyan text-black rounded-2xl shadow-[4px_4px_0px_#000] rotate-[1.5deg] hover:rotate-0 transition-transform duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border-2 border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_#000]">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-cartoon text-[10px] tracking-wider opacity-60">LOCATION</h4>
                    <p className="font-body font-black text-xs sm:text-sm">
                      Delhi, India 🇮🇳
                    </p>
                  </div>
                </motion.div>

                {/* Chip 3 */}
                <motion.div 
                  variants={itemVariants}
                  className="flex items-center space-x-4 p-4 border-[3px] border-black bg-neon-pink text-white rounded-2xl shadow-[4px_4px_0px_#000] rotate-[-1deg] hover:rotate-0 transition-transform duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border-2 border-black flex items-center justify-center shadow-[1.5px_1.5px_0px_#000]">
                    <Clock className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-cartoon text-[10px] tracking-wider opacity-85">AVAILABILITY</h4>
                    <p className="font-body font-black text-xs sm:text-sm">
                      OPEN FOR CONTRACTS &amp; INTERNSHIPS
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* Retro Stamp */}
            <motion.div 
              variants={itemVariants}
              className="border-[3px] border-black bg-neon-orange text-black p-4 rounded-2xl text-center shadow-[4px_4px_0px_#000] hidden lg:block rotate-[2deg]"
            >
              <span className="font-cartoon text-xs">PARAMVEER // STUDIO ENGINE</span>
            </motion.div>
            
          </div>

          {/* Right Column: High-Contrast Brutalist Form */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7"
          >
            <div className="border-[3.5px] border-black bg-[#12142d] p-6 sm:p-8 rounded-3xl shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] relative">
              
              {/* Taped badge */}
              <div className="absolute -top-3.5 right-8 w-24 h-7 bg-neon-green border-[2.5px] border-black rotate-3 z-10 shadow-[1.5px_1.5px_0px_#000] flex items-center justify-center font-cartoon text-[9px] text-black">
                MAIL MODULE!
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-cartoon text-white tracking-wider">
                    YOUR NAME 📛
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border-[3px] border-black bg-white text-black font-body font-bold rounded-xl focus:outline-none focus:bg-neon-yellow shadow-[3px_3px_0px_#000] focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[5px_5px_0px_#000] transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-cartoon text-white tracking-wider">
                    YOUR EMAIL ✉️
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border-[3px] border-black bg-white text-black font-body font-bold rounded-xl focus:outline-none focus:bg-neon-cyan shadow-[3px_3px_0px_#000] focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[5px_5px_0px_#000] transition-all"
                    placeholder="you@domain.com"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-cartoon text-white tracking-wider">
                    MESSAGE CONTENT 💬
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border-[3px] border-black bg-white text-black font-body font-bold rounded-xl focus:outline-none focus:bg-neon-pink shadow-[3px_3px_0px_#000] focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[5px_5px_0px_#000] transition-all resize-none"
                    placeholder="Write your creative saga here..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4.5 border-[3.5px] border-black bg-neon-yellow text-black font-cartoon text-sm tracking-widest rounded-2xl shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING MODULE... 🚀</span>
                  ) : (
                    <>
                      <span>TRANSMIT NOW! 📡</span>
                      <Send className="w-4 h-4 text-black" />
                    </>
                  )}
                </button>

                {/* Success alert */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 border-[3px] border-black bg-neon-green text-black font-cartoon text-xs text-center rounded-xl shadow-[3px_3px_0px_#000]"
                  >
                    🎉 TRANSMISSION COMPLETED! EXPLOSIONS TRIGGERED!
                  </motion.div>
                )}

              </form>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
