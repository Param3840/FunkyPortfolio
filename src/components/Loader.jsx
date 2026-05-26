import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LOGS = [
  'INITIALIZING COMIC SYSTEM...',
  'DRAWING STICKER ASSETS...',
  'SPINNING CYBER SUNGLASSES...',
  'COMPILING CARTOON WEBGL...',
  'ESTABLISHING FUNKY ROUTINGS...',
  'PARAMVEER STUDIO IS ONLINE!'
];

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 800);
          }, 600);
          return 100;
        }
        const increment = Math.floor(Math.random() * 10) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const index = Math.min(
      Math.floor((progress / 100) * BOOT_LOGS.length),
      BOOT_LOGS.length - 1
    );
    setLogIndex(index);
  }, [progress]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-[#090a1a] z-[99999] flex flex-col items-center justify-center select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Halftone comic background texture overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(250,204,21,0.02)_2.5px,transparent_2.5px)] bg-[size:1.5rem_1.5rem]" />
          
          <div className="flex flex-col items-center max-w-md w-full px-6 z-10">
            {/* Spinning monogram */}
            <motion.div
              className="relative w-24 h-24 mb-8 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Spinning gradient rings */}
              <motion.div 
                className="absolute inset-0 rounded-2xl border-[3px] border-black bg-neon-yellow shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div 
                className="absolute inset-3 rounded-xl border-2 border-black bg-dark-card"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />
              
              <span className="text-xl font-black font-cartoon tracking-wider text-white relative z-10 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                PS
              </span>
            </motion.div>

            {/* Boot log message */}
            <div className="w-full text-center h-6 overflow-hidden mb-3">
              <motion.p
                key={BOOT_LOGS[logIndex]}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 0.8 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-[10px] sm:text-xs font-mono font-extrabold tracking-widest text-neon-yellow uppercase"
              >
                {BOOT_LOGS[logIndex]}
              </motion.p>
            </div>

            {/* Progress counter */}
            <div className="text-6xl font-black font-heading mb-6 tracking-tighter tabular-nums flex items-baseline drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] text-white">
              <span>{progress}</span>
              <span className="text-neon-yellow text-2xl font-black ml-1">%</span>
            </div>

            {/* Neobrutalist progress bar */}
            <div className="w-full h-4 bg-black rounded-xl overflow-hidden relative border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-yellow via-neon-orange to-neon-pink rounded-r-lg"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="absolute bottom-10 left-0 right-0 text-center">
              <p className="text-[9px] font-mono font-bold tracking-[0.25em] text-white/20">
                PARAMVEER KUMAR SINGH // CREATIVE STUDIO v4.0
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
