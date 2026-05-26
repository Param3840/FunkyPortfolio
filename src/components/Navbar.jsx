import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = NAV_ITEMS.map(item => item.href.slice(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      setIsMobileMenuOpen(false);
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

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-[#090a1a] border-b-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 group"
          >
            <motion.div 
              className="w-10 h-10 rounded-xl border-2 border-black bg-neon-yellow flex items-center justify-center font-cartoon font-extrabold text-black shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)]"
              whileHover={{ rotate: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              P
            </motion.div>
            <span className="text-lg font-cartoon font-extrabold text-white hidden sm:inline-block group-hover:text-neon-yellow transition-colors">
              PARAMVEER
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 px-6 py-2 rounded-full border-[3px] border-black bg-white/10 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 text-sm font-semibold tracking-wide transition-colors duration-300 rounded-full ${
                    isActive ? 'text-white' : 'text-white/80 hover:text-neon-yellow'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 -z-10 rounded-full bg-neon-yellow border-2 border-black text-black"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={isActive ? 'text-black font-extrabold' : ''}>
                    {item.label.toUpperCase()}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Trigger Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://github.com/Param3840" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-neon-yellow transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/param3840" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-neon-cyan transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative px-5 py-2 overflow-hidden rounded-xl group text-xs font-heading font-black tracking-widest border-[2.5px] border-black bg-neon-yellow text-black shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 transition-transform"
            >
              CONNECT 💬
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white focus:outline-none z-50"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden flex flex-col justify-between pt-28 pb-10 px-8 bg-[#090a1a] border-l-[3px] border-black text-white"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
          >
            <div className="absolute inset-0 bg-mesh-glow opacity-30 pointer-events-none -z-10" />

            <div className="flex flex-col space-y-6">
              {NAV_ITEMS.map((item, index) => {
                const sectionId = item.href.slice(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-2xl tracking-wider flex items-center font-heading font-semibold ${
                      isActive ? 'text-neon-yellow font-cartoon font-black' : 'text-white/70 hover:text-white'
                    }`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    {isActive && (
                      <span className="w-2.5 h-2.5 rounded-full mr-3 bg-neon-yellow border border-black" />
                    )}
                    {item.label.toUpperCase()}
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile drawer footers */}
            <motion.div 
              className="flex flex-col space-y-6 pt-6 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center space-x-6">
                <a 
                  href="https://github.com/Param3840" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full text-white/60 hover:text-neon-yellow transition-colors"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/param3840" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full text-white/60 hover:text-neon-cyan transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
              
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-4 font-heading font-black tracking-widest rounded-xl border-[3px] border-black bg-neon-yellow text-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0 transition-all"
              >
                CONNECT 💬
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
