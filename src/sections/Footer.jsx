import React from 'react';
import { Terminal, Star } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t-[3.5px] border-black bg-[#12142d] py-12 px-6 overflow-hidden select-none">
      
      {/* Background Dot pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_2px,transparent_2px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Watermark copyright block */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 rounded-lg border-2 border-black bg-neon-yellow flex items-center justify-center font-cartoon text-xs text-black shadow-[1.5px_1.5px_0px_#000]">
              P
            </div>
            <span className="font-cartoon text-sm text-white tracking-widest">
              PARAMVEER
            </span>
          </div>
          <p className="text-[10px] sm:text-xs font-body font-bold text-white/50">
            &copy; {currentYear} PARAMVEER KUMAR SINGH. CREATIVE CODING SAGAS. ALL WORK CONTRACTED.
          </p>
        </div>

        {/* Center Star stickers and details */}
        <div className="flex items-center space-x-2 border-2 border-black bg-neon-cyan text-black px-4 py-2 rounded-xl shadow-[3px_3px_0px_#000] rotate-[-2deg] hover:rotate-0 transition-transform">
          <Star className="w-4 h-4 fill-black" />
          <span className="font-cartoon text-[10px] tracking-wide uppercase">MADE WITH MAXIMUM FUNK 💥</span>
        </div>

        {/* Right Side: Pulse / Diagnostics Operations Server Logger */}
        <div className="flex items-center space-x-3 bg-black/40 border-[2.5px] border-black px-4 py-2 rounded-xl shadow-[2.5px_2.5px_0px_#000]">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-pink opacity-75 border border-black" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-pink border border-black" />
          </div>
          <span className="text-[10px] font-mono font-black text-neon-pink tracking-widest uppercase flex items-center space-x-1.5">
            <Terminal className="w-3.5 h-3.5" />
            <span>OPERATIONS: STABLE // v4.0</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
