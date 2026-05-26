import React, { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Core UI Helpers
import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Lazily load dynamic background to optimise initial load speed
const Background3D = lazy(() => import('./components/Background3D'));

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Immersive Loading Screen */}
      <Loader onComplete={() => setIsLoaded(true)} />

      {/* Main App Canvas Wrapper */}
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-screen text-white bg-dark-bg overflow-hidden"
          >
            {/* Specular fluid background layer */}
            <Suspense fallback={<div className="fixed inset-0 bg-[#070815] z-0 pointer-events-none" />}>
              <Background3D />
            </Suspense>

            {/* Premium Cursor Glowing trail effects */}
            <CursorGlow />

            {/* Scroll Reading depth tracker */}
            <ScrollProgress />

            {/* Sticky Floating Navbar */}
            <Navbar />

            {/* Segmented Portfolio Sections */}
            <main className="relative z-10 max-w-7xl mx-auto">
              <Hero />
              
              {/* Bold neobrutalist cartoon dividing block */}
              <div className="h-[4px] w-full bg-black border-y-2 border-white/5" />
              <About />
              
              <div className="h-[4px] w-full bg-black border-y-2 border-white/5" />
              <Skills />
              
              <div className="h-[4px] w-full bg-black border-y-2 border-white/5" />
              <Projects />
              
              <div className="h-[4px] w-full bg-black border-y-2 border-white/5" />
              <Services />
              
              <div className="h-[4px] w-full bg-black border-y-2 border-white/5" />
              <Experience />
              
              <div className="h-[4px] w-full bg-black border-y-2 border-white/5" />
              <Contact />
            </main>

            {/* Closing element */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
