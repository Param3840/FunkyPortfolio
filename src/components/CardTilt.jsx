import React, { useRef, useState } from 'react';

export default function CardTilt({ children, className = '' }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ rx: 0, ry: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    // Get element size and cursor relative coordinates
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Relative cursor coordinates from center (-0.5 to 0.5)
    const xVal = (e.clientX - rect.left) / width;
    const yVal = (e.clientY - rect.top) / height;

    setCoords({ x: xVal * 100, y: yVal * 100 });

    // Compute mild 3D rotation values
    const maxRotation = 10; // degrees
    const rY = (xVal - 0.5) * maxRotation;
    const rX = (0.5 - yVal) * maxRotation;

    setRotation({ rx: rX, ry: rY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ rx: 0, ry: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`relative rounded-2xl glass-panel p-6 overflow-hidden transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${rotation.rx}deg) rotateY(${rotation.ry}deg) scale3d(1.02, 1.02, 1.02)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered ? 'none' : 'all 0.5s ease',
        transformStyle: 'preserve-3d',
      }}
    >
      {/*specular mouse-following light glow inside card */}
      <div
        className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(120px circle at ${coords.x}% ${coords.y}%, rgba(6, 182, 212, 0.15) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 100%)`,
        }}
      />

      {/* Specular border glow */}
      <div
        className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.8 : 0,
          border: '1px solid transparent',
          background: `radial-gradient(120px circle at ${coords.x}% ${coords.y}%, rgba(6, 182, 212, 0.4) 0%, rgba(168, 85, 247, 0.2) 60%, transparent 100%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      <div style={{ transform: 'translateZ(20px)' }}>{children}</div>
    </div>
  );
}
