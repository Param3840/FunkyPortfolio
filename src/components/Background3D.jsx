import React from 'react';
import { motion } from 'framer-motion';

export default function Background3D() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none select-none overflow-hidden bg-dark-bg">
      {/* Comic-style screen tone dot overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1.5px,transparent_1.5px)] bg-[size:1.5rem_1.5rem] pointer-events-none z-1" />

      {/* Floating morphing background blobs */}
      <div className="absolute inset-0 z-0 opacity-30 blur-[130px]">
        {/* Yellow/Orange Blob */}
        <div className="absolute top-[-5%] left-[-5%] w-[450px] h-[450px] bg-gradient-to-tr from-neon-yellow to-neon-orange animate-blob-slow filter" />
        {/* Pink/Purple Blob */}
        <div className="absolute bottom-[5%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-neon-pink to-neon-purple animate-blob-medium filter" />
        {/* Cyan Blob */}
        <div className="absolute top-[40%] left-[15%] w-[400px] h-[400px] bg-gradient-to-r from-neon-cyan via-neon-blue to-transparent animate-blob-fast filter" />
      </div>

      {/* Drifting Cartoon Memphis Stickers Layer */}
      <div className="absolute inset-0 z-0 w-full h-full">
        
        {/* Floating Yellow Star 1 */}
        <motion.div 
          className="absolute left-[10%] top-[18%] w-10 h-10 text-neon-yellow drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </motion.div>

        {/* Floating Yellow Star 2 */}
        <motion.div 
          className="absolute right-[12%] bottom-[22%] w-12 h-12 text-neon-yellow drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -30, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </motion.div>

        {/* Floating Cyan Plus 1 */}
        <motion.div 
          className="absolute left-[25%] bottom-[15%] w-8 h-8 text-neon-cyan drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
          animate={{ 
            x: [0, 12, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>

        {/* Floating Cyan Plus 2 */}
        <motion.div 
          className="absolute right-[20%] top-[15%] w-7 h-7 text-neon-cyan drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
          animate={{ 
            x: [0, -10, 0],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>

        {/* Floating Pink Wavy Ribbon */}
        <motion.div 
          className="absolute left-[45%] top-[10%] w-14 h-8 text-neon-pink drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
          animate={{ 
            y: [0, -8, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 60 20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
            <path d="M5 10 Q 15 2, 25 10 T 45 10 T 55 10" />
          </svg>
        </motion.div>

      </div>

      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg/30 z-1 pointer-events-none" />
    </div>
  );
}
