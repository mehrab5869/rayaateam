import React, { useRef, useState } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  spotlight?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", spotlight = true }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !spotlight) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden rounded-3xl
        bg-neutral-950 border border-neutral-800
        transition-all duration-300
        ${className}
      `}
    >
      {/* Spotlight Effect Layer */}
      {spotlight && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          }}
        />
      )}
      
      {/* Border Reveal Layer */}
      {spotlight && (
          <div 
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300"
            style={{
                opacity,
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
                maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                maskComposite: 'exclude',
                WebkitMaskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                WebkitMaskComposite: 'xor',
                padding: '1px'
            }}
          />
      )}

      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;