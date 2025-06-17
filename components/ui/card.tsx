"use client";

import { useState, useRef } from 'react';

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div className="relative w-full lg:w-4/5 h-128 rounded-2xl overflow-hidden mx-auto" data-aos="fade-up" data-aos-duration="1000">
      {/* Background Image */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden z-0">
        <img
          src="/images/painttexture.jpg"
          alt="Background img"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Cursor Glow (z-10) */}
      {isHovered && (
        <div
          className="absolute z-10 pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePosition.x - 125,
            top: mousePosition.y - 125,
            width: '250px',
            height: '250px',
            background:
              'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(2, 6, 23, 0.05) 70%, transparent 100%)',
            borderRadius: '50%',
            filter: 'blur(25px)',
            opacity: 1,
          }}
        ></div>
      )}

      {/* Foreground Content (z-20) */}
      <div
        ref={cardRef}
        className="relative z-20 w-full h-full cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 to-zinc-800/40 border border-white/80 border-blur-sm rounded-2xl z-10 pointer-events-none"></div>

        {/* Clickable Content */}
        <div className="relative z-20 w-full h-full p-16">{children}</div>

        {/* Additional Glass Ring */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-blue-400/30 ring-inset z-10 pointer-events-none"></div>
      </div>
    </div>
  );
}
