import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [isMobile, setIsMobile] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tracking cursor positions
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs for the glowing neon trailing elements to create fluid movement
  const configTrailing = { damping: 20, stiffness: 220, mass: 0.6 };
  const haloX = useSpring(cursorX, configTrailing);
  const haloY = useSpring(cursorY, configTrailing);

  const configOuter = { damping: 15, stiffness: 150, mass: 0.8 };
  const outerX = useSpring(cursorX, configOuter);
  const outerY = useSpring(cursorY, configOuter);

  useEffect(() => {
    // Check if the device is mobile/touch-based
    const checkDevice = () => {
      const touchCapable = 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        window.innerWidth < 1024;
      setIsMobile(touchCapable);
      
      if (!touchCapable) {
        document.body.classList.add('custom-cursor-active');
      } else {
        document.body.classList.remove('custom-cursor-active');
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    // Dynamic hover states for links/buttons
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      {/* 1. Ultra-Bright Neon Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: isHovered 
            ? '0 0 10px #facc15, 0 0 20px #facc15, 0 0 35px #facc15' 
            : '0 0 8px #06b6d4, 0 0 16px #06b6d4, 0 0 28px #06b6d4'
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? '#facc15' : '#06b6d4',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />

      {/* 2. Fluid Neon Ring Tail (First Spring Lag) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border-2 bg-transparent mix-blend-screen"
        style={{
          x: haloX,
          y: haloY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: isHovered ? '#ec4899' : '#06b6d4',
          boxShadow: isHovered 
            ? '0 0 15px rgba(236, 72, 153, 0.6), inset 0 0 10px rgba(236, 72, 153, 0.4)' 
            : '0 0 12px rgba(6, 182, 212, 0.5), inset 0 0 8px rgba(6, 182, 212, 0.3)'
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          rotate: isHovered ? 180 : 0
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />

      {/* 3. Outer Neon Halo (Second Lagged Spring Layer) */}
      <motion.div
        className="fixed top-0 left-0 w-14 h-14 rounded-full pointer-events-none z-[9997] border-[1.5px] border-dashed bg-transparent mix-blend-screen"
        style={{
          x: outerX,
          y: outerY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: isHovered ? '#a855f7' : '#f97316',
          boxShadow: isHovered 
            ? '0 0 20px rgba(168, 85, 247, 0.3)' 
            : '0 0 15px rgba(249, 115, 22, 0.2)'
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          rotate: isHovered ? -180 : 0
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      />

      {/* 4. Giant Ambient Light Glow Following Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none z-[-1] opacity-35 mix-blend-screen blur-[100px]"
        style={{
          x: haloX,
          y: haloY,
          translateX: '-50%',
          translateY: '-50%',
          background: isHovered 
            ? 'radial-gradient(circle, rgba(236,72,153,0.18) 0%, rgba(168,85,247,0.08) 50%, transparent 70%)' 
            : 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, rgba(249,115,22,0.08) 50%, transparent 70%)'
        }}
      />
    </>
  );
}
